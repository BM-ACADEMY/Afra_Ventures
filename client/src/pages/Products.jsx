import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Seo from '../components/Seo.jsx';
import StageFilter from '../components/StageFilter.jsx';
import { breadcrumb } from '../lib/jsonld.js';

// Product rows, filtered by stage in <StageFilter>.
const PRODUCTS = [
  {
    stage: 'beta',
    to: '/gymdesk',
    idx: '01',
    name: 'GymDesk',
    chip: 'Beta · in testing',
    text: 'Gym management software covering members, attendance, plans and packages and payments — with renewal reminders and enquiry follow-up that send automatically, and AI-assisted workout and diet plans. Separate roles for the platform administrator, gym owner, branch sub-admin and member. We are selecting pilot gyms now.',
  },
  {
    stage: 'dev',
    to: '/nera',
    idx: '02',
    name: 'Nera',
    chip: 'In development',
    text: 'WhatsApp automation for businesses that lose customers to a slow reply. Answers every incoming message in seconds, runs follow-up sequences for anyone who goes quiet, and sends campaigns on Meta-approved templates over the official API. Built in two halves, inbound first.',
  },
  {
    stage: 'live',
    to: '/velai-vaaippu',
    idx: '03',
    name: 'Velai Vaaippu',
    chip: 'Live',
    text: 'A jobs platform serving job seekers, employer companies and college placement cells. Free skill assessment, resume builder and job matching for seekers and students; placement tracking, company invitations and drive management for colleges; assessed shortlists for employers. Paid plans for colleges and for employers hiring at volume.',
  },
];

export default function Products() {
  return (
    <>
      <Seo
        file="products.html"
        title="Products | Afra Ventures"
        description="GymDesk for gym operations, Nera for WhatsApp automation, and Velai Vaaippu for jobs and campus placement. Each product listed with its real development stage."
        jsonLd={[
          breadcrumb(["Products", "products.html"]),
        ]}
      />
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Products</p>
          <h1>What we have built, and how far along each one is.</h1>
          <p className="lede">
            Three products, three different stages. The label on each is the one we would give you
            on the phone.
          </p>
        </div>
        <StageFilter rows={PRODUCTS} />
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Side by side</p>
          <h2>Which product is for you.</h2>
        </div>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Built for</th>
                <th scope="col">Core job</th>
                <th scope="col">Stage</th>
                <th scope="col">How to start</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GymDesk</strong></td>
                <td>Gyms, fitness studios, small chains</td>
                <td>Keep members and collect on time, automatically</td>
                <td>Beta</td>
                <td><Link to="/gymdesk">Join the pilot</Link></td>
              </tr>
              <tr>
                <td><strong>Nera</strong></td>
                <td>Any business taking enquiries on WhatsApp</td>
                <td>Reply in seconds and follow up without fail</td>
                <td>In development</td>
                <td><Link to="/nera">Follow the build</Link></td>
              </tr>
              <tr>
                <td><strong>Velai Vaaippu</strong></td>
                <td>Job seekers, students, employers, college placement cells</td>
                <td>Assess skills, fill openings, prove placement numbers</td>
                <td>Live</td>
                <td><Link to="/velai-vaaippu">Use it today</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What the labels mean</p>
          <h2>Live, beta, in development.</h2>
          <p className="prose">
            These three words do a lot of work on this site, so here is exactly what we mean by
            each of them.
          </p>
        </div>
        <div className="grid grid-3">
          <Card>
            <Chip stage="live" style={{ alignSelf: 'flex-start' }}>Live</Chip>
            <h4>You can use it now</h4>
            <p>
              The product is in production, people outside our team use it, and it is supported.
              Sign up and start.
            </p>
          </Card>
          <Card>
            <Chip stage="beta" style={{ alignSelf: 'flex-start' }}>Beta</Chip>
            <h4>Built, being tested</h4>
            <p>
              Every screen works and the product does the job end to end, but it has not yet run a
              full year of real operations. Pilot customers get it free and get our attention in
              return.
            </p>
          </Card>
          <Card>
            <Chip stage="dev" style={{ alignSelf: 'flex-start' }}>In development</Chip>
            <h4>Still being written</h4>
            <p>
              The design is settled and the code is underway. Nothing to sell yet. We publish it
              here so you can see the direction and tell us if we have it wrong.
            </p>
          </Card>
        </div>
      </Band>
      <CtaBand
        title="Need something none of these does?"
        text=" We take on custom product engineering when the problem is a real one. "
      >
        <Link className="btn btn-primary" to="/contact">Tell us about it</Link>
        {" "}
        <Link className="btn btn-ghost" to="/technology">How we build</Link>
      </CtaBand>
    </>
  );
}
