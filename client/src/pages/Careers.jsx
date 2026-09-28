import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';
import { breadcrumb } from '../lib/jsonld.js';

export default function Careers() {
  return (
    <>
      <Seo
        file="careers.html"
        title="Careers | Afra Ventures, Puducherry"
        description="Build software products from Puducherry. Open roles and how hiring works at Afra Ventures, plus how to apply when nothing listed fits you."
        jsonLd={[
          breadcrumb(["Careers", "careers.html"]),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Careers</p>
          <h1>Build products from Puducherry, for people you can go and meet.</h1>
          <p className="lede">
            Twelve of us, one office, three products in the open. The gap between writing a
            feature and watching somebody use it is about a week.
          </p>
        </div>
        <div className="grid grid-3">
          <div className="feat">
            <div className="rule" />
            <h4>You will own something</h4>
            <p>
              A team this size has no room for a person who only does their slice. Whatever you
              build, you keep running.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>You will meet the customer</h4>
            <p>
              Engineers come along on gym visits and campus walkthroughs. It changes what you
              build next.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>You will work in person</h4>
            <p>
              This is an office job in Kosapalayam, Puducherry. We are not set up to hire remotely
              yet.
            </p>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Open roles</p>
          <h2>What we are looking for now.</h2>
          <p className="prose">
            We hire when there is a gap, not on a calendar. If nothing here matches you and you
            think we are missing something, write anyway — the last line of this page explains
            how.
          </p>
        </div>
        <div className="ledger">
          <div className="ledger-row">
            <span className="idx">01</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Full-stack developer</h3>
              <Chip stage="live">Open</Chip>
            </div>
            <p className="small muted">
              React and Node, with real database sense. You will take a module of GymDesk or Nera
              end to end — schema, API, interface and the support questions that follow.
              Experience with messaging APIs or workflow automation is a bonus, not a requirement.
              Two years or more of shipping something people used.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact?topic=careers">Apply</Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">02</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Product support and onboarding</h3>
              <Chip stage="live">Open</Chip>
            </div>
            <p className="small muted">
              The person who sits with a gym owner and turns their register into a working system,
              then answers the phone when something confuses them. Fluent Tamil and English,
              patient, organised. Software experience helps but is not required.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact?topic=careers">Apply</Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">03</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Business development — colleges and employers</h3>
              <Chip stage="live">Open</Chip>
            </div>
            <p className="small muted">
              Opening conversations with placement cells and employers across Tamil Nadu and
              Puducherry, and carrying them through to a signed agreement. Comfortable on a campus
              and in a factory office. Two-wheeler and willingness to travel the district.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact?topic=careers">Apply</Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">04</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Internships</h3>
              <Chip stage="beta">Rolling</Chip>
            </div>
            <p className="small muted">
              Three to six months, paid, for final-year students in computer science or a related
              field. You get a real module and a mentor, not a documentation task. We hire from
              this pool when a role opens.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact?topic=careers">Apply</Link>
            </span>
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">How hiring works here</p>
          <h2>Four steps, about two weeks.</h2>
        </div>
        <div className="grid grid-4">
          <Card>
            <span className="idx">Step 1</span>
            <h4>You write to us</h4>
            <p>
              A short note about what you have built or run, and what you want to do next. A CV is
              fine but the note matters more.
            </p>
          </Card>
          <Card>
            <span className="idx">Step 2</span>
            <h4>A conversation</h4>
            <p>
              Half an hour, on the phone or at the office. We describe the work honestly,
              including the parts that are tedious.
            </p>
          </Card>
          <Card>
            <span className="idx">Step 3</span>
            <h4>A real problem</h4>
            <p>
              For technical roles, a small piece of work close to what you would actually do. Paid
              if it takes more than an evening.
            </p>
          </Card>
          <Card>
            <span className="idx">Step 4</span>
            <h4>An answer</h4>
            <p>
              Yes or no, with a reason, within a week of the last step. We do not leave people
              waiting.
            </p>
          </Card>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack narrow">
          <p className="eyebrow">Nothing fits?</p>
          <h2>Write anyway.</h2>
          <div className="prose">
            <p>
              Tell us what you are good at and what you would want to own here. If we have
              somewhere to put you we will say so, and if we do not we will tell you that too
              rather than filing your note somewhere polite. Send it to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              {" "}with the role you have in mind in the subject line.
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-primary" to="/contact?topic=careers">Send an application</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
