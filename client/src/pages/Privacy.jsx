import Band from '../components/Band.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';

export default function Privacy() {
  return (
    <>
      <Seo
        file="privacy.html"
        title="Privacy policy | Afra Ventures"
        description="How Afra Ventures collects, uses, stores and deletes personal information."
      />
      <Band>
        <div className="stack" style={{ maxWidth: '68ch' }}>
          <p className="eyebrow">Legal</p>
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>Privacy policy</h1>
          <p className="small muted">Last updated 17 September 2026</p>
        </div>
      </Band>
      <Band alt>
        <div className="article">
          <p>
            This policy explains what {SITE.legalName} ("Afra Ventures", "we", "us")
            does with personal information collected through{" "}
            <strong>afraventures.in</strong>
            . Our individual products have their own policies, which apply to data held inside
            those products.
          </p>
          <h2>Who we are</h2>
          <p>
            {SITE.legalName}, CIN {SITE.cin}, registered at {SITE.address.street},{' '}
            {SITE.address.locality} {SITE.address.postalCode}, India. For anything in this policy,
            write to
            {" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            .
          </p>
          <h2>What we collect on this website</h2>
          <ul>
            <li>
              <strong>What you send us.</strong>
              {" "}When you use the enquiry form or write to us directly, we receive your name,
              email address, and anything else you choose to include — organisation, phone number
              and your message.
            </li>
            <li>
              <strong>Basic technical information.</strong>
              {" "}Our hosting provider records standard server logs, including IP address,
              browser type and the pages requested. These are used to keep the site running and
              secure.
            </li>
          </ul>
          <p>
            This website does not use advertising cookies and does not track you across other
            websites.
          </p>
          <h2>Why we use it</h2>
          <ul>
            <li>To reply to your enquiry and to continue that conversation.</li>
            <li>To provide a service you have asked us for, or to prepare a proposal.</li>
            <li>To keep the website available, secure and working correctly.</li>
            <li>To meet legal, tax and accounting obligations that apply to us.</li>
          </ul>
          <p>
            We do not sell personal information, and we do not share it with anyone for their own
            marketing.
          </p>
          <h2>Who else sees it</h2>
          <p>
            Only the people at Afra Ventures who need it to answer you, and the service providers
            that operate our systems — our hosting provider, our email provider and, where
            relevant, our payment gateway. Those providers act on our instructions. We may also
            disclose information where the law requires it.
          </p>
          <h2>How long we keep it</h2>
          <p>
            Enquiries are kept for up to three years so that we have context if you come back to
            us, unless you ask us to delete them sooner. Records connected to a contract or a
            payment are kept for as long as Indian tax and company law requires.
          </p>
          <h2>Your choices</h2>
          <p>You may ask us to:</p>
          <ul>
            <li>tell you what we hold about you;</li>
            <li>correct anything that is wrong;</li>
            <li>delete what we hold, where we are not required to keep it;</li>
            <li>stop contacting you.</li>
          </ul>
          <p>
            Write to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            {" "}and we will act within thirty days.
          </p>
          <h2>Product data</h2>
          <p>
            Where you use one of our products, the data you put into it belongs to you. We do not
            sell it, we do not use it to train models for anyone else, and we export it to you on
            request in a readable format. Support staff access a customer's data only when needed
            to resolve an issue.
          </p>
          <h2>Security</h2>
          <p>
            Traffic to this site and to our products runs over HTTPS. Access to production systems
            is limited to staff who need it. Card details are handled by our payment gateway and
            are never stored on our servers. No system is perfectly secure, and we will tell
            affected users promptly if something goes wrong.
          </p>
          <h2>Children</h2>
          <p>
            This website is not directed at children, and we do not knowingly collect information
            from anyone under 18 through it.
          </p>
          <h2>Changes</h2>
          <p>
            If this policy changes we will update the date at the top of this page. Material
            changes affecting existing customers will be notified directly.
          </p>
        </div>
      </Band>
    </>
  );
}
