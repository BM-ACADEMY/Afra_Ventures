import Band from '../../components/Band.jsx';
import { Card } from '../../components/Card.jsx';
import EnquiryForm from '../../components/EnquiryForm.jsx';
import Notice from '../../components/Notice.jsx';
import Seo from '../../components/Seo.jsx';

export default function Pilot() {
  return (
    <>
      <Seo
        file="pilot.html"
        title="GymDesk pilot programme | Afra Ventures"
        description="Apply to run GymDesk free during its pilot, in exchange for honest feedback."
        noindex
      />
      <Band wrap="stack-lg">
        <Notice title="This page is not switched on yet.">
          <p>
            It is built and carries a noindex tag, and it is not linked from the navigation.
            Switch it on by adding a link from the GymDesk page, removing the noindex line in the
            page head, and adding the page back to sitemap.xml and robots.txt.
          </p>
        </Notice>
        <div className="stack">
          <p className="eyebrow">Pilot programme</p>
          <h1>Run GymDesk free for one season.</h1>
          <p className="lede">
            A small first cohort of gyms in Puducherry and Tamil Nadu, using the platform on their
            real members while we finish testing it.
          </p>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>What you get</h4>
            <ul className="ticks">
              <li>The full platform, free for the pilot period</li>
              <li>Your existing member register migrated by us</li>
              <li>Desk staff trained at your gym, not over a call</li>
              <li>Your requests at the top of the development queue</li>
              <li>Preferential pricing when the product is released</li>
            </ul>
          </Card>
          <Card>
            <h4>What we ask</h4>
            <ul className="ticks">
              <li>Daily use, instead of the register, not alongside it</li>
              <li>Half an hour with us in person once a fortnight</li>
              <li>Honesty when something is worse than what you had</li>
              <li>Permission to quote your results later, if you are happy</li>
            </ul>
          </Card>
        </div>
        <EnquiryForm
          send="whatsapp"
          style={{ maxWidth: '640px' }}
          submitLabel="Apply"
          footer={null}
        >
          <h4>Apply for a pilot slot</h4>
          <div className="field">
            <label htmlFor="p-name">Your name</label>
            {" "}
            <input type="text" id="p-name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="p-org">Gym name</label>
            {" "}
            <input type="text" id="p-org" name="org" />
          </div>
          <div className="field">
            <label htmlFor="p-email">Email</label>
            {" "}
            <input type="email" id="p-email" name="email" required />
          </div>
          <div className="field">
            <label htmlFor="p-phone">WhatsApp number</label>
            {" "}
            <input type="tel" id="p-phone" name="phone" />
          </div>
          <div className="field">
            <label htmlFor="p-message">
              Roughly how many active members, and how you keep records today
            </label>
            <textarea id="p-message" name="message" />
          </div>
          <input type="hidden" name="topic" defaultValue="GymDesk pilot" />
        </EnquiryForm>
      </Band>
    </>
  );
}
