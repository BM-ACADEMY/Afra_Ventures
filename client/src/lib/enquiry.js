// Enquiry composition, shared by <EnquiryForm>. Same subject/body format as
// the original site.js.
import { SITE } from '../config/site.js';

// All named fields of a form, trimmed: { name, org, email, phone, topic, message, … }
export function readForm(form) {
  const data = {};
  for (const [key, value] of new FormData(form)) {
    if (typeof value === 'string') data[key] = value.trim();
  }
  return data;
}

export function composeEnquiry(data) {
  const subject = `Website enquiry — ${data.topic || 'General'} — ${data.name}`;
  const body =
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || '-'}\n` +
    `Organisation: ${data.org || '-'}\n` +
    `Topic: ${data.topic || '-'}\n\n` +
    (data.message || '');
  return { subject, body };
}

// Fallback when no form service is configured: hand the enquiry to the
// visitor's email app or to WhatsApp, so nothing is silently lost.
export function fallbackUrl(send, data) {
  const { subject, body } = composeEnquiry(data);
  if (send === 'whatsapp') {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(subject + '\n\n' + body)}`;
  }
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
