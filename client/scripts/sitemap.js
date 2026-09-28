// Writes dist/sitemap.xml from the page registry. Runs after prerender.
// Drafts and noindex pages (404) are never listed.
// The registry is read from the SSR bundle, because src/config/pages.js uses
// import.meta.env, which only exists inside a Vite build.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const entry = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href;
const { PAGES, SITE } = await import(entry);

const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.filter(p => !p.draft && !p.noindex).map(
  p => `  <url>
    <loc>${SITE.url}/${p.file === 'index.html' ? '' : p.file}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`,
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve('dist/sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
