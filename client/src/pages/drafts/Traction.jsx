import Band from '../../components/Band.jsx';
import { Panel } from '../../components/Card.jsx';
import Notice from '../../components/Notice.jsx';
import Seo from '../../components/Seo.jsx';

export default function Traction() {
  return (
    <>
      <Seo
        file="traction.html"
        title="Traction | Afra Ventures"
        description="Live numbers across Afra Ventures products."
        noindex
      />
      <Band wrap="stack-lg">
        <Notice title="This page is a template, not a live page.">
          <p>
            Every figure below is a placeholder written as{" "}
            <code>[ ]</code>
            . Do not publish this page until real numbers replace them — a traction page with
            invented figures is the fastest way to lose a government reviewer or an investor. When
            the numbers are real, remove this notice and the noindex line, link the page from the
            navigation, and add it to sitemap.xml and robots.txt.
          </p>
        </Notice>
        <div className="stack">
          <p className="eyebrow">Traction</p>
          <h1>Where the products actually are.</h1>
          <p className="lede">
            Updated at the end of every month. Numbers only, with the month they were counted.
          </p>
        </div>
        <Panel head={["GymDesk", "As at [month year]"]}>
          <dl className="readout">
            <div>
              <dt>Pilot gyms live</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Paying gyms</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Members managed</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Collections processed</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Renewal rate, pilot gyms</dt>
              <dd>[ ] — against [ ] before</dd>
            </div>
          </dl>
        </Panel>
        <Panel head={["Velai Vaaippu", "As at [month year]"]}>
          <dl className="readout">
            <div>
              <dt>Registered job seekers</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Employers posting</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Colleges on paid plans</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Students tracked</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Drives run this year</dt>
              <dd>[ ]</dd>
            </div>
          </dl>
        </Panel>
        <Panel head={["Company", "As at [month year]"]}>
          <dl className="readout">
            <div>
              <dt>Monthly recurring revenue</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Paying customers, all products</dt>
              <dd>[ ]</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>[ ] people</dd>
            </div>
            <div>
              <dt>Retention, 6 months</dt>
              <dd>[ ]</dd>
            </div>
          </dl>
        </Panel>
        <div className="stack">
          <h3>Rules for this page</h3>
          <ul className="ticks" style={{ maxWidth: '62ch' }}>
            <li>
              <strong>Only counted numbers.</strong>
              {" "}If it cannot be produced from a system, it does not go here.
            </li>
            <li>
              <strong>Always dated.</strong>
              {" "}Every figure carries the month it was counted in.
            </li>
            <li>
              <strong>Named customers need written permission.</strong>
              {" "}No logo goes up on a verbal yes.
            </li>
            <li>
              <strong>Down months stay up.</strong>
              {" "}A page that only ever rises is not believed by anyone who matters.
            </li>
          </ul>
        </div>
      </Band>
    </>
  );
}
