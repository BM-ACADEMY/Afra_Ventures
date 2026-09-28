import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb } from '../lib/jsonld.js';

export default function Technology() {
  return (
    <>
      <Seo
        file="technology.html"
        title="How we build | Afra Ventures"
        description="The stack and engineering practice behind Afra Ventures products: React and Node, PostgreSQL, multi-tenant architecture, workflow automation, and AI used only where it measurably helps."
        jsonLd={[
          breadcrumb(["Technology", "technology.html"]),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">How we build</p>
          <h1>Ordinary technology, applied carefully.</h1>
          <p className="lede">
            There is nothing exotic in our stack. What matters is that a twelve-person team can
            run several products at once without any of them rotting.
          </p>
        </div>
        <div className="grid grid-2">
          <Panel head={["Stack", "Across products"]}>
            <dl className="readout">
              <div>
                <dt>Interface</dt>
                <dd>React</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>Node and Express</dd>
              </div>
              <div>
                <dt>Data</dt>
                <dd>PostgreSQL and MongoDB, chosen per product</dd>
              </div>
              <div>
                <dt>Automation</dt>
                <dd>Workflow engine for scheduled and event-driven jobs</dd>
              </div>
              <div>
                <dt>Messaging</dt>
                <dd>WhatsApp Business Cloud API</dd>
              </div>
              <div>
                <dt>Payments</dt>
                <dd>Razorpay, with webhook reconciliation</dd>
              </div>
              <div>
                <dt>Hosting</dt>
                <dd>Managed virtual servers, India region</dd>
              </div>
            </dl>
          </Panel>
          <div className="stack">
            <h3>Why so plain</h3>
            <div className="prose">
              <p>
                Our customers are gyms, colleges and small firms. They need software that is up on
                a Tuesday morning and that somebody can fix the same day when it is not. That
                rules out anything we cannot debug ourselves at eleven at night.
              </p>
              <p>
                So we keep to a small set of well-understood tools, run them properly, and spend
                our inventiveness on the part the customer actually sees — the order of the
                fields, the default on the form, the list that tells the desk who to call today.
              </p>
            </div>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Architecture</p>
          <h2>Four rules we do not bend.</h2>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>Multi-tenant from the first commit</h4>
            <p>
              One deployment serves every customer of a product, with data separated by tenant.
              Retrofitting this later is close to a rewrite, so we never start without it.
            </p>
          </Card>
          <Card>
            <h4>Permission checks live in the API</h4>
            <p>
              Hiding a button is presentation, not security. Every role and permission rule is
              enforced on the server, and we treat any gap between the two as a defect to be fixed
              rather than documented.
            </p>
          </Card>
          <Card>
            <h4>Money is reconciled, not assumed</h4>
            <p>
              Payment status comes from the gateway's webhook and is checked against our own
              records. A record that says paid means the money arrived.
            </p>
          </Card>
          <Card>
            <h4>Automation is observable</h4>
            <p>
              Scheduled jobs, reminders and message sends are all visible as runs with outcomes. A
              reminder that silently failed to send is worse than no reminder at all.
            </p>
          </Card>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Artificial intelligence</p>
          <h2>Where we use it, and where we refuse to.</h2>
          <p className="prose">
            We use language models for a small number of jobs that are genuinely tedious, and we
            keep a person between the model and any consequence.
          </p>
        </div>
        <div className="grid grid-2">
          <div className="stack">
            <h4 style={{ color: 'var(--ok)' }}>Where it earns its place</h4>
            <ul className="ticks">
              <li>
                <strong>Parsing messy input</strong>
                {" "}— a customer message typed half in Tamil and half in English becomes a clear
                request
              </li>
              <li>
                <strong>Drafting</strong>
                {" "}— a workout plan or a customer reply that a human can edit and send
              </li>
              <li>
                <strong>Matching</strong>
                {" "}— narrowing a candidate pool to a shortlist a recruiter can read in a sitting
              </li>
              <li>
                <strong>Summarising</strong>
                {" "}— turning a week of records into the three things somebody needs to act on
              </li>
            </ul>
          </div>
          <div className="stack">
            <h4 style={{ color: 'var(--accent)' }}>Where we leave it out</h4>
            <ul className="ticks">
              <li>
                <strong>Anything a customer receives unreviewed</strong>
                {" "}— a trainer or a recruiter signs off first
              </li>
              <li>
                <strong>Health and money advice</strong>
                {" "}— a diet plan is a draft for a professional, and tax stays with your
                accountant
              </li>
              <li>
                <strong>Hiring decisions</strong>
                {" "}— the software narrows a list; a person chooses
              </li>
              <li>
                <strong>A chat box for its own sake</strong>
                {" "}— if a well-placed list does the job, we build the list
              </li>
            </ul>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Data and security</p>
          <h2>How we treat your records.</h2>
        </div>
        <div className="grid grid-3">
          <div className="feat">
            <div className="rule" />
            <h4>Your data is yours</h4>
            <p>
              Exportable on request, in a format you can open, at any point — including during a
              free pilot.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Hosted in India</h4>
            <p>Customer records for our products sit on servers in the India region.</p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Access is scoped</h4>
            <p>
              Staff access is limited to what a role needs. Support access to a customer tenant is
              requested, not assumed.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Encrypted in transit</h4>
            <p>
              Everything runs over HTTPS. Payment details are handled by the gateway and never
              stored by us.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Backups that are restored</h4>
            <p>Automated backups, and restores that get tested rather than assumed to work.</p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Deletion means deletion</h4>
            <p>Ask us to remove your data when you leave and we remove it, then confirm in writing.</p>
          </div>
        </div>
        <p className="small muted">
          Full detail on collection, retention and deletion is in our{" "}
          <Link to="/privacy.html">privacy policy</Link>
          .
        </p>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Research direction</p>
          <h2>What we are reading about next.</h2>
          <p className="prose">
            One line of work has no product attached yet and we are not going to pretend
            otherwise:{" "}
            <strong>Tamil-language interfaces for citizen and institutional services</strong>
            . Most people in this region would use a public service tool in Tamil if one existed
            and behaved sensibly on a cheap phone. We are exploring what that takes. If it becomes
            a product it will appear on the products page with a stage label like everything else.
          </p>
        </div>
      </Band>
      <CtaBand
        title="Want something built this way?"
        text="We take on custom product engineering alongside our own products."
      >
        <Link className="btn btn-primary" to="/contact.html?topic=custom">Describe your project</Link>
        {" "}
        <Link className="btn btn-ghost" to="/careers.html">Or come and build with us</Link>
      </CtaBand>
    </>
  );
}
