import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from './routes';
// Self-hosted fonts (replaces the Google Fonts @import in site.css).
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/noto-sans-tamil/500.css';
import '@fontsource/noto-sans-tamil/600.css';
// Inter: Home page's Stripe-style theme (.theme-stripe). Only downloaded where used.
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './styles/site.css';

// Old ".html" addresses (bookmarks, shared links, hosts without clean-URL
// rewrites) show the right pre-rendered page; switch the address bar to the
// clean URL before the router starts, so it matches that page:
//   /about.html → /about, /gymdesk.html#what-it-does → /gymdesk#what-it-does, /index.html → /
const { pathname, search, hash } = window.location;
if (pathname.endsWith('.html')) {
  const clean = pathname === '/index.html' ? '/' : pathname.slice(0, -'.html'.length);
  window.history.replaceState(null, '', clean + search + hash);
}

const router = createBrowserRouter(routes);
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Built pages arrive pre-rendered, so React hydrates the existing markup.
// In dev the root is empty and React renders from scratch.
const container = document.getElementById('root');
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
