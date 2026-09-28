import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card } from '../components/Card.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Notice from '../components/Notice.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb } from '../lib/jsonld.js';

export default function Partners() {
  return (
    <>
      <Seo
        file="partners.html"
        title="For colleges, employers and institutions | Afra Ventures"
        description="Work with Afra Ventures: placement platform and training for colleges, hiring support for employers, and custom product engineering for institutions in Puducherry and Tamil Nadu."
        jsonLd={[
          breadcrumb(["Partners", "partners.html"]),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Partners</p>
          <h1>Four ways to work with us.</h1>
          <p className="lede">
            Colleges, employers, institutions and businesses that need software built. Each has a
            different first conversation.
          </p>
        </div>
        <div className="ledger">
          <div className="ledger-row">
            <span className="idx">01</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Colleges and placement cells</h3>
            </div>
            <p className="small muted">
              Velai Vaaippu for placement tracking and drive management, plus employability
              training and campus drives run alongside it. Most colleges start with a walkthrough
              on campus and a memorandum of understanding covering the platform and the training
              programme together.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact.html?topic=colleges">Arrange a visit</Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">02</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Employers hiring at volume</h3>
            </div>
            <p className="small muted">
              Post openings, search candidates, and run campus drives at colleges on the platform.
              Where you would rather hand the whole requirement over, our recruitment arm sources,
              screens and delivers a shortlist against an agreed fee and a replacement guarantee.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact.html?topic=hiring">Tell us the role</Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">03</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Institutions and public bodies</h3>
            </div>
            <p className="small muted">
              Afra Ventures is a private limited company registered in Puducherry, which makes it
              eligible to hold contracts and participate in procurement in its own name. We are
              interested in citizen-facing and institutional work, particularly where a Tamil
              interface matters. We will tell you plainly what we have delivered before and what
              would be a first.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact.html?topic=institutional">
                Start a conversation
              </Link>
            </span>
          </div>
          <div className="ledger-row">
            <span className="idx">04</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Businesses that need software built</h3>
            </div>
            <p className="small muted">
              Custom product engineering: a platform of your own, designed, built and then
              maintained by the same team. We are a better fit for operational software than for a
              brochure site, and we will say so if what you need is the latter.
            </p>
            <span className="tail">
              <Link className="btn btn-ghost" to="/contact.html?topic=custom">Describe the project</Link>
            </span>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">For colleges</p>
          <h2>What a partnership usually covers.</h2>
          <p className="prose">
            Colleges rarely want only software. The arrangement that works is one agreement
            covering the platform, the preparation and the drives, so one team is accountable for
            the placement number at the end of the year.
          </p>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>Platform access</h4>
            <ul className="ticks">
              <li>Free skill assessment for the whole batch, with readiness by department</li>
              <li>Placement cell panel with every eligible student on it</li>
              <li>Company invitations and drive management</li>
              <li>Roles for the placement officer, coordinators and drive in-charges</li>
              <li>Placement reporting produced from the records themselves</li>
            </ul>
          </Card>
          <Card>
            <h4>Preparation and drives</h4>
            <ul className="ticks">
              <li>Employability and soft skills programme for final-year students</li>
              <li>Career guidance sessions, run on campus</li>
              <li>Campus drives with employers from our network</li>
              <li>Internship routes for students who need experience first</li>
            </ul>
          </Card>
        </div>
        <Notice title="What we will not promise.">
          <p>
            No company can guarantee placements, and any vendor who offers you a placement
            percentage in writing is selling you something they cannot deliver. What we commit to
            is the platform, the training hours, the number of drives, and honest reporting of
            what came of them.
          </p>
        </Notice>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">For employers</p>
          <h2>Two routes, depending on how much you want to do yourself.</h2>
        </div>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Platform</th>
                <th scope="col">Managed hiring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>You get</strong></td>
                <td>Job posting, candidate search, team accounts, campus drives</td>
                <td>Sourcing, screening and a delivered shortlist</td>
              </tr>
              <tr>
                <td><strong>You do</strong></td>
                <td>Your own screening and interviewing</td>
                <td>Interview the shortlist and decide</td>
              </tr>
              <tr>
                <td><strong>Cost</strong></td>
                <td>Free tier, then a monthly plan by volume</td>
                <td>
                  A share of one month's salary for entry roles; a share of annual package for
                  senior ones
                </td>
              </tr>
              <tr>
                <td><strong>Guarantee</strong></td>
                <td>—</td>
                <td>Replacement period agreed in writing before we start</td>
              </tr>
              <tr>
                <td><strong>Best for</strong></td>
                <td>Steady, predictable hiring you already manage</td>
                <td>Bulk hiring, hard roles, or no recruiter of your own</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="small muted">
          Rates are set per requirement and confirmed in a written work order before any sourcing
          begins.
        </p>
      </Band>
      <CtaBand
        title="Not sure which of these you are?"
        text=" Describe the situation and we will point you to the right one, including if it is not us. "
      >
        <Link className="btn btn-primary" to="/contact.html">Write to us</Link>
      </CtaBand>
    </>
  );
}
