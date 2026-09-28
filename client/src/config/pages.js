// Page registry: one list drives routing, pre-rendering, the sitemap and the
// draft guard. Plain data (no JSX) so build scripts can read it too.

export const INCLUDE_DRAFTS = import.meta.env.VITE_INCLUDE_DRAFTS === 'true';

export const PAGES = [
  { path: '/', file: 'index.html', priority: 1.0 },
  { path: '/products.html', file: 'products.html', priority: 0.9 },
  { path: '/gymdesk.html', file: 'gymdesk.html', priority: 0.9 },
  { path: '/nera.html', file: 'nera.html', priority: 0.8 },
  { path: '/velai-vaaippu.html', file: 'velai-vaaippu.html', priority: 0.8 },
  { path: '/technology.html', file: 'technology.html', priority: 0.7 },
  { path: '/partners.html', file: 'partners.html', priority: 0.7 },
  { path: '/about.html', file: 'about.html', priority: 0.8 },
  { path: '/careers.html', file: 'careers.html', priority: 0.6 },
  { path: '/insights.html', file: 'insights.html', priority: 0.6 },
  { path: '/gym-membership-renewals.html', file: 'gym-membership-renewals.html', priority: 0.5 },
  { path: '/college-placement-software.html', file: 'college-placement-software.html', priority: 0.5 },
  { path: '/multi-brand-bookkeeping.html', file: 'multi-brand-bookkeeping.html', priority: 0.5 },
  { path: '/contact.html', file: 'contact.html', priority: 0.8 },
  { path: '/privacy.html', file: 'privacy.html', priority: 0.3 },
  { path: '/terms.html', file: 'terms.html', priority: 0.3 },
  { path: '/404.html', file: '404.html', noindex: true },
  { path: '/pilot.html', file: 'pilot.html', draft: true, noindex: true },
  { path: '/traction.html', file: 'traction.html', draft: true, noindex: true },
  { path: '/brands.html', file: 'brands.html', draft: true, noindex: true },
];

export const DRAFT_FILES = PAGES.filter(p => p.draft).map(p => p.file);

// Pages that are part of this build.
export const BUILD_PAGES = PAGES.filter(p => INCLUDE_DRAFTS || !p.draft);
