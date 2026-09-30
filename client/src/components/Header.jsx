import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

const NAV = [
  ['/products', 'Products'],
  ['/technology', 'How we build'],
  ['/partners', 'Partners'],
  ['/about', 'About'],
  ['/insights', 'Insights'],
  ['/careers', 'Careers'],
];

export default function Header() {
  const { pathname } = useLocation();
  // The menu remembers which page it was opened on, so navigating to any
  // other page closes it without an extra effect/render.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  // Home: the header is transparent over the hero ribbon while the page is at
  // the top, and turns solid once the visitor scrolls.
  const overHero = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!overHero) return undefined;
    const check = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(check); // page may load already scrolled
    window.addEventListener('scroll', check, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', check);
    };
  }, [overHero]);
  const headerClass = overHero && !scrolled && !open ? 'masthead masthead--clear' : 'masthead';

  // Logo on the Home page: the address would not change, so scroll back to the
  // top instead (instantly for visitors who prefer reduced motion).
  function onLogoClick(ev) {
    if (pathname !== '/') return;
    ev.preventDefault();
    setOpenOn(null);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  // NavLink sets aria-current="page" on the active link, in the pre-rendered
  // HTML as well. The className function stops it adding an "active" class.
  return (
    <header className={headerClass}>
      <div className="wrap masthead-in">
        <Link className="brand" to="/" onClick={onLogoClick}>
          {/* Logo drawn in the text colour via a CSS mask (see .brand-logo in site.css),
              so the white artwork reads on both the light and the dark theme. */}
          <span className="brand-logo" role="img" aria-label="Afra Ventures" />
          <span className="sub">Puducherry</span>
        </Link>
        <button
          className="navtoggle"
          id="navtoggle"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={open ? 'nav open' : 'nav'} id="nav" aria-label="Main">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end className={() => undefined}>
              {label}
            </NavLink>
          ))}
        </nav>
        {/* Outside the nav: stays visible on phones, next to MENU. */}
        <NavLink to="/contact" end className={() => 'btn btn-primary masthead-cta'}>
          Contact
          <svg className="cta-arrow" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true">
            <path d="M3 1.5 6.5 5 3 8.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavLink>
      </div>
    </header>
  );
}
