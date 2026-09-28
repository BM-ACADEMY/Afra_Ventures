// Writes one pre-rendered .html file per page into dist/:
//   /           → dist/index.html
//   /about.html → dist/about.html   (flat — never dist/about/index.html)
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const mark of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(mark)) throw new Error(`index.html template is missing ${mark}`);
}

const entry = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href;
const { render, BUILD_PAGES } = await import(entry);

for (const page of BUILD_PAGES) {
  const { html, head } = await render(page.path);
  // Function replacements, so "$" in page content is never treated as a pattern.
  const out = template
    .replace('<!--app-head-->', () => head)
    .replace('<!--app-html-->', () => html);
  fs.writeFileSync(path.join(dist, page.file), out);
  console.log(`  prerendered ${page.file}`);
}
console.log(`${BUILD_PAGES.length} pages written to dist/`);
