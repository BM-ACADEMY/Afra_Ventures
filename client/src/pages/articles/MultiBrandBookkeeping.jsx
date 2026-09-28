import { Link } from 'react-router';
import ArticleLayout from '../../components/ArticleLayout.jsx';

export default function MultiBrandBookkeeping() {
  return (
    <ArticleLayout
      file="multi-brand-bookkeeping.html"
      headline="Running several brands on one set of books"
      description="When one company runs a training arm, a catering line and a property desk, group totals hide what each brand is doing. How to structure books so each line reports for itself."
      summary="How to keep per-brand profit and loss visible inside one company."
      crumb="Multi-brand books"
      topic="Finance"
      datePublished="2026-09-17"
      lede="One company, five lines of business, one bank account. The statutory books are clean and they answer none of the questions the owner actually has."
      actions={
        <>
          <Link className="btn btn-primary" to="/insights.html">More notes</Link>
          {" "}
          <Link className="btn btn-ghost" to="/contact.html">Talk to us</Link>
        </>
      }
    >
      <p>
        A small Indian company almost never does one thing. It starts with a service, adds a
        training arm because the enquiries were there, takes on catering because a relative
        knew the trade, and picks up a property desk because someone asked. All of it runs
        under one registration, one GST number and usually one current account.
      </p>
      <p>
        At year end the accountant produces a correct profit and loss for the company. The
        owner reads it and learns almost nothing, because the only question worth asking is
        {" "}
        <strong>which of these five things is worth doing next year</strong>
        , and a single group total cannot answer it.
      </p>
      <h2>Why the answer is so hard to get</h2>
      <ul>
        <li>
          <strong>Income arrives untagged.</strong>
          {" "}A transfer lands in the account. Two weeks later nobody remembers which brand
          it belonged to, and the narration says "NEFT CR".
        </li>
        <li>
          <strong>Costs are genuinely shared.</strong>
          {" "}Rent, salaries, the internet connection and the owner's time serve all five
          brands. Assigning them feels arbitrary, so most people do not.
        </li>
        <li>
          <strong>Cash does not pass through the bank.</strong>
          {" "}The catering advance taken in cash on a Tuesday is real revenue that the bank
          statement will never show.
        </li>
        <li>
          <strong>Nobody owns the numbers day to day.</strong>
          {" "}The accountant appears quarterly. Between visits, the record is a notebook and
          a chat thread.
        </li>
      </ul>
      <h2>Four changes that fix most of it</h2>
      <h3>1. Tag the brand at the moment of entry</h3>
      <p>
        This is the whole game. Every rupee in or out gets a brand attached when it is
        recorded, by the person recording it, who knows perfectly well which brand it was.
        Attempting this later, from a bank statement, is guesswork dressed up as accounting.
      </p>
      <h3>2. Split costs into direct and shared, and stop arguing about it</h3>
      <p>
        Direct costs go to the brand that caused them. Shared costs — rent, admin salaries,
        utilities — go into one pool and are allocated by one rule you write down once and
        then leave alone, usually in proportion to revenue or headcount. The rule does not
        have to be perfect. It has to be consistent, so that a change in the numbers means a
        change in the business and not a change in the method.
      </p>
      <h3>3. Record cash the same day</h3>
      <p>
        Not the same week. A cash book that is written up on Sunday from memory is a work of
        fiction with good intentions. If entry takes longer than writing it in the notebook,
        it will not happen — which is a design constraint on any software you adopt, not a
        discipline problem.
      </p>
      <h3>4. Look at it monthly, per brand</h3>
      <p>
        Revenue, direct cost, allocated cost, and what is left, for each brand, every month.
        Three months of that will tell you things about your own business you have been
        guessing at for years — usually that one brand is quietly funding two others.
      </p>
      <blockquote>
        You cannot manage five businesses with one number, and the single number is the only
        one most owners have.
      </blockquote>
      <h2>What about dues and investors</h2>
      <p>Two records tend to sit outside the books entirely and cause the most trouble.</p>
      <p>
        <strong>Dues</strong>
        {" "}— money owed to you and by you — usually live in somebody's head. They belong in
        the same place as everything else, with a date, a person and a brand attached, because
        a collection routine you can run depends on a list you can open.
      </p>
      <p>
        <strong>Investor positions</strong>
        {" "}deserve written terms and a monthly statement even when the investor is a friend,
        and especially when the arrangement is a share of profit rather than a fixed return.
        The statement is not bureaucracy; it is what stops a good relationship turning into a
        disagreement about what was agreed two years ago.
      </p>
      <h2>Where software comes in</h2>
      <p>
        None of the above needs a product. It needs a habit and a consistent rule. Software
        earns its place only by making the habit cheap: tagging becomes one tap instead of a
        decision, the monthly per-brand statement builds itself, and dues chase themselves on
        a schedule.
      </p>
      <p>
        Start with the habit anyway. Tag one month of entries by brand, apply one allocation
        rule, and look at the result. If it tells you something you did not know — and it
        usually does — then you know what to look for in a tool. If it does not, no software
        was going to rescue it.
      </p>
      <p className="small muted">
        None of this is tax or accounting advice. Your chartered accountant decides how your
        books are kept and how your returns are filed; everything here is about the management
        view you keep alongside them.
      </p>
    </ArticleLayout>
  );
}
