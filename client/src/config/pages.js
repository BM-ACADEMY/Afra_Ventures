// Page registry: one list drives routing, pre-rendering, the sitemap and the
// draft guard. Plain data (no JSX) so build scripts can read it too.

export const INCLUDE_DRAFTS = import.meta.env.VITE_INCLUDE_DRAFTS === 'true';

// Public address of a page file, without ".html": 'about.html' → '/about', 'index.html' → '/'.
// The build still writes dist/about.html; the host serves it at /about (Vercel cleanUrls).
export const urlPath = file => (file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`);

export const PAGES = [
  { path: '/', file: 'index.html', priority: 1.0 },
  { path: '/products', file: 'products.html', priority: 0.9 },
  { path: '/gymdesk', file: 'gymdesk.html', priority: 0.9 },
  { path: '/nera', file: 'nera.html', priority: 0.8 },
  { path: '/velai-vaaippu', file: 'velai-vaaippu.html', priority: 0.8 },
  { path: '/technology', file: 'technology.html', priority: 0.7 },
  { path: '/partners', file: 'partners.html', priority: 0.7 },
  { path: '/about', file: 'about.html', priority: 0.8 },
  { path: '/careers', file: 'careers.html', priority: 0.6 },
  { path: '/insights', file: 'insights.html', priority: 0.6 },
  { path: '/gym-membership-renewals', file: 'gym-membership-renewals.html', priority: 0.5 },
  { path: '/college-placement-software', file: 'college-placement-software.html', priority: 0.5 },
  { path: '/multi-brand-bookkeeping', file: 'multi-brand-bookkeeping.html', priority: 0.5 },
  { path: '/contact', file: 'contact.html', priority: 0.8 },
  { path: '/privacy', file: 'privacy.html', priority: 0.3 },
  { path: '/terms', file: 'terms.html', priority: 0.3 },
  { path: '/404', file: '404.html', noindex: true },

  { path: '/pilot', file: 'pilot.html', draft: true, noindex: true },
  { path: '/traction', file: 'traction.html', draft: true, noindex: true },
  { path: '/brands', file: 'brands.html', draft: true, noindex: true },
  { path: '/launch', file: 'launch.html', bare: true, priority: 0.8 },
];

export const DRAFT_FILES = PAGES.filter(p => p.draft).map(p => p.file);

// Pages that are part of this build.
export const BUILD_PAGES = PAGES.filter(p => INCLUDE_DRAFTS || !p.draft);
