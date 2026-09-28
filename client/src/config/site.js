// Single source of truth for company and contact details.
// Every page, the footer, the enquiry form and the JSON-LD read from here.

export const SITE = {
  name: 'Afra Ventures',
  legalName: 'Afra Ventures Private Limited',
  url: 'https://afraventures.in',
  email: 'hello@afraventures.in', // ⚠ placeholder — confirm
  phoneDisplay: '+91 99449 40051', // ⚠ placeholder — confirm
  phoneTel: '+919944940051', // ⚠ placeholder — confirm
  whatsapp: '919944940051', // ⚠ placeholder — confirm
  cin: 'U62011PY2026PTC009819',
  foundingDate: '2026-09-12',
  description:
    'Afra Ventures is a women-led software product company in Puducherry, India, building SaaS platforms and AI-assisted tools for gyms, colleges, recruiters and small businesses.',
  address: {
    street: '78 Lenin Street, Kosapalayam',
    locality: 'Puducherry',
    region: 'Puducherry',
    postalCode: '605013',
    country: 'IN',
  },
  // Share image for WhatsApp / LinkedIn previews (1200 × 630, public/og-default.png).
  // Empty string = no og:image tag.
  ogImage: '/og-default.png',
  // Hosted form service URL (Formspree / Web3Forms). Empty = mailto / WhatsApp fallback.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
