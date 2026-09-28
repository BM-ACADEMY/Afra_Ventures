import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Faq from '../components/Faq.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';
import { faqPage, website } from '../lib/jsonld.js';

const FAQ = [
  {
    q: 'What does Afra Ventures do?',
    a: 'We build software products. Three of them are ours — GymDesk for gym operations, Nera for WhatsApp automation, and Velai Vaaippu for jobs and campus placement. We also take on custom product engineering for businesses and institutions that need software built properly and kept running.',
  },
  {
    q: 'Where is Afra Ventures based?',
    a: `Our registered office and our development team are both at ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postalCode}. We work with customers across India, and remotely where that suits the project.`,
  },
  {
    q: 'Is Afra Ventures a new company?',
    a: `The company was incorporated on 12 September 2026 under CIN ${SITE.cin}. The products it runs were built by the same team over the preceding years and now sit under the company.`,
  },
  {
    q: 'Is Afra Ventures a women-led company?',
    a: 'Yes. Both directorships and the majority shareholding are held by women, and that is the structure the company was set up with rather than one added later.',
  },
  {
    q: 'Can you build something for us?',
    a: 'Often, yes — if the problem is operational and a product could serve more than one customer, it is the kind of work we do well. Tell us what breaks today and what it costs you when it does. If we are the wrong people for it we will say so in the first conversation.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        file="index.html"
        title="Afra Ventures — Software products built in Puducherry"
        description="Afra Ventures is a women-led software product company in Puducherry building GymDesk, Nera and Velai Vaaippu — SaaS platforms for gyms, colleges, recruiters and businesses that run on WhatsApp."
        jsonLd={[
          website(),
          faqPage(FAQ),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="stack">
            <p className="eyebrow">Product company · Puducherry, India</p>
            <h1>Software for the businesses that still run on a notebook and a WhatsApp group.</h1>
            <p className="lede">
              Afra Ventures builds operating software for gyms, colleges, recruiters and small
              multi-brand firms — places where the work is real, the margins are thin, and the tools
              never quite arrived.
            </p>
            <div className="btn-row" style={{ marginTop: '.5rem' }}>
              <Link className="btn btn-primary" to="/products">See what we have built</Link>
              {" "}
              <Link className="btn btn-ghost" to="/contact">Talk to us</Link>
            </div>
          </div>
          <Panel head={["Registry record", "MCA / India"]}>
            <dl className="readout">
              <div>
                <dt>Legal name</dt>
                <dd>Afra Ventures Private Limited</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{SITE.cin}</dd>
              </div>
              <div>
                <dt>Incorporated</dt>
                <dd>12 September 2026</dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>{SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}</dd>
              </div>
              <div>
                <dt>Directors</dt>
                <dd>Affrin Sara Abdul Azees · Mariam Beevi</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>12 people, one office</dd>
              </div>
              <div>
                <dt>Stage</dt>
                <dd>Building and validating</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </section>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What we build</p>
          <h2>Three kinds of work, one engineering team.</h2>
        </div>
        <div className="grid grid-3">
          <div className="feat">
            <div className="rule" />
            <h4>Products we own</h4>
            <p>
              Multi-tenant platforms we design, build, license and keep running — gym operations,
              customer messaging, jobs and placement. One codebase, many customers, our own
              roadmap.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>AI that pays for itself</h4>
            <p>
              Answering a customer's WhatsApp message at midnight. Matching a candidate to an
              opening. Drafting a workout plan a trainer can edit. We add AI where it removes a
              real hour of work, and leave it out where it only adds a chat box.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Product engineering for others</h4>
            <p>
              Custom software for businesses and institutions that need something built properly
              and then maintained — not a template, and not abandoned after handover.
            </p>
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Products</p>
          <h2>Everything we run, with its real stage.</h2>
          <p className="prose">
            We label each product with where it actually is. Nothing here is described as finished
            before it is.
          </p>
        </div>
        <div className="ledger">
          <Link className="ledger-row" to="/gymdesk">
            <span className="idx">01</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>GymDesk</h3>
              <Chip stage="beta">Beta · in testing</Chip>
            </div>
            <p className="small muted">
              Gym management software: members, attendance, plans and packages and payments, with
              renewal reminders and enquiry follow-up that send automatically, plus AI-assisted
              workout and diet plans. Multi-tenant, so one deployment serves many gyms and
              branches.
            </p>
            <span className="tail"><span className="arrow" aria-hidden="true">→</span></span>
          </Link>
          {" "}
          <Link className="ledger-row" to="/nera">
            <span className="idx">02</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Nera</h3>
              <Chip stage="dev">In development</Chip>
            </div>
            <p className="small muted">
              WhatsApp automation for businesses losing enquiries to a slow reply. Answers every
              incoming message in seconds, follows up with anyone who goes quiet, and runs
              campaigns on Meta-approved templates.
            </p>
            <span className="tail"><span className="arrow" aria-hidden="true">→</span></span>
          </Link>
          {" "}
          <Link className="ledger-row" to="/velai-vaaippu">
            <span className="idx">03</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>
                Velai&nbsp;Vaaippu{" "}
                <span className="tamil muted" style={{ fontSize: '.8em' }}>வேலை வாய்ப்பு</span>
              </h3>
              <Chip stage="live">Live</Chip>
            </div>
            <p className="small muted">
              A jobs platform with three sides — seekers, employers and colleges. Free skill
              assessment, resume builder and job matching for seekers and students; placement
              cells track every student and run drives from the same panel. Open now across Tamil
              Nadu and Puducherry.
            </p>
            <span className="tail"><span className="arrow" aria-hidden="true">→</span></span>
          </Link>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Where we are</p>
          <h2>A new company, not a new team.</h2>
          <p className="prose">
            Afra Ventures was incorporated in September 2026. The people in it have been shipping
            software for businesses in this region for years — which is why there is a working
            platform and a product in beta on day one, and why we are not going to pretend the
            next stage has already happened.
          </p>
        </div>
        <div className="track">
          <div className="track-step" data-state="done">
            <div className="track-bar" />
            <p className="track-name">Build</p>
            <p className="track-note">Velai Vaaippu live · GymDesk built</p>
          </div>
          <div className="track-step" data-state="now">
            <div className="track-bar" />
            <p className="track-name">Pilot</p>
            <p className="track-note">We are here</p>
          </div>
          <div className="track-step">
            <div className="track-bar" />
            <p className="track-name">Paying customers</p>
            <p className="track-note">Next</p>
          </div>
          <div className="track-step">
            <div className="track-bar" />
            <p className="track-name">Scale</p>
            <p className="track-note">Beyond Puducherry</p>
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">How we work</p>
          <h2>Four things we decided early.</h2>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>We build where the customer is</h4>
            <p>
              Our team sits in Puducherry, and the first users of everything we make are within
              driving distance. A gym owner can tell us the software is wrong to our face. That
              shortens the distance between a complaint and a fix to about a day.
            </p>
          </Card>
          <Card>
            <h4>One codebase per product</h4>
            <p>
              Every product is multi-tenant from the first commit. We do not fork a copy per
              customer, because a hundred forks is a hundred things to patch when something
              breaks.
            </p>
          </Card>
          <Card>
            <h4>Automation before headcount</h4>
            <p>
              Reminders, follow-ups, document generation and reconciliation run on workflow
              automation rather than on somebody remembering. It is how a team of twelve keeps
              several products moving at once.
            </p>
          </Card>
          <Card>
            <h4>We publish the stage</h4>
            <p>
              Live, beta, in development. Every product on this site carries its real label, and
              the label changes when the product does — not when it would be convenient.
            </p>
          </Card>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Who we build for</p>
          <h2>Four kinds of operation.</h2>
        </div>
        <div className="grid grid-4">
          <div className="feat">
            <div className="rule" />
            <h4>Gyms and studios</h4>
            <p>
              Single sites and small chains that lose money to lapsed renewals and unworked
              enquiries.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Colleges</h4>
            <p>Placement cells that are measured on numbers their spreadsheets cannot produce.</p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Employers and recruiters</h4>
            <p>
              Companies hiring in volume in Tamil Nadu and Puducherry, where the shortlist is the
              bottleneck.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Multi-brand businesses</h4>
            <p>
              One owner, several lines of business, and no honest view of which one is actually
              earning.
            </p>
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Common questions</p>
          <h2>Before you write to us.</h2>
        </div>
        <Faq className="faq narrow" items={FAQ} />
      </Band>
      <CtaBand
        title="Have a problem worth solving?"
        text=" Tell us what it costs you today. We will tell you honestly whether software fixes it. "
      >
        <Link className="btn btn-primary" to="/contact">Start a conversation</Link>
        {" "}
        <Link className="btn btn-ghost" to="/partners">Partner with us</Link>
      </CtaBand>
    </>
  );
}
