import { Link } from 'react-router';

export default function NotFound() {
  return (
    <>
      <Seo
        file="404.html"
        title="Page not found | Afra Ventures"
        description="That page does not exist on afraventures.in."
        noindex
      />
      <Band>
        <div className="stack" style={{ maxWidth: '56ch' }}>
          <p className="eyebrow">Error 404</p>
          <h1>That page is not here.</h1>
          <p className="lede">
            Either the address is wrong, or we moved something and forgot to leave a forwarding
            note. Both are fixable.
          </p>
          <div className="btn-row" style={{ marginTop: '.5rem' }}>
            <Link className="btn btn-primary" to="/">Back to the home page</Link>
            {" "}
            <Link className="btn btn-ghost" to="/products">See the products</Link>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Where you might have been going</p>
          <h2>The pages people look for.</h2>
        </div>
        <div className="grid grid-3">
          <Link className="card" to="/gymdesk" style={{ textDecoration: 'none' }}>
            <h4>GymDesk</h4>
            <p>Gym management software, currently in beta.</p>
          </Link>
          {" "}
          <Link className="card" to="/velai-vaaippu" style={{ textDecoration: 'none' }}>
            <h4>Velai Vaaippu</h4>
            <p>Jobs and campus placement platform, live now.</p>
          </Link>
          {" "}
          <Link className="card" to="/contact" style={{ textDecoration: 'none' }}>
            <h4>Contact</h4>
            <p>Reach a person here within one working day.</p>
          </Link>
        </div>
      </Band>
    </>
  );
}
import Band from '../components/Band.jsx';
import Seo from '../components/Seo.jsx';
