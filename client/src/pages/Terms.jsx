import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';

export default function Terms() {
  return (
    <>
      <Seo
        file="terms.html"
        title="Terms of use | Afra Ventures"
        description="The terms that apply to visitors and users of the Afra Ventures website."
      />
      <Band>
        <div className="stack" style={{ maxWidth: '68ch' }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>Terms of use</h1>
          <p className="small muted">Last updated 17 September 2026</p>
        </div>
      </Band>
      <Band alt>
        <div className="article">
          <p>
            These terms apply to your use of{" "}
            <strong>afraventures.in</strong>
            , operated by {SITE.legalName}, CIN {SITE.cin}, registered at{' '}
            {SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}, India. By
            using the site you accept them.
          </p>
          <h2>What this site is</h2>
          <p>
            An information website about our company and our products. Nothing on it is an offer,
            a quotation or a contract. Any engagement between us is governed by a separate written
            agreement.
          </p>
          <h2>Accuracy</h2>
          <p>
            We try to keep this site correct and current, and we label each product with its real
            development stage. Descriptions of products in beta or in development describe intent,
            not a commitment to deliver a specific feature by a specific date. Figures produced by
            any calculator on this site are illustrative estimates based on the assumptions stated
            alongside them, and are not a forecast of your results.
          </p>
          <h2>Using the site</h2>
          <p>You agree not to:</p>
          <ul>
            <li>use the site for any unlawful purpose;</li>
            <li>attempt to gain unauthorised access to it or to any connected system;</li>
            <li>interfere with its operation or its availability to others;</li>
            <li>copy substantial parts of it for republication without our written permission.</li>
          </ul>
          <h2>Intellectual property</h2>
          <p>
            The content, design, code, product names and logos on this site belong to{' '}
            {SITE.legalName} unless stated otherwise. You may quote short extracts with
            attribution and a link. Everything else needs our written permission.
          </p>
          <h2>Links to other sites</h2>
          <p>
            Where we link to a site we do not run, we are not responsible for its content or its
            practices. That includes our own product sites, which carry their own terms.
          </p>
          <h2>Liability</h2>
          <p>
            This site is provided as it is. To the extent permitted by law, we are not liable for
            any loss arising from reliance on information published here. Nothing in these terms
            limits liability that cannot lawfully be limited.
          </p>
          <h2>Privacy</h2>
          <p>
            How we handle personal information is set out in our{" "}
            <Link to="/privacy">privacy policy</Link>
            .
          </p>
          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India. The courts at Puducherry have exclusive
            jurisdiction over any dispute arising from them.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms go to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            .
          </p>
        </div>
      </Band>
    </>
  );
}
