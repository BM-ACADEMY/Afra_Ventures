import { useState } from 'react';
import { Link } from 'react-router';
import { SITE } from '../config/site.js';
import { fallbackUrl, readForm } from '../lib/enquiry.js';

const TOPICS = [
  ['gymdesk', 'GymDesk pilot'],
  ['colleges', 'College or placement cell'],
  ['hiring', 'Hiring and recruitment'],
  ['nera', 'Nera — WhatsApp automation'],
  ['custom', 'Custom software'],
  ['institutional', 'Institutional or public sector'],
  ['careers', 'A job with you'],
  ['other', 'Something else'],
];

// The contact page fields, as on the original site.
function ContactFields() {
  return (
    <>
      <div className="field">
        <label htmlFor="f-name">Your name</label>{' '}
        <input type="text" id="f-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-org">Organisation</label>{' '}
        <input type="text" id="f-org" name="org" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>{' '}
        <input type="email" id="f-email" name="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Phone or WhatsApp</label>{' '}
        <input type="tel" id="f-phone" name="phone" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="f-topic">What is this about</label>
        <select id="f-topic" name="topic" defaultValue="other">
          {TOPICS.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-message">What is going wrong today</label>
        <textarea
          id="f-message"
          name="message"
          placeholder="The more specific, the more useful our first reply will be."
        />
      </div>
    </>
  );
}

const CONTACT_FOOTER = (
  <p className="small muted">
    We use what you send here only to reply to you. See our{' '}
    <Link to="/privacy.html">privacy policy</Link>.
  </p>
);

// Status line text for each state. 'idle' shows nothing.
const STATUS = {
  missing: { text: 'Add your name and email so we can reply.', color: 'var(--accent)' },
  handedOff: {
    text: 'Your email app should now be open with the enquiry filled in. Send it and we will reply within one working day.',
    color: 'var(--ok)',
  },
  sending: { text: 'Sending…' },
  sent: {
    text: 'Thanks — we have your enquiry and will reply within one working day.',
    color: 'var(--ok)',
  },
  error: { text: `That did not send. Please email ${SITE.email} instead.`, color: 'var(--accent)' },
};

// Spam trap: invisible to people and screen readers, skipped by the Tab key,
// but bots that fill every field fill this one too.
const HONEYPOT = 'company_website';

// Enquiry form. With no children it renders the contact page fields; a page
// can pass its own fields (children), submit label and footer instead.
//   <EnquiryForm send="email" />
//   send: 'email' (default) | 'whatsapp' — where the fallback hands the enquiry.
//
// With a form service configured (VITE_FORM_ENDPOINT) the enquiry is POSTed
// as JSON: idle → sending → sent | error. Only a 2xx response counts as sent;
// anything else keeps the visitor's text in the form and says so.
// Without one, it is handed to the visitor's email app or WhatsApp.
export default function EnquiryForm({
  send = 'email',
  endpoint = SITE.formEndpoint,
  style = { gap: '1.1rem' },
  submitLabel = 'Send enquiry',
  footer = CONTACT_FOOTER,
  children = <ContactFields />,
}) {
  const [state, setState] = useState('idle');
  const status = STATUS[state];

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const { [HONEYPOT]: trap, ...data } = readForm(form);

    // Honeypot filled → a bot. Pretend it worked; send nothing.
    if (trap) {
      if (endpoint) {
        setState('sent');
        form.reset();
      } else {
        setState('handedOff');
      }
      return;
    }

    if (!data.name || !data.email) {
      setState('missing');
      return;
    }

    if (endpoint) {
      setState('sending');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setState('sent');
        form.reset();
      } catch {
        setState('error');
      }
      return;
    }

    const url = fallbackUrl(send, data);
    if (send === 'whatsapp') window.open(url, '_blank');
    else window.location.href = url;
    setState('handedOff');
  }

  return (
    <form className="card" style={style} onSubmit={onSubmit}>
      {children}
      <input
        type="text"
        name={HONEYPOT}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />
      <button
        className="btn btn-primary"
        type="submit"
        style={{ alignSelf: 'flex-start' }}
        disabled={state === 'sending'}
      >
        {submitLabel}
      </button>
      <p
        className="small"
        role="status"
        aria-live="polite"
        style={status?.color ? { color: status.color } : undefined}
      >
        {status?.text}
      </p>
      {footer}
    </form>
  );
}
