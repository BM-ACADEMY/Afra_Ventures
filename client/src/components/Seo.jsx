import { createContext, useContext, useEffect } from 'react';
import { PAGES, urlPath } from '../config/pages.js';
import { SITE } from '../config/site.js';
import { organization } from '../lib/jsonld.js';

// During pre-render the server passes a collect(head) callback through this
// context and the tags are written into the raw HTML <head>. In the browser
// there is no callback; the tags are applied to document.head on each navigation.
export const HeadContext = createContext(null);

const MARK = 'data-seo';

function buildTags({
  title,
  description,
  file,
  type = 'website',
  noindex,
  image = SITE.ogImage,
  jsonLd = [],
}) {
  const url = SITE.url + urlPath(file);
  const meta = (key, name, content) => ({ tag: 'meta', attrs: { [key]: name, content } });
  const tags = [
    meta('name', 'description', description),
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
  ];
  // Drafts and pages flagged noindex in the registry are always noindex,
  // even if the page component forgets to pass the prop.
  const entry = PAGES.find(p => p.file === file);
  if (noindex || entry?.draft || entry?.noindex) tags.push(meta('name', 'robots', 'noindex, nofollow'));
  tags.push(
    meta('property', 'og:type', type),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:url', url),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
  );
  // Share image only once one exists (Task 4.3); a missing file would give
  // WhatsApp / LinkedIn a broken preview.
  if (image) {
    tags.push(
      meta('property', 'og:image', SITE.url + image),
      meta('name', 'twitter:image', SITE.url + image),
    );
  }
  tags.push({
    tag: 'script',
    attrs: { type: 'application/ld+json' },
    text: JSON.stringify([organization(), ...jsonLd]),
  });
  return { title, tags };
}

const escAttr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escText = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Serialises collected tags for the pre-rendered <head>.
export function renderHead({ title, tags }) {
  const out = [`<title>${escText(title)}</title>`];
  for (const { tag, attrs, text } of tags) {
    const a = Object.entries(attrs).map(([k, v]) => ` ${k}="${escAttr(v)}"`).join('');
    if (tag === 'script') out.push(`<script${a} ${MARK}>${text.replace(/</g, '\\u003c')}</script>`);
    else out.push(`<${tag}${a} ${MARK}>`);
  }
  return out.join('\n');
}

function applyHead({ title, tags }) {
  document.title = title;
  document.head.querySelectorAll(`[${MARK}]`).forEach(el => el.remove());
  for (const { tag, attrs, text } of tags) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    el.setAttribute(MARK, '');
    if (text) el.textContent = text;
    document.head.appendChild(el);
  }
}

export default function Seo(props) {
  const collect = useContext(HeadContext);
  const head = buildTags(props);
  if (collect) collect(head);
  const key = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(key));
  }, [key]);
  return null;
}
