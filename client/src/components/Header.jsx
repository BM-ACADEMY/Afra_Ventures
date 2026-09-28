import { useState } from 'react';
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

  // NavLink sets aria-current="page" on the active link, in the pre-rendered
  // HTML as well. The className function stops it adding an "active" class.
  return (
    <header className="masthead">
      <div className="wrap masthead-in">
        <Link className="brand" to="/">
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
        </NavLink>
      </div>
    </header>
  );
}
