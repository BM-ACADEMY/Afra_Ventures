// Old vs new parity report — run once before launch; any difference needs sign-off.
//
//   npm run build && npm run parity
//   node scripts/parity.js [path/to/old/site]     (default: ../docs/upload-this-to-afraventures.in)
//
// For every page of the old static site, compares it with dist/<file>:
//   title, meta description, canonical  → must match exactly
//   visible text                        → whitespace-normalised, sentence by sentence;
//                                         every removed / added sentence is listed
// Exit code 0 when everything matches, 1 when anything differs or a page is missing.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const OLD = path.resolve(process.argv[2] || '../docs/upload-this-to-afraventures.in');
const NEW = path.resolve('dist');

// Elements whose boundaries end a run of text (a sentence never continues across them).
const BLOCK = new Set(
  ('address article aside blockquote br dd details div dl dt fieldset figcaption figure footer form ' +
    'h1 h2 h3 h4 h5 h6 header hr li main nav ol option p pre section select summary table tbody td ' +
    'tfoot th thead tr ul label button textarea').split(' '),
);
const SKIP = new Set(['script', 'style', 'noscript', 'template', 'head']);

// Classes that site.css lays out as flex/grid: their children are separate boxes on
// screen, so whitespace (or its absence) between them never shows.
const css = fs.readFileSync(path.resolve('src/styles/site.css'), 'utf8');
const FLEX = new Set();
for (const m of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
  if (!/display:\s*(inline-)?(flex|grid)/.test(m[2])) continue;
  for (const sel of m[1].split(',')) {
    const one = sel.trim().match(/^\.([\w-]+)$/);
    if (one) FLEX.add(one[1]);
  }
}
const isFlex = node => (attr(node, 'class') || '').split(/\s+/).some(c => FLEX.has(c));

const find = (node, test) => {
  if (test(node)) return node;
  for (const c of node.childNodes || []) {
    const hit = find(c, test);
    if (hit) return hit;
  }
  return null;
};
const attr = (node, name) => node?.attrs?.find(a => a.name === name)?.value;
const norm = s => s.replace(/\s+/g, ' ').trim(); // \s includes the non-breaking space

function readPage(file) {
  const doc = parse(fs.readFileSync(file, 'utf8'));
  const head = find(doc, n => n.tagName === 'head');
  const title = find(head, n => n.tagName === 'title');
  const meta = (key, value) => find(head, n => n.tagName === 'meta' && attr(n, key) === value);
  const canonical = find(head, n => n.tagName === 'link' && attr(n, 'rel') === 'canonical');

  // Visible text as blocks, then sentences.
  const blocks = [];
  let current = '';
  const flush = () => {
    if (norm(current)) blocks.push(norm(current));
    current = '';
  };
  const walk = node => {
    if (SKIP.has(node.tagName)) return;
    if (node.nodeName === '#text') {
      current += node.value;
      return;
    }
    const block = BLOCK.has(node.tagName);
    const flex = isFlex(node);
    if (block) flush();
    for (const c of node.childNodes || []) {
      if (flex) current += ' ';
      walk(c);
    }
    if (block) flush();
  };
  walk(find(doc, n => n.tagName === 'body'));
  flush();
  const sentences = blocks.flatMap(b => b.split(/(?<=[.!?])\s+(?=[^\sa-z])/).map(norm).filter(Boolean));

  return {
    title: norm(title ? title.childNodes.map(c => c.value || '').join('') : ''),
    description: norm(attr(meta('name', 'description'), 'content') || ''),
    canonical: attr(canonical, 'href') || '',
    sentences,
  };
}

// Longest-common-subsequence diff of two sentence lists.
function diff(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out = [];
  let i = 0, j = 0;
  while (i < m || j < n) {
    if (i < m && j < n && a[i] === b[j]) (i++, j++);
    else if (j < n && (i === m || dp[i][j + 1] >= dp[i + 1][j])) out.push(`+ ${b[j++]}`);
    else out.push(`- ${a[i++]}`);
  }
  return out;
}

if (!fs.existsSync(OLD)) {
  console.error(`Old site not found: ${OLD}`);
  process.exit(1);
}
if (!fs.existsSync(NEW)) {
  console.error('dist/ not found — run npm run build first.');
  process.exit(1);
}

const oldFiles = fs.readdirSync(OLD).filter(f => f.endsWith('.html')).sort();
const newFiles = new Set(fs.readdirSync(NEW).filter(f => f.endsWith('.html')));
let changed = 0;

console.log(`Parity: ${OLD}\n    vs: ${NEW}\n`);
for (const file of oldFiles) {
  if (!newFiles.has(file)) {
    changed++;
    console.log(`✗ ${file}: missing from dist/\n`);
    continue;
  }
  const a = readPage(path.join(OLD, file));
  const b = readPage(path.join(NEW, file));
  const issues = [];
  for (const key of ['title', 'description', 'canonical']) {
    if (a[key] !== b[key]) issues.push(`  ${key} differs\n    - ${a[key]}\n    + ${b[key]}`);
  }
  const text = diff(a.sentences, b.sentences);
  if (text.length) issues.push(`  visible text: ${text.length} sentence change(s)\n${text.map(l => `    ${l}`).join('\n')}`);

  if (issues.length) {
    changed++;
    console.log(`✗ ${file}\n${issues.join('\n')}\n`);
  } else {
    console.log(`✓ ${file} (title, description, canonical, ${a.sentences.length} sentences identical)`);
  }
}
const extra = [...newFiles].filter(f => !oldFiles.includes(f));
for (const f of extra) console.log(`• ${f}: new page, not on the old site`);

console.log(
  changed
    ? `\n${changed} of ${oldFiles.length} pages differ — review and sign off each change before launch.`
    : `\nAll ${oldFiles.length} pages match: titles, descriptions, canonicals and visible text.`,
);
process.exit(changed ? 1 : 0);
