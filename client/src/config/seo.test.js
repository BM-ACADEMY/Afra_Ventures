import { describe, expect, it } from 'vitest';
import { PAGES } from './pages.js';
import { SEO, SEO_NOINDEX } from './seo.js';

const live = PAGES.filter(p => !p.draft && !p.noindex).map(p => p.file);

describe('SEO meta tags (src/config/seo.js)', () => {
  it('has an entry for every live page', () => {
    expect(live.filter(f => !SEO[f])).toEqual([]);
  });

  for (const file of live) {
    it(`${file}: title 50–60 chars, ends with brand`, () => {
      const t = SEO[file].title;
      expect(t.length, t).toBeGreaterThanOrEqual(50);
      expect(t.length, t).toBeLessThanOrEqual(60);
      expect(t.endsWith('| Afra Ventures')).toBe(true);
    });
    it(`${file}: description 140–155 chars`, () => {
      const d = SEO[file].description;
      expect(d.length, d).toBeGreaterThanOrEqual(140);
      expect(d.length, d).toBeLessThanOrEqual(155);
    });
  }

  it('titles and descriptions are unique', () => {
    const rows = Object.entries(SEO).filter(([f]) => !SEO_NOINDEX.includes(f));
    const titles = rows.map(([, v]) => v.title);
    const descs = rows.map(([, v]) => v.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descs).size).toBe(descs.length);
  });
});
