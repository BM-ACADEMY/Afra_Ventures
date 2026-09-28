import { Link } from 'react-router';
import Seo from '../../components/Seo.jsx';
import { article, breadcrumb } from '../../lib/jsonld.js';

export default function GymMembershipRenewals() {
  return (
    <>
      <Seo
        file="gym-membership-renewals.html"
        title="Why gym memberships lapse quietly — and what to do about it"
        description="Most gyms lose more revenue to silent non-renewal than to members who cancel. Here is where the leak starts, and the operational fix that does not need new software to begin."
        type="article"
        jsonLd={[
          breadcrumb(["Insights", "insights.html"], ["Gym renewals", "gym-membership-renewals.html"]),
          article({
            headline: "Why gym memberships lapse quietly — and what to do about it",
            description: "Where gyms lose renewal revenue, and the follow-up routine that recovers it.",
            file: "gym-membership-renewals.html",
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
              {" "}· Gyms · 17 September 2026
            </p>
            <h1 style={{ fontSize: 'var(--fs-3xl)' }}>
              Why gym memberships lapse quietly — and what to do about it
            </h1>
            <p className="lede" style={{ maxWidth: 'none' }}>
              Almost nobody cancels a gym membership. They stop coming, the plan runs out, and the
              gym finds out at the end of the quarter. That gap is where most of the money goes.
            </p>
          </div>
        </div>
      </section>
      <section className="band band-alt">
        <div className="wrap">
          <div className="article">
            <p>
              Ask a gym owner why members leave and you will hear about competition, or about people
              who were never serious. Both happen. But if you sit at the desk for a week and watch,
              a different picture appears: the member who stops coming in week six is still paying
              until week twelve, is still on friendly terms with the trainer, and would probably
              have renewed if anyone had spoken to them in week ten.
            </p>
            <p>Nobody did, because nothing told anybody to.</p>
            <h2>The three places the money goes</h2>
            <h3>1. Expiry that surfaces too late</h3>
            <p>
              A plan ends on a date written in a register. Registers are excellent at recording and
              terrible at reminding. By the time the desk notices the expiry, the member has been
              away for six weeks and the call now sounds like a sales call instead of a check-in.
              Ten days earlier, the same call is a courtesy.
            </p>
            <h3>2. Enquiries with no second contact</h3>
            <p>
              A walk-in gets a tour, a price and a number written on a slip. Roughly half of the
              people who visit a gym are not ready to join that day, which is normal. What is not
              normal is that most of them never hear from the gym again — not because the desk is
              lazy, but because there is no list anywhere of people who have not yet been contacted
              a second time.
            </p>
            <h3>3. Balances that drift</h3>
            <p>
              Part payments are how most memberships in this region are actually sold. The balance
              lives in a corner of the register, in a chat message, and in the trainer's memory.
              When those three disagree, the gym usually loses the argument and the money.
            </p>
            <blockquote>
              A lapsed member is not a lost customer. They are a customer nobody spoke to at the
              right moment.
            </blockquote>
            <h2>A routine you can run tomorrow, without software</h2>
            <p>
              This is worth doing whether or not you ever buy a system, because the system only
              automates the routine. If the routine does not exist, software will not invent it for
              you.
            </p>
            <ol>
              <li>
                <strong>Every Monday, write down who expires in the next fourteen days.</strong>
                {" "}Not this week — two weeks out, while a renewal is still an easy conversation.
              </li>
              <li>
                <strong>Mark anyone who has not checked in for ten days.</strong>
                {" "}These are your real risk list, and they are invisible if you only look at
                expiry dates.
              </li>
              <li>
                <strong>Keep one enquiry list with a next-contact date on every line.</strong>
                {" "}The only column that matters is the date. A name without a date is a name you
                will forget.
              </li>
              <li>
                <strong>Call, do not message, for renewals.</strong>
                {" "}Message for reminders. The renewal conversation goes better on the phone, and
                it takes ninety seconds.
              </li>
              <li>
                <strong>Count two numbers at month end</strong>
                {" "}— how many expired, and how many of those you actually spoke to. The second
                number is the one you can improve.
              </li>
            </ol>
            <h2>What changes when it is in a system</h2>
            <p>
              Nothing above requires software. What software changes is that the list appears
              without anybody building it, the check-in gap is calculated rather than noticed, and
              the enquiry with no next-contact date cannot hide. The routine is the same; it just
              stops depending on whether Monday was busy.
            </p>
            <p>
              That is the whole argument for a product like{" "}
              <Link to="/gymdesk.html">GymDesk</Link>
              , and it is worth being clear that it is a modest one. The software does not retain
              members. It makes sure the person who could have retained them knows in time.
            </p>
            <h2>A rough sense of the size</h2>
            <p>
              For a gym with 180 members at ₹1,200 a month, a 35% annual lapse rate and forty
              enquiries a month, the two leaks together tend to be worth several lakh rupees a year.
              The{" "}
              <Link to="/gymdesk.html#what-it-does">calculator on the GymDesk page</Link>
              {" "}lets you put your own numbers in and shows the assumptions behind the result, so
              you can decide whether you believe it.
            </p>
          </div>
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" to="/gymdesk.html">See GymDesk</Link>
            {" "}
            <Link className="btn btn-ghost" to="/insights.html">More notes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
