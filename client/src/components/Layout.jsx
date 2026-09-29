import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// After a client-side navigation, go to the top of the new page, or to the
// #anchor if the link has one (e.g. /gymdesk#what-it-does). The first
// load is left to the browser.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const last = useRef(pathname + hash);
  useEffect(() => {
    // Same URL as before (first load, or StrictMode re-running the effect): do nothing.
    if (last.current === pathname + hash) return;
    last.current = pathname + hash;
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  // The Home page uses the Stripe-style light theme (.theme-stripe in site.css).
  // The wrapper is always rendered, so moving between pages never remounts the layout.
  const { pathname } = useLocation();
  return (
    <div className={pathname === '/' ? 'theme-stripe' : undefined}>
      <ScrollManager />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
