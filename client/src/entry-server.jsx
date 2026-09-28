// Server entry used only at build time: renders one page URL to HTML plus
// its <head> tags. scripts/prerender.js calls render() for every page.
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routes } from './routes';
import { HeadContext, renderHead } from './components/Seo.jsx';

export { BUILD_PAGES, DRAFT_FILES, PAGES } from './config/pages.js';
export { SITE } from './config/site.js';

const handler = createStaticHandler(routes);

export async function render(path) {
  const context = await handler.query(new Request(new URL(path, 'https://afraventures.in')));
  if (context instanceof Response) throw new Error(`Route ${path} returned a redirect`);

  const router = createStaticRouter(handler.dataRoutes, context);
  let head = null;
  const collect = h => {
    head = h;
  };
  // hydrate={false}: no loaders, so no hydration data script inside #root.
  const html = renderToString(
    <HeadContext value={collect}>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </HeadContext>,
  );
  if (!head) throw new Error(`Page ${path} has no <Seo> component`);
  return { html, head: renderHead(head) };
}
