import { Link } from 'react-router';
import Band from '../components/Band.jsx';
import { Card, Panel } from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Notice from '../components/Notice.jsx';
import Seo from '../components/Seo.jsx';
import { breadcrumb, softwareApp } from '../lib/jsonld.js';

export default function Nera() {
  return (
    <>
      <Seo
        file="nera.html"
        title="Nera — WhatsApp automation and customer messaging | Afra Ventures"
        description="Nera answers every WhatsApp enquiry in seconds, follows up with anyone who goes quiet, and runs campaigns on Meta-approved templates over the official WhatsApp Business API. In development."
        jsonLd={[
          breadcrumb(["Products", "products.html"], ["Nera", "nera.html"]),
          softwareApp({
            name: "Nera",
            file: "nera.html",
            category: "CommunicationApplication",
            description:
              "WhatsApp automation platform: answers every incoming message in seconds from a business knowledge base, runs follow-up sequences for enquiries that go quiet, and sends opt-in campaigns on Meta-approved templates over the official WhatsApp Business Cloud API.",
            releaseNotes: "In development — inbound reply and follow-up underway, outbound campaigns next.",
          }),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="stack">
            <p className="eyebrow">
              Product 02 ·{" "}
              <Chip stage="dev" style={{ marginLeft: '.2rem' }}>In development</Chip>
            </p>
            <h1>Nera</h1>
            <p className="lede">
              WhatsApp automation for businesses that lose customers to a slow reply. Every message
              answered in seconds, every enquiry followed up, every campaign sent on approved
              templates.
            </p>
            <div className="btn-row" style={{ marginTop: '.5rem' }}>
              <Link className="btn btn-primary" to="/contact.html?topic=nera">Talk to us about Nera</Link>
              {" "}
              <a className="btn btn-ghost" href="#what-it-is">How it works</a>
            </div>
            <p className="small muted" style={{ marginTop: '.5rem' }}>
              Nera is not open for general sale yet. This page exists so you can see where it is
              going and tell us if we have the problem wrong.
            </p>
          </div>
          <Panel head={["Build status", "Sep 2026"]}>
            <dl className="readout">
              <div>
                <dt>Stage</dt>
                <dd>In development, first deployments being scoped</dd>
              </div>
              <div>
                <dt>Two halves</dt>
                <dd>Inbound reply and follow-up · Outbound campaigns</dd>
              </div>
              <div>
                <dt>Channel</dt>
                <dd>WhatsApp Business Cloud API, official and approved</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React, Node, PostgreSQL, workflow engine</dd>
              </div>
              <div>
                <dt>Handover</dt>
                <dd>Any conversation can pass to a human at any point</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Not for general sale yet</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </section>
      <Band alt id="what-it-is" wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What it is</p>
          <h2>The person who always replies, and never forgets to follow up.</h2>
        </div>
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="prose">
            <p>
              Nera connects to your business WhatsApp number and does two jobs. Inbound, it
              answers every message that arrives — in seconds, at midnight, on a Sunday — using
              what it knows about your business, and keeps following up with people who went
              quiet. Outbound, it runs campaigns to your own customer lists on Meta-approved
              message templates.
            </p>
            <p>
              It is built on the{" "}
              <strong>official WhatsApp Business Cloud API</strong>
              , not on a phone in a drawer running an unofficial tool. That matters: the official
              route is the one that does not get your number banned, and it is the only way to
              send at any scale without losing the number your customers already have.
            </p>
            <p>
              A conversation can be handed to a person at any moment — by the customer asking, by
              your staff taking over, or by a rule you set. Nera is there to make sure nobody
              waits, not to keep humans out of the conversation.
            </p>
          </div>
          <Panel head={["In one line", "Per role"]}>
            <dl className="readout">
              <div>
                <dt>Owner</dt>
                <dd>Stops losing enquiries that arrived after closing time</dd>
              </div>
              <div>
                <dt>Sales staff</dt>
                <dd>Picks up warm conversations instead of cold-calling lists</dd>
              </div>
              <div>
                <dt>Marketing</dt>
                <dd>Runs campaigns on approved templates, without risking the number</dd>
              </div>
              <div>
                <dt>Customer</dt>
                <dd>Gets an answer immediately, and a person when they want one</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">The challenge it solves</p>
          <h2>Most leads are not lost. They are left waiting.</h2>
          <p className="prose">
            A business runs an advertisement, the enquiries come in on WhatsApp, and then the
            arithmetic goes wrong. Messages arrive at nine at night when the shop is shut. The one
            person who answers is also serving customers. Somebody replies to the first fifteen
            and never reaches the rest. And almost nobody goes back to the person who said "I will
            think about it" three weeks ago.
          </p>
          <p className="prose">
            So money is spent generating an enquiry, and then the enquiry{" "}
            <strong>expires waiting for a reply</strong>
            . The advertising is blamed. The advertising was fine.
          </p>
          <p className="prose">
            The outbound side fails differently. Sending offers to your own customers from a
            personal number is how numbers get reported and blocked — and when the number goes, so
            does every conversation history on it.
          </p>
        </div>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th scope="col">What goes wrong today</th>
                <th scope="col">Why it happens</th>
                <th scope="col">What Nera does about it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Enquiries wait hours for a reply</strong></td>
                <td>They arrive outside working hours, or during a rush</td>
                <td>Every message answered in seconds, all day, every day</td>
              </tr>
              <tr>
                <td><strong>Only the first few get answered</strong></td>
                <td>One person cannot hold twenty conversations at once</td>
                <td>Every conversation runs in parallel, none of them queued</td>
              </tr>
              <tr>
                <td><strong>Nobody follows up</strong></td>
                <td>"I'll think about it" has no date attached and no owner</td>
                <td>Follow-up sequences run on a schedule until the person replies or opts out</td>
              </tr>
              <tr>
                <td><strong>The same questions, endlessly</strong></td>
                <td>Price, timing, location, availability, asked by everybody</td>
                <td>Answered from your own business knowledge, consistently and correctly</td>
              </tr>
              <tr>
                <td><strong>Campaigns get the number banned</strong></td>
                <td>Sending offers in bulk from a personal WhatsApp number</td>
                <td>Official API, Meta-approved templates, opt-outs honoured automatically</td>
              </tr>
              <tr>
                <td><strong>No idea what any of it produced</strong></td>
                <td>Conversations live in a phone, not in a record</td>
                <td>Every conversation and campaign recorded, with outcomes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Band>
      <Band alt id="modules" wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">What is being built</p>
          <h2>Two halves, shipped in this order.</h2>
          <p className="prose">
            Inbound first, because answering the people who already contacted you is worth more
            than reaching new ones — and because it is the half that proves the assistant actually
            knows your business.
          </p>
        </div>
        <div className="ledger">
          <div className="ledger-row">
            <span className="idx">M1</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Inbound — reply and follow up</h3>
              <Chip stage="dev">Underway</Chip>
            </div>
            <p className="small muted">
              Every incoming message answered immediately from a knowledge base built out of your
              own services, prices and policies. Qualifying questions asked, details captured, and
              a follow-up sequence started for anyone who goes quiet. Handover to a person the
              moment the conversation needs one.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">M2</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Outbound — campaigns</h3>
              <Chip stage="dev">Next</Chip>
            </div>
            <p className="small muted">
              Campaigns to your own opted-in customer lists, on templates submitted to Meta for
              approval, sent at a controlled rate with opt-outs honoured automatically. Replies
              land back in the same inbox and are handled by the inbound side.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">M3</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Records and reporting</h3>
              <Chip stage="dev">After that</Chip>
            </div>
            <p className="small muted">
              Every conversation and campaign held as a record with its outcome, so you can see
              what a month of enquiries actually produced — how many were answered, how many were
              followed up, and how many turned into business.
            </p>
            <span className="tail" />
          </div>
        </div>
      </Band>
      <Band wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Design decisions</p>
          <h2>Four choices that shape the product.</h2>
        </div>
        <div className="grid grid-2">
          <Card>
            <h4>The official channel, always</h4>
            <p>
              Nera runs on the WhatsApp Business Cloud API with a verified business profile.
              Unofficial automation tools are cheaper and get numbers banned, which costs far more
              than the saving.
            </p>
          </Card>
          <Card>
            <h4>A person is never more than one message away</h4>
            <p>
              Any customer can ask for a human and get one. Your staff can take over a
              conversation mid-flow. The assistant is a first responder, not a wall.
            </p>
          </Card>
          <Card>
            <h4>It answers from your business, not from guesswork</h4>
            <p>
              The assistant works from a knowledge base of your actual services, prices and
              policies. Where it does not know, it says so and fetches a person, rather than
              inventing a price you then have to honour.
            </p>
          </Card>
          <Card>
            <h4>Follow-up is the product</h4>
            <p>
              Replying fast is the easy half. The money is in the third message, two weeks later,
              to somebody who went quiet — which is exactly the message a busy person never sends.
            </p>
          </Card>
        </div>
      </Band>
      <Band alt wrap="stack-lg">
        <div className="stack">
          <p className="eyebrow">Where AI sits</p>
          <h2>Two jobs, both worth it.</h2>
        </div>
        <div className="grid grid-2">
          <div className="feat">
            <div className="rule" />
            <h4>Understanding what was actually asked</h4>
            <p>
              Real messages arrive as "price ah", half in Tamil, with a voice note and a photo
              attached. The model works out what is being asked and answers it, rather than
              offering a menu of options nobody reads.
            </p>
          </div>
          <div className="feat">
            <div className="rule" />
            <h4>Knowing when to stop</h4>
            <p>
              Deciding that a conversation has moved past what it should handle — a complaint, a
              negotiation, an unusual request — and handing it to a person with the history
              attached, before it goes wrong.
            </p>
          </div>
        </div>
        <Notice title="How we handle messaging rules.">
          <p>
            Nera sends only to people who have opted in or have messaged you first, on templates
            Meta has approved, with opt-out honoured immediately and permanently. We will not
            build bulk sending to purchased or scraped lists. It gets numbers banned, it is
            against WhatsApp's own rules, and it does not work.
          </p>
        </Notice>
      </Band>
      <CtaBand
        title="Losing enquiries to a slow reply?"
        text=" Tell us how many messages you get in a week, and who answers them today. "
      >
        <Link className="btn btn-primary" to="/contact.html?topic=nera">Get in touch</Link>
        {" "}
        <Link className="btn btn-ghost" to="/products.html">Other products</Link>
      </CtaBand>
    </>
  );
}
