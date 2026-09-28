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
              {/* Same logo as the header; see .brand-logo in site.css. */}
              <span className="brand-logo" role="img" aria-label="Afra Ventures" />
            </Link>
            <p className="small muted" style={{ maxWidth: '34ch' }}>
              A women-led software product company in Puducherry, building tools for the
              businesses and institutions around us.
            </p>
          </div>
          <div>
            <h5>Products</h5>
            <ul>
              <li><Link to="/gymdesk">GymDesk</Link></li>
              <li><Link to="/nera">Nera</Link></li>
              <li><Link to="/velai-vaaippu">Velai Vaaippu</Link></li>
              <li><Link to="/products">All products</Link></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/technology">How we build</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h5>Reach us</h5>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
              <li><Link to="/contact">Contact form</Link></li>
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
            <Link to="/privacy">Privacy</Link> &nbsp;·&nbsp;{' '}
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
