import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Notice from '../components/Notice.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb, softwareApp } from '../lib/jsonld.js';

export default function VelaiVaaippu() {
  return (
    <>
      <Seo
        file="velai-vaaippu.html"
        title="Velai Vaaippu — Free skill assessment, resume builder and jobs | Afra Ventures"
        description="Free skill assessment, resume builder and job matching for job seekers and students in Tamil Nadu and Puducherry, with placement tracking and drive management for college placement cells and assessed shortlists for employers."
        jsonLd={[
          breadcrumb(["Products", "products.html"], ["Velai Vaaippu", "velai-vaaippu.html"]),
          softwareApp({
            name: "Velai Vaaippu",
            file: "velai-vaaippu.html",
            category: "BusinessApplication",
            description:
              "Job and campus placement platform serving job seekers, employer companies and college placement cells. Free skill assessment, resume builder and job matching for candidates; placement tracking and drive management for colleges; assessed shortlists for employers.",
            releaseNotes: "Live — open for job seekers, companies and colleges.",
          }),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="stack">
            <p className="eyebrow">
              Product 03 ·{" "}
              <Chip stage="live" style={{ marginLeft: '.2rem' }}>Live</Chip>
            </p>
            <h1>Velai Vaaippu</h1>
            <p className="lede tamil" style={{ fontSize: '1.15rem', color: 'var(--ink-3)', marginTop: '-.35rem' }}>
              வேலை வாய்ப்பு
            </p>
            <p className="lede">
              A jobs platform with three sides. Seekers assess their skills and find work, employers
              hire on evidence instead of a resume, and college placement cells finally have one
              place that knows where every student ended up.
            </p>
            <div className="btn-row" style={{ marginTop: '.5rem' }}>
              <a className="btn btn-primary" href="https://velaivaaipu.in" rel="noopener">
                Open velaivaaipu.in
              </a>
              {" "}
              <Link className="btn btn-ghost" to="/contact.html?topic=colleges">For colleges</Link>
            </div>
          </div>
          <Panel head={["Status", "Live"]}>
            <dl className="readout">
              <div>
                <dt>Stage</dt>
                <dd>In production, open to all three sides</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>velaivaaipu.in</dd>
              </div>
              <div>
                <dt>Serves</dt>
                <dd>Job seekers · Employers · Colleges</dd>
              </div>
              <div>
                <dt>Coverage</dt>
                <dd>Tamil Nadu and Puducherry</dd>
              </div>
              <div>
                <dt>Free for seekers</dt>
                <dd>Skill assessment, resume builder and job matching, at no cost</dd>
              </div>
              <div>
                <dt>Paid plans</dt>
                <dd>For employers hiring at volume and for colleges</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </section>
      <Band alt id="what-it-is" wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What it is</p>
          <h2>One platform holding all three sides of the same market.</h2>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="prose">
            <p>
              Velai Vaaippu is a jobs platform that treats job seekers, employer companies and
              college placement cells as three users of one system rather than three separate
              products. A seeker's profile, an employer's opening and a college's student record
              are all the same underlying data, seen from different sides.
            </p>
            <p>
              The college panel is what makes it different from a job board. It models{" "}
              <strong>the placement cell's academic year</strong>
              {" "}— the eligible cohort, the drives that happen to them, the offers made, and
              what each student finally accepted — so the annual placement figure is a query
              rather than a project.
            </p>
            <p>
              Underneath all three sits one{" "}
              <strong>skill assessment</strong>
              , free for job seekers and students. It feeds the resume builder, drives the job
              matching, and gives colleges and employers a common measure of what a candidate can
              actually do. It is live today at velaivaaipu.in, with paid plans for employers
              hiring at volume and for colleges.
            </p>
          </div>
          <Panel head={["In one line", "Per side"]}>
            <dl className="readout">
              <div>
                <dt>Job seeker</dt>
                <dd>Assesses their skills free, then finds openings they can actually reach</dd>
              </div>
              <div>
                <dt>Employer</dt>
                <dd>Gets a shortlist instead of four hundred unfiltered applications</dd>
              </div>
              <div>
                <dt>Placement cell</dt>
                <dd>Knows where every student stands, all year, and how ready the batch is</dd>
              </div>
              <div>
                <dt>Principal</dt>
                <dd>Gets the placement number without a round of phone calls</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">The challenge it solves</p>
          <h2>A job board only solves a third of the problem.</h2>
          <p className="prose">
            A seeker needs openings they can actually reach. An employer needs a shortlist, not
            four hundred applications. And a college is judged every year on a placement figure it
            assembles by calling around and asking students what happened to them. Those are the
            same market, and they are almost never on the same system.
          </p>
          <p className="prose">
            Velai Vaaippu puts all three on one platform, which is what makes a campus drive
            possible without a single spreadsheet changing hands.
          </p>
        </div>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Who is stuck</th>
                <th scope="col">What goes wrong today</th>
                <th scope="col">What the platform does about it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Job seeker</strong></td>
                <td>Applying blind, with no idea which roles they are ready for</td>
                <td>A free assessment, a resume built from it, and matching to reachable openings</td>
              </tr>
              <tr>
                <td><strong>Employer</strong></td>
                <td>Hundreds of applications, and no way to tell who can actually do the work</td>
                <td>Assessed skills on every candidate, so the shortlist is built on evidence</td>
              </tr>
              <tr>
                <td><strong>Placement cell</strong></td>
                <td>The year's outcomes live in drive sheets, emails and student replies</td>
                <td>One register per eligible student, carried from registration to joining</td>
              </tr>
              <tr>
                <td><strong>Placement cell</strong></td>
                <td>Drives are coordinated over email and passed-around spreadsheets</td>
                <td>Invite the company, publish the drive, take registrations, record outcomes</td>
              </tr>
              <tr>
                <td><strong>Principal or management</strong></td>
                <td>The annual placement figure is assembled by calling around</td>
                <td>The figure is produced from records already captured through the year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What each side gets</p>
          <h2>Three products in one platform.</h2>
        </div>
        <div className="grid grid-3">
          <Card>
            <span className="idx">01</span>
            <h3>Job seekers and students</h3>
            <ul className="ticks">
              <li>
                <strong>Free skill assessment</strong>
                {" "}that shows where you actually stand
              </li>
              <li>
                <strong>Resume builder</strong>
                {" "}that uses your assessment, free
              </li>
              <li>
                <strong>Skill matcher</strong>
                {" "}pointing you at openings you can genuinely get
              </li>
              <li>
                <strong>Search and apply</strong>
                {" "}across Tamil Nadu and Puducherry
              </li>
              <li>
                <strong>Job alerts</strong>
                {" "}for the roles and places you care about
              </li>
              <li>
                <strong>Direct messages</strong>
                {" "}to recruiters who post
              </li>
              <li>
                <strong>Career counselling</strong>
                {" "}available through the platform
              </li>
            </ul>
          </Card>
          <Card>
            <span className="idx">02</span>
            <h3>Employers</h3>
            <ul className="ticks">
              <li>
                <strong>Assessment scores</strong>
                {" "}on candidates before you spend an interview slot
              </li>
              <li>
                <strong>Post openings</strong>
                {" "}— two active jobs free, more on a paid plan
              </li>
              <li>
                <strong>Search candidates</strong>
                {" "}rather than waiting for applications
              </li>
              <li>
                <strong>Team accounts</strong>
                {" "}with permissions for recruiters who work together
              </li>
              <li>
                <strong>Campus drives</strong>
                {" "}at colleges that invite you
              </li>
              <li>
                <strong>Reach on social</strong>
                {" "}through our job-seeker audience
              </li>
            </ul>
          </Card>
          <Card>
            <span className="idx">03</span>
            <h3>Colleges</h3>
            <ul className="ticks">
              <li>
                <strong>Assess a whole batch</strong>
                {" "}and see readiness by department
              </li>
              <li>
                <strong>Track every student</strong>
                {" "}from registration to offer letter
              </li>
              <li>
                <strong>Invite companies</strong>
                {" "}to a drive from inside the panel
              </li>
              <li>
                <strong>Run the drive</strong>
                {" "}with a nominated in-charge per event
              </li>
              <li>
                <strong>Placement numbers</strong>
                {" "}that come out of the system, not a phone round
              </li>
              <li>
                <strong>One record</strong>
                {" "}the placement officer and the principal both trust
              </li>
            </ul>
          </Card>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">For placement cells</p>
          <h2>The part colleges care about.</h2>
          <p className="prose">
            Most placement software is a job board with a college login bolted on. Velai Vaaippu
            was built the other way round — the placement cell's year is the thing it models.
          </p>
        </div>
        <div className="grid grid-2">
          <div className="feat">
            <div className="rule" />
            <h4>The register is the product</h4>
            <p>
              Every eligible student, their status, their offers, and what they finally accepted.
              When the annual report is due, the number is already there.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Drives without spreadsheets</h4>
            <p>
              Invite a company, publish the drive to eligible students, collect registrations,
              nominate an in-charge, and record outcomes against the same student records.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Access that matches the hierarchy</h4>
            <p>
              A training and placement officer, a drive in-charge and a department coordinator do
              not need the same access. The roles in the platform reflect that.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Training that sits alongside</h4>
            <p>
              Soft skills and employability programmes can be run through the same relationship,
              so preparation and placement are not two disconnected efforts.
            </p>
          </div>
        </div>
        <div className="btn-row">
          <Link className="btn btn-primary" to="/contact.html?topic=colleges">
            Talk to us about your placement cell
          </Link>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Assessment</p>
          <h2>Knowing where you stand, before anyone asks.</h2>
          <p className="prose">
            Most candidates apply blind. They do not know which roles they are ready for, which
            skill is holding them back, or how they compare to the other people applying. And
            employers cannot tell either, until they have spent an interview slot finding out.
          </p>
          <p className="prose">
            Velai Vaaippu answers that for all three sides from the same assessment, and for job
            seekers and students it is{" "}
            <strong>free</strong>
            .
          </p>
        </div>
        <div className="grid grid-3">
          <Card>
            <span className="idx">For you</span>
            <h4>Job seekers and students</h4>
            <ul className="ticks">
              <li>
                <strong>Take the assessment free</strong>
                , as many times as you need
              </li>
              <li>
                <strong>See your gaps</strong>
                {" "}named specifically, not as a score out of ten
              </li>
              <li>
                <strong>Build a resume</strong>
                {" "}that carries your assessed skills, not just claims
              </li>
              <li>
                <strong>Get matched</strong>
                {" "}to openings you can realistically get today
              </li>
              <li>
                <strong>See what to learn</strong>
                {" "}to reach the roles you cannot get yet
              </li>
            </ul>
          </Card>
          <Card>
            <span className="idx">For colleges</span>
            <h4>Placement cells</h4>
            <ul className="ticks">
              <li>
                <strong>Assess a whole batch</strong>
                {" "}in one exercise, early in the year
              </li>
              <li>
                <strong>See readiness by department</strong>
                , so training goes where it is weak
              </li>
              <li>
                <strong>Measure again later</strong>
                {" "}and show whether the training worked
              </li>
              <li>
                <strong>Enter drives prepared</strong>
                , knowing who is ready for which company
              </li>
              <li>
                <strong>Show employers</strong>
                {" "}the standard of the batch before they visit
              </li>
            </ul>
          </Card>
          <Card>
            <span className="idx">For employers</span>
            <h4>Companies hiring</h4>
            <ul className="ticks">
              <li>
                <strong>See assessed skills</strong>
                {" "}on a candidate before the first call
              </li>
              <li>
                <strong>Filter a shortlist</strong>
                {" "}by what people can do, not what they typed
              </li>
              <li>
                <strong>Set a bar for a drive</strong>
                {" "}and meet only candidates who clear it
              </li>
              <li>
                <strong>Waste fewer slots</strong>
                {" "}on interviews that were never going to work
              </li>
              <li>
                <strong>Hire on evidence</strong>
                {" "}rather than on a well-formatted resume
              </li>
            </ul>
          </Card>
        </div>
        <Notice title="What an assessment is and is not.">
          <p>
            It is a starting point that makes a conversation better informed — a way for a student
            to find out what to work on, and for an employer to spend interview time on the right
            people. It is not a verdict on anyone, it does not decide who gets hired, and a person
            always makes that call. Assessment results belong to the candidate, and an employer
            sees them only when the candidate applies or joins a drive.
          </p>
        </Notice>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What comes next</p>
          <h2>Being built through the year.</h2>
          <p className="prose">
            The platform is live and in daily use. These are the pieces we are adding next, so you
            know what is coming rather than having to ask.
          </p>
        </div>
        <div className="grid grid-3">
          <div className="feat">
            <div className="rule" />
            <h4>City pages</h4>
            <p>
              Dedicated pages for Pondicherry, Cuddalore, Villupuram and Chennai, so local
              openings are easier to find.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>A Tamil interface</h4>
            <p>
              The whole platform usable in Tamil, for the seekers who would rather not work in
              English.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Deeper placement reporting</h4>
            <p>
              Year-on-year comparisons and department-level trends for colleges that want more
              than this year's number.
            </p>
          </div>
        </div>
      </Band>
      <CtaBand
        title="Hiring, or placing students?"
        text="The platform is open today. Colleges get a walkthrough on campus."
      >
        <a className="btn btn-primary" href="https://velaivaaipu.in" rel="noopener">Open the platform</a>
        {" "}
        <Link className="btn btn-ghost" to="/college-placement-software.html">
          What placement cells need
        </Link>
      </CtaBand>
    </>
  );
}
