import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Faq from '../components/Faq.jsx';
import LeakCalculator from '../components/LeakCalculator.jsx';
import Notice from '../components/Notice.jsx';
import ScreenFrame from '../components/ScreenFrame.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb, faqPage, softwareApp } from '../lib/jsonld.js';

const FAQ = [
  {
    q: 'Can I buy GymDesk today?',
    a: 'Not yet. It is in beta. We are taking a small number of pilot gyms who use it free while we finish testing, and pricing will be published when the product moves out of beta.',
  },
  {
    q: 'Will my desk staff actually use it?',
    a: 'That is the risk with any system, and it is why we train your staff at your gym rather than over a call. The design rule we work to is that recording a payment or a check-in has to be faster than writing it in the register. If it is slower, people go back to the register, and we would rather fix the software than blame the staff.',
  },
  {
    q: 'We only have 80 members. Are we too small?',
    a: 'No. A smaller gym usually feels a lapsed membership more, not less, because each one is a bigger share of the month. The system is the same whether you have eighty members or eight hundred.',
  },
  {
    q: 'What happens if our internet goes down?',
    a: 'GymDesk runs in a browser, so it needs a connection. In practice the desk falls back to paper for the hour and the entries are added afterwards, which is no worse than today. Offline check-in is on the roadmap and we will not pretend it is there before it is.',
  },
  {
    q: 'Will it work for more than one branch?',
    a: 'Yes. GymDesk is multi-tenant, with the gym owner above branch sub-admins, so a two or three location chain works the way you would expect.',
  },
  {
    q: 'Do the reminders really send by themselves?',
    a: 'Yes. Renewal reminders and follow-ups go out automatically in the current beta — you set the timing once and they run. You can see everything that was sent, and you can stop or edit any sequence.',
  },
  {
    q: 'Will my members be annoyed by automated messages?',
    a: 'They would be, if we sent a lot of them. The defaults are deliberately restrained: a renewal reminder before expiry, a short follow-up sequence that stops the moment somebody replies, and an opt-out that is honoured permanently. You control the timing and the wording, and the system never sends the same person two things on the same day.',
  },
  {
    q: 'What happens to my data if we stop using it?',
    a: 'It is yours. We export your members, payments and attendance to a spreadsheet and hand it over, and we delete our copy on request. That holds during the pilot too.',
  },
  {
    q: 'Do you handle the AI plans responsibly?',
    a: 'The model writes a draft. A trainer reviews and edits it before any member sees it, and the trainer\'s name is on it. We will not ship a version that issues diet advice to a member without a human in between.',
  },
];

export default function GymDesk() {
  return (
    <>
      <Seo
        file="gymdesk.html"
        title="GymDesk — Gym management software for Indian gyms | Afra Ventures"
        description="GymDesk is gym management software for memberships, attendance and payments, with renewal reminders and enquiry follow-up that send automatically and AI-assisted workout and diet plans. In beta testing. Request a pilot."
        jsonLd={[
          breadcrumb(["Products", "products.html"], ["GymDesk", "gymdesk.html"]),
          softwareApp({
            name: "GymDesk",
            file: "gymdesk.html",
            category: "BusinessApplication",
            description:
              "Multi-tenant gym management software covering memberships, attendance and payments, with automatic renewal reminders and enquiry follow-up sequences, plus AI-assisted workout and diet plans.",
            releaseNotes: "Beta — in testing with the development team, pilot gyms being selected.",
          }),
          faqPage(FAQ),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="stack">
            <p className="eyebrow">
              Product 01 ·{" "}
              <Chip stage="beta" style={{ marginLeft: '.2rem' }}>Beta · in testing</Chip>
            </p>
            <h1>GymDesk</h1>
            <p className="lede">
              Gym management software that runs your renewals and follow-ups on autopilot — so
              members stop lapsing quietly, payments arrive on time, and no walk-in enquiry is ever
              forgotten.
            </p>
            <div className="btn-row" style={{ marginTop: '.5rem' }}>
              <Link className="btn btn-primary" to="/contact.html?topic=gymdesk">Apply for the pilot</Link>
              {" "}
              <a className="btn btn-ghost" href="#what-it-is">How it works</a>
            </div>
            <p className="small muted" style={{ marginTop: '.5rem' }}>
              Pilot gyms run GymDesk free while it is in beta. In return we want your honest
              opinion, in person, once a fortnight.
            </p>
          </div>
          <Panel head={["Build status", "Sep 2026"]}>
            <dl className="readout">
              <div>
                <dt>Stage</dt>
                <dd>Beta — feature complete, in testing</dd>
              </div>
              <div>
                <dt>Architecture</dt>
                <dd>Multi-tenant, one deployment, many gyms</dd>
              </div>
              <div>
                <dt>Roles</dt>
                <dd>Platform admin · Gym owner · Branch sub-admin · Member</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React, Node, MongoDB</dd>
              </div>
              <div>
                <dt>Automation</dt>
                <dd>Renewal reminders and follow-ups send by themselves</dd>
              </div>
              <div>
                <dt>Runs on</dt>
                <dd>Any browser, phone or desktop</dd>
              </div>
              <div>
                <dt>Pilot slots</dt>
                <dd>Open — a small first cohort</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </section>
      <Band alt id="what-it-is" wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What it is</p>
          <h2>One record of your gym, that tells you what today needs.</h2>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="prose">
            <p>
              GymDesk holds every member, plan, payment, attendance mark and enquiry your gym has,
              in one place. It opens in a web browser — on the desk computer, on a trainer's
              phone, on the owner's phone at home. There is nothing to install and no machine at
              the gym that can fail and take your records with it.
            </p>
            <p>
              The part that matters is what it does with those records. A register stores facts.
              GymDesk{" "}
              <strong>acts on them</strong>
              . A plan approaching its end date triggers a renewal reminder without anyone asking.
              An enquiry that goes quiet gets chased. A member who stops checking in is surfaced
              while there is still time to call. The work that used to depend on somebody
              remembering now happens on its own.
            </p>
            <p>
              Whatever the automation cannot settle still lands on a human's list, so the desk
              always knows who is worth a personal call. One installation serves many gyms, and
              each gym sees only its own data — if you run two or three branches, the owner sees
              all of them and each branch manager sees theirs.
            </p>
          </div>
          <Panel head={["In one line", "Per role"]}>
            <dl className="readout">
              <div>
                <dt>Gym owner</dt>
                <dd>Knows what came in today and who is slipping away, without being at the desk</dd>
              </div>
              <div>
                <dt>Front desk</dt>
                <dd>Stops chasing, and calls only the people worth a personal call</dd>
              </div>
              <div>
                <dt>Trainer</dt>
                <dd>Sees the member's plan, history and attendance before the session</dd>
              </div>
              <div>
                <dt>Member</dt>
                <dd>Checks their own plan, dues and attendance without asking anyone</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">The challenge it solves</p>
          <h2>Gyms rarely lose members. They lose track of them.</h2>
          <p className="prose">
            A gym's income is recurring. Its record-keeping is not. Memberships are sold on dates,
            attendance happens every day, payments arrive in parts, and enquiries walk in at
            random hours. A paper register can hold all of that perfectly well — what it cannot do
            is{" "}
            <strong>tell anybody what needs doing today</strong>
            .
          </p>
          <p className="prose">
            So the gym learns about every problem after it has already cost money. The member who
            stopped coming in week six. The plan that ran out last month. The enquiry from three
            weeks ago that was never called back. The balance nobody chased because nobody was
            reminded. Your staff are not careless. They have no instrument.
          </p>
        </div>
        <div className="grid grid-3">
          <div className="feat">
            <div className="rule" />
            <h4>Expiry that surfaces too late</h4>
            <p>
              Plans end on a date written in a register, and registers are good at recording and
              useless at reminding. By the time the desk notices, the member has been away six
              weeks and the call now sounds like a sales call. Ten days earlier it is a courtesy.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Enquiries with no second contact</h4>
            <p>
              Roughly half the people who walk in are not ready to join that day, which is normal.
              What is not normal is that most never hear from the gym again — because no list
              anywhere records who has not yet been contacted a second time.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Balances that drift</h4>
            <p>
              Part payment is how most memberships here are actually sold. The balance lives in a
              corner of the register, in a chat message and in the trainer's memory. When those
              three disagree, the gym loses the argument and the money.
            </p>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">How it removes the challenge</p>
          <h2>Every stored fact triggers an action.</h2>
          <p className="prose">
            This is the whole mechanism, and it is deliberately simple. A date, a gap in
            attendance or an unpaid balance is not just stored — it{" "}
            <strong>sets something in motion</strong>
            . Most of the time that is a message the member receives without anybody at the gym
            lifting a finger. The rest lands on the desk's list.
          </p>
        </div>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th scope="col">What goes wrong today</th>
                <th scope="col">What GymDesk does about it</th>
                <th scope="col">What happens, with nobody involved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Plans expire unnoticed</strong></td>
                <td>Every plan carries an end date the system watches</td>
                <td>A renewal reminder goes out automatically, two weeks before the end date</td>
              </tr>
              <tr>
                <td><strong>Members drift away silently</strong></td>
                <td>Attendance gaps are measured, not noticed by chance</td>
                <td>A win-back message goes out, and the member appears on the desk's at-risk list</td>
              </tr>
              <tr>
                <td><strong>Enquiries go cold</strong></td>
                <td>Every walk-in and call is captured with a next-contact date</td>
                <td>A follow-up sequence runs until they reply, join, or ask to stop</td>
              </tr>
              <tr>
                <td><strong>Balances are forgotten</strong></td>
                <td>Part payments are recorded against the member, not a loose ledger</td>
                <td>A payment reminder is sent, and the balance stays on the outstanding list</td>
              </tr>
              <tr>
                <td><strong>Owner is blind unless present</strong></td>
                <td>Collections, check-ins and renewals roll up automatically</td>
                <td>A dashboard readable on a phone, from anywhere</td>
              </tr>
              <tr>
                <td><strong>Plans take a trainer an hour to write</strong></td>
                <td>A draft workout or diet plan is generated from the member's goal</td>
                <td>A draft the trainer edits and signs in minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Work it out</p>
          <h2>What the leak is worth at your gym.</h2>
          <p className="prose">
            Move the sliders to match your own numbers. The figures below are an estimate, not a
            promise — the assumptions are written out under the result so you can argue with them.
          </p>
        </div>
        <LeakCalculator />
        <Notice title="How this is calculated.">
          <p>
            A lapsed member is counted as six further months of fees that were available and not
            collected — half of a twelve-month relationship, which is deliberately conservative.
            Enquiry loss assumes half of your enquiries never get a second contact, and that those
            would have closed at your own conversion rate and stayed six months. Your gym is not
            the average gym; treat this as a way to see the shape of the problem, not its exact
            size.
          </p>
        </Notice>
      </Band>
      <Band alt id="what-it-does" wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What it does</p>
          <h2>One place for everything the front desk touches.</h2>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>Members and plans</h4>
            <ul className="ticks">
              <li>
                <strong>Member records</strong>
                {" "}with plan, start and expiry dates, and history
              </li>
              <li>
                <strong>Packages</strong>
                {" "}for monthly, quarterly, annual and personal training
              </li>
              <li>
                <strong>Freeze and transfer</strong>
                {" "}handled without editing a register
              </li>
              <li>
                <strong>Expiring this week</strong>
                {" "}as a list the desk works through
              </li>
            </ul>
          </Card>
          <Card>
            <h4>Attendance</h4>
            <ul className="ticks">
              <li>
                <strong>Daily check-in</strong>
                {" "}from the desk or the member's own phone
              </li>
              <li>
                <strong>Who has stopped coming</strong>
                {" "}surfaced before the plan expires
              </li>
              <li>
                <strong>Trainer sessions</strong>
                {" "}logged against the member
              </li>
              <li>
                <strong>Branch view</strong>
                {" "}for owners running more than one location
              </li>
            </ul>
          </Card>
          <Card>
            <h4>Payments and dues</h4>
            <ul className="ticks">
              <li>
                <strong>Collections</strong>
                {" "}recorded against the member, not a loose ledger
              </li>
              <li>
                <strong>Part payments and balances</strong>
                {" "}that still add up at month end
              </li>
              <li>
                <strong>Receipts</strong>
                {" "}issued from the same record
              </li>
              <li>
                <strong>Payment reminders</strong>
                {" "}that chase a balance without an awkward call
              </li>
            </ul>
          </Card>
          <Card>
            <h4>Enquiries and renewals</h4>
            <ul className="ticks">
              <li>
                <strong>Every walk-in and call</strong>
                {" "}captured with a follow-up date
              </li>
              <li>
                <strong>Follow-up sequences</strong>
                {" "}that keep going until the person replies
              </li>
              <li>
                <strong>Renewal reminders</strong>
                {" "}sent automatically before expiry, not after
              </li>
              <li>
                <strong>Conversion visible</strong>
                {" "}from enquiry through to first payment
              </li>
            </ul>
          </Card>
          <Card>
            <h4>AI-assisted plans</h4>
            <ul className="ticks">
              <li>
                <strong>Workout plans</strong>
                {" "}drafted from the member's goal and level
              </li>
              <li>
                <strong>Diet suggestions</strong>
                {" "}a trainer reviews and edits before issuing
              </li>
              <li>
                <strong>Always a draft</strong>
                {" "}— a human signs it off, never the model
              </li>
              <li>
                <strong>Saved to the member</strong>
                {" "}so the next trainer sees the history
              </li>
            </ul>
          </Card>
          <Card>
            <h4>Roles and access</h4>
            <ul className="ticks">
              <li>
                <strong>Gym owner</strong>
                {" "}sees everything across their branches
              </li>
              <li>
                <strong>Sub-admin</strong>
                {" "}runs a branch without touching billing settings
              </li>
              <li>
                <strong>Member</strong>
                {" "}logs in to see their plan, attendance and dues
              </li>
              <li>
                <strong>Platform admin</strong>
                {" "}is us, and cannot see your member data casually
              </li>
            </ul>
          </Card>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What changes at your gym</p>
          <h2>Four habits that stop needing willpower.</h2>
          <p className="prose">
            None of these need software in principle. They need somebody to remember, every single
            day, which is precisely what does not happen in a busy gym. Automating them is how
            they survive a busy Monday.
          </p>
        </div>
        <div className="grid grid-4">
          <div className="feat">
            <div className="rule" />
            <h4>Renewals ask for themselves</h4>
            <p>
              The reminder goes out while the member is still warm, whether or not the desk was
              busy.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Every enquiry gets chased</h4>
            <p>The sequence keeps going after the first message, which is where most gyms stop.</p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Month end stops being an argument</h4>
            <p>Collections, balances and receipts all come from one record that agrees with itself.</p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>The owner can be elsewhere</h4>
            <p>
              The day's numbers are on a phone, so being at the desk stops being the only way to
              know.
            </p>
          </div>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Inside the product</p>
          <h2>Screens from the beta.</h2>
          <p className="prose">
            These are placeholders until the beta screenshots are cleared of real member
            information. We would rather show you nothing than show you invented numbers.
          </p>
        </div>
        {/*
          DEVELOPER NOTE — replacing these four placeholders
          ==================================================
          When a screenshot is ready, save it in client/public/screens/ and pass it to its
          <ScreenFrame>, e.g.:
            <ScreenFrame title="Owner dashboard" caption="…" src="/screens/owner-dashboard.png"
                         alt="<describe the screen>" />
          ScreenFrame then shows <img width="1600" height="1000"> instead of the placeholder.
          Keep the title and caption exactly as written.

          Image requirements
            - 1600 x 1000 px, PNG, 16:10 aspect ratio (matches the frame, so nothing crops)
            - Capture at 1600px browser width, 100% zoom, light theme
            - Export under 300 KB each; run through TinyPNG or similar

          MUST be redacted before export — replace, do not blur:
            - Member names          -> plausible fake names
            - Phone numbers, email  -> 90000 00000 style placeholders
            - Photos of members     -> remove entirely
            - Gym name / logo       -> a fictional gym name
            - Any real rupee totals -> realistic but invented figures

          The four screens to capture, in this order:
            1. owner-dashboard.png  — today's collections, check-ins, expiring count
            2. members.png          — member list with search, plan status, payment state
            3. renewals.png         — the "expiring in 14 days" list with follow-up state
            4. plan-builder.png     — an AI-drafted plan open for trainer review

          Rule: no screen may show a figure we have not actually achieved. These illustrate
          the interface, not results.
        */}
        <div className="screens">
          <ScreenFrame title="Owner dashboard" caption="Today's collections, check-ins and expiries" />
          <ScreenFrame title="Members" caption="Search, plan status and payment history" />
          <ScreenFrame title="Renewals" caption="Expiring this week, with follow-up state" />
          <ScreenFrame title="Plan builder" caption="AI draft, reviewed by a trainer" />
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Pilot programme</p>
          <h2>A small first cohort.</h2>
          <p className="prose">
            We are looking for a handful of gyms in Puducherry and Tamil Nadu to run GymDesk
            properly for one season. Not a demo account — your real members, your real
            collections.
          </p>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>What you get</h4>
            <ul className="ticks">
              <li>The full platform, free for the pilot period</li>
              <li>We migrate your existing member register for you</li>
              <li>Training for your desk staff, at your gym</li>
              <li>Changes you ask for go to the top of the queue</li>
            </ul>
          </Card>
          <Card>
            <h4>What we ask</h4>
            <ul className="ticks">
              <li>You actually use it, daily, instead of the register</li>
              <li>Half an hour with us once a fortnight, in person</li>
              <li>Permission to quote your results later, if you are happy</li>
              <li>Honesty when something is worse than what you had</li>
            </ul>
          </Card>
        </div>
        <div className="btn-row">
          <Link className="btn btn-primary" to="/contact.html?topic=gymdesk">Apply for the pilot</Link>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Questions</p>
          <h2>About GymDesk.</h2>
        </div>
        <Faq className="faq narrow" items={FAQ} />
      </Band>
      <CtaBand
        title="Run a gym in Puducherry or Tamil Nadu?"
        text=" We will come to you, look at your register, and tell you whether this helps. "
      >
        <Link className="btn btn-primary" to="/contact.html?topic=gymdesk">Apply for the pilot</Link>
        {" "}
        <Link className="btn btn-ghost" to="/products.html">Other products</Link>
      </CtaBand>
    </>
  );
}
