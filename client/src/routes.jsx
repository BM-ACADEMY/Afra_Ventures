// Route registry: page list (src/config/pages.js) + the component for each page.
// The same list drives client routing, pre-rendering, the sitemap and the draft guard.
import Layout from './components/Layout.jsx';
import { BUILD_PAGES } from './config/pages.js';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import GymDesk from './pages/GymDesk.jsx';
import Nera from './pages/Nera.jsx';
import VelaiVaaippu from './pages/VelaiVaaippu.jsx';
import Technology from './pages/Technology.jsx';
import Partners from './pages/Partners.jsx';
import About from './pages/About.jsx';
import Careers from './pages/Careers.jsx';
import Insights from './pages/Insights.jsx';
import GymMembershipRenewals from './pages/articles/GymMembershipRenewals.jsx';
import CollegePlacementSoftware from './pages/articles/CollegePlacementSoftware.jsx';
import MultiBrandBookkeeping from './pages/articles/MultiBrandBookkeeping.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

export { PAGES } from './config/pages.js';

// Draft pages are only imported into a preview build. In a production build
// this branch is dead code, so no draft text reaches the JavaScript bundle.
const drafts =
  import.meta.env.VITE_INCLUDE_DRAFTS === 'true'
    ? import.meta.glob('./pages/drafts/*.jsx', { eager: true, import: 'default' })
    : {};

const COMPONENTS = {
  'index.html': Home,
  'products.html': Products,
  'gymdesk.html': GymDesk,
  'nera.html': Nera,
  'velai-vaaippu.html': VelaiVaaippu,
  'technology.html': Technology,
  'partners.html': Partners,
  'about.html': About,
  'careers.html': Careers,
  'insights.html': Insights,
  'gym-membership-renewals.html': GymMembershipRenewals,
  'college-placement-software.html': CollegePlacementSoftware,
  'multi-brand-bookkeeping.html': MultiBrandBookkeeping,
  'contact.html': Contact,
  'privacy.html': Privacy,
  'terms.html': Terms,
  '404.html': NotFound,
  'pilot.html': drafts['./pages/drafts/Pilot.jsx'],
  'traction.html': drafts['./pages/drafts/Traction.jsx'],
  'brands.html': drafts['./pages/drafts/Brands.jsx'],
};

// Pages with their own full-screen design (bare in the registry): outside the
// site layout, and loaded on demand so other pages never download them.
const BARE = {
  'launch.html': () => import('./pages/launch/Launch.jsx'),
};
const bareRoutes = BUILD_PAGES.filter(p => p.bare).map(({ path, file }) => {
  if (!BARE[file]) throw new Error(`No component registered for ${file}`);
  return { path, lazy: async () => ({ Component: (await BARE[file]()).default }) };
});

const pageRoutes = BUILD_PAGES.filter(p => !p.bare).map(({ path, file }) => {
  const Page = COMPONENTS[file];
  if (!Page) throw new Error(`No component registered for ${file}`);
  return { path, element: <Page /> };
});

export const routes = [
  ...bareRoutes,
  {
    element: <Layout />,
    children: [
      ...pageRoutes,
      // 404.html is served at any missing URL; render the same page there.
      { path: '*', element: <NotFound /> },
    ],
  },
];
