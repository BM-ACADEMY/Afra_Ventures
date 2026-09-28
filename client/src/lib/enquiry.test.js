import { describe, expect, test } from 'vitest';
import { SITE } from '../config/site.js';
import { composeEnquiry, fallbackUrl } from './enquiry.js';

// The original site.js logic, copied verbatim (ES5), as the reference.
function original(data, choice, CONTACT_EMAIL, CONTACT_WA) {
  var subject = 'Website enquiry — ' + (data.topic || 'General') + ' — ' + data.name;
  var body =
    'Name: ' + data.name + '\n' +
    'Email: ' + data.email + '\n' +
    'Phone: ' + (data.phone || '-') + '\n' +
    'Organisation: ' + (data.org || '-') + '\n' +
    'Topic: ' + (data.topic || '-') + '\n\n' +
    (data.message || '');
  if (choice === 'whatsapp') {
    return { subject, body, url: 'https://wa.me/' + CONTACT_WA + '?text=' + encodeURIComponent(subject + '\n\n' + body) };
  }
  return {
    subject,
    body,
    url: 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body),
  };
}

const CASES = {
  'every field filled': {
    name: 'Priya S',
    org: 'Iron Temple Gym',
    email: 'priya@example.com',
    phone: '+91 90000 00000',
    topic: 'gymdesk',
    message: 'We lose renewals.\nTwo branches & 400 members — help?',
  },
  'only the required fields': { name: 'Ravi', email: 'ravi@example.com' },
  'Tamil text and symbols': {
    name: 'அருண்',
    email: 'arun@example.com',
    topic: 'other',
    message: 'வேலை வாய்ப்பு? 100% ₹ #1 + / ?=&',
  },
};

describe('matches the original site.js enquiry format', () => {
  for (const [name, data] of Object.entries(CASES)) {
    for (const send of ['email', 'whatsapp']) {
      test(`${name} → ${send}`, () => {
        const ref = original(data, send, SITE.email, SITE.whatsapp);
        const { subject, body } = composeEnquiry(data);
        expect(subject).toBe(ref.subject);
        expect(body).toBe(ref.body);
        expect(fallbackUrl(send, data)).toBe(ref.url);
      });
    }
  }
});

test('email goes to SITE.email, WhatsApp to SITE.whatsapp', () => {
  const data = CASES['only the required fields'];
  expect(fallbackUrl('email', data)).toMatch(new RegExp(`^mailto:${SITE.email}\\?subject=`));
  expect(fallbackUrl('whatsapp', data)).toMatch(new RegExp(`^https://wa\\.me/${SITE.whatsapp}\\?text=`));
});
