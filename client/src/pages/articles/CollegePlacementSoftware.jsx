import { Link } from 'react-router';
import Seo from '../../components/Seo.jsx';
import { article, breadcrumb } from '../../lib/jsonld.js';

export default function CollegePlacementSoftware() {
  return (
    <>
      <Seo
        file="college-placement-software.html"
        title="What a college placement cell actually needs from software"
        description="Placement cells are measured on numbers they cannot easily produce. A look at what the work really involves, and the five things software has to get right."
        type="article"
        jsonLd={[
          breadcrumb(["Insights", "insights.html"], ["Placement software", "college-placement-software.html"]),
          article({
            headline: "What a college placement cell actually needs from software",
            description: "The five things placement software has to get right, from the cell's side of the desk.",
            file: "college-placement-software.html",
            datePublished: "2026-09-17",
            dateModified: "2026-09-17",
          }),
        ]}
      />
      <section className="band">
        <div className="wrap">
          <div className="stack" style={{ maxWidth: '68ch' }}>
            <p className="eyebrow">
              <Link to="/insights.html" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</Link>
              {" "}· Colleges · 17 September 2026
            </p>
            <h1 style={{ fontSize: 'var(--fs-3xl)' }}>
              What a college placement cell actually needs from software
            </h1>
            <p className="lede" style={{ maxWidth: 'none' }}>
              Placement cells are judged every year on a number they have to assemble by telephone.
              Most placement software solves a different problem entirely.
            </p>
          </div>
        </div>
      </section>
      <section className="band band-alt">
        <div className="wrap">
          <div className="article">
            <p>
              Visit a training and placement office in March and you will find a good officer, two
              overworked coordinators, and a spreadsheet that has been forwarded so many times
              nobody is sure which copy is current. They are trying to answer one question for the
              annual report:{" "}
              <strong>
                of the students eligible this year, how many were placed, where, and at what package
              </strong>
              .
            </p>
            <p>
              That question is hard to answer not because the information is missing, but because it
              is scattered across drive attendance sheets, company emails, student WhatsApp replies
              and the memory of whoever ran each drive.
            </p>
            <h2>Why job-board software does not help</h2>
            <p>
              Most products sold to colleges are job boards with a college login added. They are
              built around the opening — post it, collect applications, close it. A placement cell
              is not built around the opening. It is built around{" "}
              <strong>the student cohort</strong>
              , tracked over one academic year, with the drive as an event that happens to them.
            </p>
            <p>
              Get that model backwards and every report the college needs becomes a manual exercise,
              no matter how good the job board is.
            </p>
            <h2>The five things it has to get right</h2>
            <h3>1. The eligible cohort is the spine</h3>
            <p>
              Every student who is eligible this year exists in the system from day one, with their
              branch, their backlog status and their consent to be put forward. Everything else —
              drives, offers, outcomes — attaches to that record. If a student can be placed without
              appearing in the register, the register is already wrong.
            </p>
            <h3>2. One student, many outcomes</h3>
            <p>
              A student may attend four drives, receive two offers, reject one, accept one and then
              not join. Software that stores a single "placed" flag cannot describe that, and the
              difference between offers made and offers joined is exactly what the college is asked
              about.
            </p>
            <h3>3. Drives that colleges run themselves</h3>
            <p>
              The cell needs to invite a company, publish the drive to the right students, collect
              registrations, appoint an in-charge for the day and record results — without emailing
              anyone at the vendor. A drive that requires a support ticket will be run on paper
              instead.
            </p>
            <h3>4. Roles that match the hierarchy</h3>
            <p>
              A placement officer, a department coordinator and a student volunteer running
              registrations at the door do not need the same access. If the only options are
              administrator and student, the officer's password gets shared, and then the audit
              trail is worthless.
            </p>
            <h3>5. The report comes out of the records</h3>
            <p>
              The annual placement number should be a query, not a project. If the cell still has to
              build a spreadsheet at the end of the year, the software failed at the one thing it
              was bought to do.
            </p>
            <blockquote>
              If the annual report still has to be assembled by hand, the software did not do its
              job — whatever else it did well.
            </blockquote>
            <h2>Two things worth asking any vendor</h2>
            <ul>
              <li>
                <strong>Show me a student record after four drives.</strong>
                {" "}Not the dashboard, not the job list — one student, mid-year, with a rejected
                offer in their history. This exposes the data model in about a minute.
              </li>
              <li>
                <strong>Who owns the data if we stop paying?</strong>
                {" "}Ask for the export format in writing before signing anything. A placement
                register that cannot leave the system is a liability the college inherits.
              </li>
            </ul>
            <h2>Where preparation fits</h2>
            <p>
              Software does not make a student employable. The colleges with good numbers are the
              ones that start preparation early — communication, aptitude, interview practice — and
              treat drives as the last step rather than the whole strategy. A platform is worth
              having because it frees the cell's time for that work, not because it replaces it.
            </p>
            <p>
              That is how we built{" "}
              <Link to="/velai-vaaippu.html">Velai Vaaippu</Link>
              : the college panel models the cohort and the year, and the training programme sits
              alongside it rather than being sold as an afterthought.
            </p>
          </div>
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" to="/velai-vaaippu.html">See Velai Vaaippu</Link>
            {" "}
            <Link className="btn btn-ghost" to="/contact.html?topic=colleges">
              Talk to us about your cell
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
