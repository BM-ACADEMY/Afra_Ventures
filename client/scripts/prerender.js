// Build-time pre-rendering. Runs after `vite build --manifest` (see package.json):
//   npm run build  =  vite build --manifest && node scripts/prerender.js
//
// Loads the app's server entry (src/entry-server.jsx) through Vite in memory —
// no second SSR build, no dist-ssr/ folder — renders every page to HTML and
// writes one folder per page, so any static host serves /about without rewrites:
//   /       → dist/index.html
//   /about  → dist/about/index.html
//   /404    → dist/404.html   (stays at the root: hosts look for it there)
// Then writes dist/sitemap.xml and runs the build checks (scripts/check-build.js).
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { checkBuild, outFile } from './check-build.js';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const mark of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(mark)) throw new Error(`index.html template is missing ${mark}`);
}

// Same mode as `vite build`, so .env.production applies (drafts off, form URLs).
const vite = await createServer({
  mode: 'production',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
});
const app = await vite.ssrLoadModule('/src/entry-server.jsx');
const { render, BUILD_PAGES, PAGES, SITE } = app;

// Imported images render as their source path (/src/assets/flowlines.webp) when
// loaded this way; swap each for the hashed file `vite build` wrote (/assets/…).
const manifestFile = path.join(dist, '.vite', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
const assets = Object.entries(manifest).filter(([src, e]) => src.startsWith('src/') && !e.isEntry);
const builtUrls = html =>
  assets.reduce((out, [src, e]) => out.replaceAll(`/${src}`, `/${e.file}`), html);

try {
  for (const page of BUILD_PAGES) {
    const { html, head } = await render(page.path);
    // Function replacements, so "$" in page content is never treated as a pattern.
    const out = template
      .replace('<!--app-head-->', () => head)
      .replace('<!--app-html-->', () => builtUrls(html));
    const target = path.join(dist, outFile(page.file));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, out);
  }
} finally {
  await vite.close();
}
// The manifest was only needed above; it is not part of the site.
fs.rmSync(path.join(dist, '.vite'), { recursive: true, force: true });

// sitemap.xml: live, indexable pages only (no drafts, no 404).
const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.filter(p => !p.draft && !p.noindex).map(
  p => `  <url>
    <loc>${SITE.url}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`,
);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`,
);

const checks = checkBuild(app); // exits 1 with the problems listed if anything fails
const routes = BUILD_PAGES.filter(p => p.file !== '404.html').length;
console.log(
  `Pre-rendered ${routes} routes + 404.html, sitemap.xml (${urls.length} URLs) · ${checks}`,
);
