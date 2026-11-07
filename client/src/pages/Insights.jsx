import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb } from '../lib/jsonld.js';

export default function Insights() {
  return (
    <>
      <Seo
        file="insights.html"
        jsonLd={[
          breadcrumb(["Insights", "insights.html"]),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Insights</p>
          <h1>Notes from building operational software.</h1>
          <p className="lede">
            Written for the people who run the businesses we build for, not for other software
            companies. No case studies until we have real ones.
          </p>
        </div>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          <Link className="post-link" to="/whatsapp-business-app-vs-api">
            <div className="stack-sm">
              <span className="idx">7 Nov 2026</span>
              {" "}
              <Chip stage="dev">WhatsApp</Chip>
            </div>
            <div className="stack-sm">
              <h3>WhatsApp Business app or the API: which one do your enquiries need?</h3>
              <p className="small muted">
                The free app is enough for many businesses. The signs you have outgrown it, what
                the official API changes, and how Meta charges for it per message.
              </p>
            </div>
          </Link>
          {" "}
          <Link className="post-link" to="/choosing-gym-management-software">
            <div className="stack-sm">
              <span className="idx">7 Nov 2026</span>
              {" "}
              <Chip stage="dev">Gyms</Chip>
            </div>
            <div className="stack-sm">
              <h3>How to choose gym management software in India</h3>
              <p className="small muted">
                A ten-point checklist built around the three places gyms actually lose money,
                plus the price questions to ask and how to run a fair two-week trial.
              </p>
            </div>
          </Link>
          {" "}
          <Link className="post-link" to="/gym-membership-renewals">
            <div className="stack-sm">
              <span className="idx">17 Sep 2026</span>
              {" "}
              <Chip stage="dev">Gyms</Chip>
            </div>
            <div className="stack-sm">
              <h3>Why gym memberships lapse quietly — and what to do about it</h3>
              <p className="small muted">
                Most gyms lose more revenue to silent non-renewal than to members who actually
                cancel. Where the leak starts, and a follow-up routine you can run from a notebook
                tomorrow morning.
              </p>
            </div>
          </Link>
          {" "}
          <Link className="post-link" to="/college-placement-software">
            <div className="stack-sm">
              <span className="idx">17 Sep 2026</span>
              {" "}
              <Chip stage="dev">Colleges</Chip>
            </div>
            <div className="stack-sm">
              <h3>What a college placement cell actually needs from software</h3>
              <p className="small muted">
                Placement cells are measured on a number their spreadsheets cannot produce. The
                five things placement software has to get right, from the cell's side of the desk.
              </p>
            </div>
          </Link>
          {" "}
          <Link className="post-link" to="/multi-brand-bookkeeping">
            <div className="stack-sm">
              <span className="idx">17 Sep 2026</span>
              {" "}
              <Chip stage="dev">Finance</Chip>
            </div>
            <div className="stack-sm">
              <h3>Running several brands on one set of books</h3>
              <p className="small muted">
                When one company runs a training arm, a catering line and a property desk, the
                group total hides what each of them is doing. How to structure records so every
                line reports for itself.
              </p>
            </div>
          </Link>
        </div>
      </Band>
      <CtaBand
        title="Want the next one?"
        text=" Write to us and we will send new notes as they are published. Nothing else. "
      >
        <Link className="btn btn-primary" to="/contact?topic=insights">Ask to be added</Link>
      </CtaBand>
    </>
  );
}
