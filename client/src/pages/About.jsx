import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Seo from '../components/Seo.jsx';
import { SITE } from '../config/site.js';
import { breadcrumb } from '../lib/jsonld.js';

export default function About() {
  return (
    <>
      <Seo
        file="about.html"
        title="About Afra Ventures | Women-led software company in Puducherry"
        description={`${SITE.legalName}, CIN ${SITE.cin}, incorporated 12 September 2026 in Puducherry. Women-led, product-first, with a twelve-person team.`}
        jsonLd={[
          breadcrumb(["About", "about.html"]),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="stack">
            <p className="eyebrow">About</p>
            <h1>A women-led product company, twelve people, one office in Puducherry.</h1>
            <p className="lede">
              Afra Ventures Private Limited was incorporated on 12 September 2026 to do one thing
              properly: build and run software products.
            </p>
          </div>
          <Panel head={["Company record", "MCA / India"]}>
            <dl className="readout">
              <div>
                <dt>Legal name</dt>
                <dd>Afra Ventures Private Limited</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{SITE.cin}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>Private company limited by shares</dd>
              </div>
              <div>
                <dt>Incorporated</dt>
                <dd>12 September 2026</dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>{SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}, India</dd>
              </div>
              <div>
                <dt>Authorised capital</dt>
                <dd>₹15,00,000</dd>
              </div>
              <div>
                <dt>Directors</dt>
                <dd>Affrin Sara Abdul Azees · Mariam Beevi</dd>
              </div>
              <div>
                <dt>Ownership</dt>
                <dd>Majority held by women</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </section>
      <Band alt wrap="stack-lg">
        <div className="stack narrow">
          <p className="eyebrow">Why the company exists</p>
          <h2>The tools never arrived here.</h2>
          <div className="prose">
            <p>
              Puducherry and the districts around it are full of businesses that work hard and
              keep records badly — not out of carelessness, but because nothing on the market was
              built for them. Gym software assumes a chain. Accounting software assumes one
              business. Placement software assumes a campus with a dedicated technology
              department. What is left is a register, a chat group and a good memory.
            </p>
            <p>
              Our team spent years building digital work for businesses like these, one project at
              a time. The pattern in the complaints was always the same, and always operational:
              {" "}
              <strong>somebody forgot to follow up</strong>
              . Afra Ventures exists to turn that pattern into products instead of projects —
              software that many businesses can use, priced so that a single-branch gym in
              Cuddalore can afford it.
            </p>
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">How the company is set up</p>
          <h2>Structure, stated plainly.</h2>
        </div>
        <div className="grid grid-3">
          <Card>
            <h4>Women-led by design</h4>
            <p>
              Both directorships and the majority shareholding are held by women. That was the
              structure at incorporation, not something arranged afterwards.
            </p>
          </Card>
          <Card>
            <h4>Product first</h4>
            <p>
              The company is built around software products it owns and operates. Service work is
              taken on where it strengthens a product or funds one, not as the main business.
            </p>
          </Card>
          <Card>
            <h4>One office, no outsourcing</h4>
            <p>
              Design, engineering, support and sales sit in the same room in Puducherry. Nothing
              is subcontracted to somebody the customer cannot reach.
            </p>
          </Card>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Leadership</p>
          <h2>Who is responsible.</h2>
        </div>
        <div className="grid grid-3">
          <div className="person">
            <p className="role">Director</p>
            <h4>Affrin Sara Abdul Azees</h4>
            <p>
              Holds the majority shareholding and carries statutory responsibility for the company
              alongside the second director.
            </p>
          </div>
          <div className="person">
            <p className="role">Director</p>
            <h4>Mariam Beevi</h4>
            <p>Second director, appointed at incorporation, with shareholding in the company.</p>
          </div>
          <div className="person">
            <p className="role">Strategic advisor</p>
            <h4>Mohamed Kamarudeen B</h4>
            <p>
              Advises the company on growth, partnerships and sales, and acts as authorised
              signatory. Holds no shareholding and no directorship.
            </p>
          </div>
        </div>
        <p className="small muted">
          The engineering, support and sales team is twelve people, based at the Puducherry
          office.{" "}
          <Link to="/careers">We are hiring.</Link>
        </p>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What we do and do not do</p>
          <h2>Scope, so nobody is surprised.</h2>
        </div>
        <div className="grid grid-2">
          <div className="stack">
            <h4>We do</h4>
            <ul className="ticks">
              <li>Build, license and operate our own SaaS products</li>
              <li>Take on custom software for businesses and institutions</li>
              <li>Run digital marketing, branding and web work for clients</li>
              <li>Deliver training, skill development and career services</li>
              <li>Provide recruitment, staffing and campus placement services</li>
            </ul>
          </div>
          <div className="stack">
            <h4>We do not</h4>
            <ul className="ticks">
              <li>Resell somebody else's platform with our name on it</li>
              <li>Promise a placement, a ranking or a revenue outcome</li>
              <li>Publish a customer's name or numbers without written permission</li>
              <li>Describe a product as finished before it is</li>
            </ul>
          </div>
        </div>
        <p className="small muted" style={{ maxWidth: '66ch' }}>
          The company's objects, as filed, also cover travel and tourism services, catering and
          hospitality, real estate agency and advisory, and management consultancy. Where those
          lines are active they are operated as separate brands.
        </p>
      </Band>
      <CtaBand
        title="Want to work with us, or for us?"
        text="Both conversations start the same way."
      >
        <Link className="btn btn-primary" to="/contact">Get in touch</Link>
        {" "}
        <Link className="btn btn-ghost" to="/careers">Open roles</Link>
      </CtaBand>
    </>
  );
}
