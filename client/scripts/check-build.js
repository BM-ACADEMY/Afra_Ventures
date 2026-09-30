// Build checks, called at the end of scripts/prerender.js. Any failure exits 1 and
// stops the deploy.
//
// 1. Draft guard: pilot / traction / brands must never reach a production build.
// 2. Raw-HTML SEO check: every page's HTML in dist/ (about/index.html, …), read as text (no JavaScript runs), must have
//    - exactly one non-empty <title>
//    - a non-empty <meta name="description">
//    - <link rel="canonical"> = https://afraventures.in<path>  (clean URL: /about, / for home)
//    - exactly one <h1>
//    - JSON-LD that parses (every <script type="application/ld+json">)
//    - noindex on drafts and 404, and never on live pages
//
// Page facts (drafts, noindex) come from the app's own page list, as loaded by
// prerender.js through Vite — the same one the build used — rather than process.env,
// because Vite also takes VITE_INCLUDE_DRAFTS from .env files that plain Node never sees.
import fs from 'node:fs';
import path from 'node:path';

// dist/ location of a page's HTML ('about.html' → 'about/index.html').
export const outFile = file =>
  file === 'index.html' || file === '404.html' ? file : `${file.replace(/\.html$/, '')}/index.html`;

// Every .html file under dist/, as paths relative to dist/ with forward slashes.
const htmlFiles = (dir = 'dist', rel = '') =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => {
    const r = rel ? `${rel}/${d.name}` : d.name;
    if (d.isDirectory()) return d.name === 'assets' ? [] : htmlFiles(path.join(dir, d.name), r);
    return d.name.endsWith('.html') ? [r] : [];
  });

// Runs both checks on dist/. Returns a one-line summary; exits 1 on any problem.
export function checkBuild({ BUILD_PAGES, DRAFT_FILES, SITE }) {
  // ---------- 1. Draft guard ----------
  const previewBuild = BUILD_PAGES.some(p => p.draft);

  if (previewBuild) {
    console.warn(
      `check-build: draft preview build — ${DRAFT_FILES.join(', ')} included on purpose. Never deploy this dist/.`,
    );
  } else {
    const leaked = DRAFT_FILES.filter(f => fs.existsSync(path.resolve('dist', outFile(f))));
    if (leaked.length) {
      console.error('Draft pages in production build:', leaked);
      process.exit(1);
    }
  }

  // ---------- 2. Raw-HTML SEO check ----------
  const pages = new Map(BUILD_PAGES.map(p => [outFile(p.file), p]));
  const files = htmlFiles();
  const problems = [];

  const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
  const tags = (html, re) => [...html.matchAll(re)].map(m => m[0]);

  for (const file of files) {
    const page = pages.get(file);
    const fail = msg => problems.push(`${file}: ${msg}`);
    if (!page) {
      fail('not in the page registry (src/config/pages.js) — unexpected page in dist/');
      continue;
    }
    const html = fs.readFileSync(path.join('dist', file), 'utf8');
    const head = html.slice(0, html.indexOf('</head>'));

    const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
    if (titles.length !== 1) fail(`expected 1 <title>, found ${titles.length}`);
    else if (!titles[0][1].trim()) fail('<title> is empty');

    const desc = tags(head, /<meta\s[^>]*name="description"[^>]*>/g);
    if (desc.length !== 1) fail(`expected 1 meta description, found ${desc.length}`);
    else if (!attr(desc[0], 'content')?.trim()) fail('meta description is empty');

    const canon = tags(head, /<link\s[^>]*rel="canonical"[^>]*>/g);
    const wantCanon = SITE.url + page.path;
    if (canon.length !== 1) fail(`expected 1 canonical link, found ${canon.length}`);
    else if (attr(canon[0], 'href') !== wantCanon)
      fail(`canonical is ${attr(canon[0], 'href')}, expected ${wantCanon}`);

    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) fail(`expected 1 <h1>, found ${h1s}`);

    const ld = [
      ...html.matchAll(/<script\s[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    ];
    if (!ld.length) fail('no JSON-LD found');
    ld.forEach((m, i) => {
      try {
        JSON.parse(m[1]);
      } catch (e) {
        fail(`JSON-LD block ${i + 1} does not parse: ${e.message}`);
      }
    });

    const robots = tags(head, /<meta\s[^>]*name="robots"[^>]*>/g).map(
      t => attr(t, 'content') || '',
    );
    const hasNoindex = robots.some(c => /\bnoindex\b/.test(c));
    const wantNoindex = Boolean(page.draft || page.noindex);
    if (wantNoindex && !hasNoindex)
      fail('must be noindex (draft or 404) but has no robots noindex');
    if (!wantNoindex && hasNoindex) fail('live page must not be noindex');
  }

  for (const p of BUILD_PAGES) {
    if (!files.includes(outFile(p.file)))
      problems.push(`${outFile(p.file)}: in the page registry but missing from dist/`);
  }

  if (problems.length) {
    console.error(
      `check-build: SEO check failed (${problems.length} problem${problems.length > 1 ? 's' : ''}):`,
    );
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exit(1);
  }
  return `checks passed: ${previewBuild ? 'DRAFT PREVIEW BUILD' : 'no drafts'}, SEO on ${files.length} pages`;
}
