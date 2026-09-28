import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import Notice from '../components/Notice.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';
import { breadcrumb, contactPage } from '../lib/jsonld.js';

export default function Contact() {
  return (
    <>
      <Seo
        file="contact.html"
        title="Contact Afra Ventures | Puducherry"
        description="Talk to Afra Ventures about a product pilot, a college or employer partnership, or custom software. Registered office in Kosapalayam, Puducherry."
        jsonLd={[
          breadcrumb(["Contact", "contact.html"]),
          contactPage("contact.html"),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what is not working.</h1>
          <p className="lede">
            We reply to everything within one working day. If we are the wrong people for your
            problem, that reply will say so.
          </p>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <EnquiryForm send="email" />
          <div className="stack-lg">
            <Panel head={["Direct", "Mon–Sat"]}>
              <dl className="readout">
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href={`https://wa.me/${SITE.whatsapp}`} rel="noopener">{SITE.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>9:30 to 18:30 IST, Monday to Saturday</dd>
                </div>
              </dl>
            </Panel>
            <Panel head={["Registered office", "Puducherry"]}>
              <dl className="readout">
                <div>
                  <dt>Company</dt>
                  <dd>Afra Ventures Private Limited</dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>{SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}, India</dd>
                </div>
                <div>
                  <dt>CIN</dt>
                  <dd>{SITE.cin}</dd>
                </div>
              </dl>
            </Panel>
            <Notice title="Visiting?">
              <p>
                Call or message before you come. The team is often out at a gym, a campus or a
                client office, and we would rather you found somebody in than a locked door.
              </p>
            </Notice>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What happens next</p>
          <h2>Three steps, no sales sequence.</h2>
        </div>
        <div className="grid grid-3">
          <Card>
            <span className="idx">Step 1</span>
            <h4>A real reply</h4>
            <p>Written by a person here, within one working day, answering what you actually asked.</p>
          </Card>
          <Card>
            <span className="idx">Step 2</span>
            <h4>A conversation</h4>
            <p>Twenty minutes on the phone, or a visit if you are near Puducherry. We come to you.</p>
          </Card>
          <Card>
            <span className="idx">Step 3</span>
            <h4>Something in writing</h4>
            <p>
              A scope, a price and a timeline, or a straight answer that this is not work we
              should take.
            </p>
          </Card>
        </div>
        <p className="small muted">
          You will not be added to a mailing list, and nobody will call you six times. One
          enquiry, one thread.
        </p>
      </Band>
    </>
  );
}
