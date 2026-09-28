import { Link } from 'react-router';
import { SITE } from '../config/site.js';

// Fixed at build time, so the server HTML and the browser always agree.
// Replaces the old data-year script; a rebuild picks up a new year.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" to="/" style={{ marginBottom: '.75rem' }}>
              <span className="mark" aria-hidden="true" />
              Afra Ventures
            </Link>
            <p className="small muted" style={{ maxWidth: '34ch' }}>
              A women-led software product company in Puducherry, building tools for the
              businesses and institutions around us.
            </p>
          </div>
          <div>
            <h5>Products</h5>
            <ul>
              <li><Link to="/gymdesk.html">GymDesk</Link></li>
              <li><Link to="/nera.html">Nera</Link></li>
              <li><Link to="/velai-vaaippu.html">Velai Vaaippu</Link></li>
              <li><Link to="/products.html">All products</Link></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about.html">About</Link></li>
              <li><Link to="/technology.html">How we build</Link></li>
              <li><Link to="/partners.html">Partners</Link></li>
              <li><Link to="/careers.html">Careers</Link></li>
              <li><Link to="/insights.html">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h5>Reach us</h5>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
              <li><Link to="/contact.html">Contact form</Link></li>
            </ul>
            <p className="small muted" style={{ marginTop: '.85rem' }}>
              {SITE.address.street}
              <br />
              {SITE.address.locality} {SITE.address.postalCode}
              <br />
              India
            </p>
          </div>
        </div>
        <div className="foot-legal">
          <span>© {YEAR} {SITE.legalName}</span>
          <span>CIN {SITE.cin}</span>
          <span>
            <Link to="/privacy.html">Privacy</Link> &nbsp;·&nbsp;{' '}
            <Link to="/terms.html">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
