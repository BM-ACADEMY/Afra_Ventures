import { Link } from 'react-router';
import ArticleLayout from '../../components/ArticleLayout.jsx';

const META_PRICING = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing';

export default function WhatsAppAppVsApi() {
  return (
    <ArticleLayout
      file="whatsapp-business-app-vs-api.html"
      headline="WhatsApp Business app or the API: which one do your enquiries need?"
      summary="When the free WhatsApp Business app is enough, when a business needs the official WhatsApp Business Platform (API), and how Meta charges for it."
      crumb="WhatsApp app vs API"
      topic="WhatsApp"
      datePublished="2026-11-07"
      lede="Most small businesses start on the free WhatsApp Business app, and many should stay there. The useful question is not which one is better, but at what point the app stops keeping up with your enquiries."
      actions={
        <>
          <Link className="btn btn-primary" to="/nera">See Getnera</Link>
          {" "}
          <Link className="btn btn-ghost" to="/insights">More notes</Link>
        </>
      }
    >
      <p>
        For a gym, a clinic, a coaching centre or a property office, WhatsApp is where
        enquiries actually arrive. The first reply often decides whether the person visits,
        books or goes to the next name on their list. So the choice between the WhatsApp
        Business app and the WhatsApp Business Platform — usually just called the API — is
        really a choice about how reliably that first reply and the follow-up happen.
      </p>
      <h2>What the free app does well</h2>
      <p>
        The WhatsApp Business app is free and runs on an ordinary phone. It gives you a
        business profile, a product catalogue, labels for chats, quick replies, and greeting
        and away messages. You can open the same account on a few linked devices, so a laptop
        at the desk can share the work with the phone.
      </p>
      <p>
        For a business with one person answering messages and a manageable number of chats a
        day, that is often all you need.
      </p>
      <h2>Where the app runs out</h2>
      <ul>
        <li>
          <strong>Replies depend on someone being free.</strong> Away messages acknowledge an
          enquiry; they do not answer it. Messages that arrive at night or during a busy hour
          wait.
        </li>
        <li>
          <strong>No follow-up unless someone remembers.</strong> Nothing in the app reminds
          you that a person asked about prices on Tuesday and never replied.
        </li>
        <li>
          <strong>Broadcasts are small.</strong> A broadcast list holds up to 256 contacts and
          only reaches people who have saved your number.
        </li>
        <li>
          <strong>Nothing connects to your other records.</strong> Chats stay on the phone; they
          do not flow into a CRM, a booking system or a membership register.
        </li>
      </ul>
      <h2>What the API actually is</h2>
      <p>
        The WhatsApp Business Platform is Meta&apos;s official way for software to send and
        receive WhatsApp messages on a business number. It has no app of its own. You use it
        through software — a provider&apos;s inbox, a chatbot, or your own system — which is
        what makes the following possible:
      </p>
      <ul>
        <li>Many team members replying from one business number at the same time.</li>
        <li>Automatic answers to common questions, at any hour.</li>
        <li>Follow-up messages to people who went quiet, on a schedule you set.</li>
        <li>Messages to opted-in customers at scale, using templates Meta approves.</li>
        <li>Chats linked to your CRM, booking or billing records.</li>
      </ul>
      <h2>Side by side</h2>
      <div className="tablewrap">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Business app</th>
              <th scope="col">Business API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Cost</th>
              <td>Free</td>
              <td>Meta charges per template message, plus your provider&apos;s fee</td>
            </tr>
            <tr>
              <th scope="row">Replies</th>
              <td>One phone plus a few linked devices</td>
              <td>Any number of team members, plus automation</td>
            </tr>
            <tr>
              <th scope="row">Automation</th>
              <td>Greeting, away messages and quick replies</td>
              <td>Full automated replies and follow-up sequences</td>
            </tr>
            <tr>
              <th scope="row">Broadcasts</th>
              <td>Lists of up to 256 people who saved your number</td>
              <td>Approved templates to opted-in customers</td>
            </tr>
            <tr>
              <th scope="row">Integrations</th>
              <td>No</td>
              <td>Yes, through software</td>
            </tr>
            <tr>
              <th scope="row">Setup</th>
              <td>Install and register a number</td>
              <td>Meta business verification and a provider or developer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>What the API costs</h2>
      <p>
        Since 1 July 2025, Meta has charged per message rather than per conversation. As
        published on{" "}
        <a href={META_PRICING} target="_blank" rel="noopener noreferrer">Meta&apos;s pricing page</a>
        {" "}(checked November 2026):
      </p>
      <ul>
        <li>Messages your customers send you are never charged.</li>
        <li>
          When a customer messages you, a 24-hour window opens in which your ordinary replies
          are free.
        </li>
        <li>
          Outside that window you can only send pre-approved templates, charged by category
          (marketing, utility or authentication) and by country. Utility templates sent inside
          an open window are free.
        </li>
        <li>
          Enquiries from a Click-to-WhatsApp ad or a Facebook Page button open a 72-hour
          window in which every message is free, if you reply within 24 hours.
        </li>
      </ul>
      <p>
        Rates differ by country and change from time to time; Meta only updates them at the
        start of a quarter. Check the current rate card before you budget, and ask your
        provider what they charge on top.
      </p>
      <h2>Signs you have outgrown the app</h2>
      <ul>
        <li>Enquiries arriving at night or on Sundays wait until the next working day.</li>
        <li>More than one person needs to reply from the same number.</li>
        <li>People ask for a price, go quiet, and nobody follows up.</li>
        <li>You run Click-to-WhatsApp ads and pay for leads that get a slow first reply.</li>
        <li>You want chats to land in your CRM or booking records automatically.</li>
      </ul>
      <p>If none of these apply, stay on the free app. It is a good tool.</p>
      <blockquote>
        The cost of a slow reply rarely shows up anywhere. The enquiry simply goes to whoever
        answered first.
      </blockquote>
      <h2>One thing not to do</h2>
      <p>
        Unofficial &ldquo;bulk sender&rdquo; tools that automate an ordinary WhatsApp number
        are cheap and tempting. They break WhatsApp&apos;s rules and get numbers banned, which
        costs a business its whole chat history and every customer who saved that number. The
        same goes for sending to bought or scraped contact lists. Use the official platform,
        and message only people who have opted in or written to you first.
      </p>
      <h2>Moving from the app to the API</h2>
      <p>
        Moving a number to the API has traditionally meant giving up the app on it. Meta now
        supports running some numbers on both at once, through supported providers. Ask your
        provider whether this is available for your number before you switch, so the team can
        keep using the phone while automation takes over the routine replies.
      </p>
      <h2>Where Getnera fits</h2>
      <p>
        We are building{" "}
        <Link to="/nera">Getnera</Link>
        {" "}on the official WhatsApp Business Cloud API to do the two jobs the app cannot:
        answer every enquiry in seconds, and keep following up with people who went quiet. It
        is in development, not on general sale yet. If the signs above sound familiar,{" "}
        <Link to="/contact?topic=nera">tell us about your enquiries</Link>
        {" "}and we will tell you honestly whether you need it.
      </p>
    </ArticleLayout>
  );
}
