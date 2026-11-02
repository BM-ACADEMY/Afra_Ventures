// JSON-LD builders. Output matches the structured data on the static site.
import { urlPath } from '../config/pages.js';
import { SITE } from '../config/site.js';

const ORG_ID = `${SITE.url}/#organization`;
const pageUrl = file => SITE.url + urlPath(file);
const ctx = type => ({ '@context': 'https://schema.org', '@type': type });

export const organization = () => ({
  '@context': 'https://schema.org',
  // ProfessionalService is a LocalBusiness subtype: lets Google tie the
  // company to its Puducherry office for local search.
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: `${SITE.url}/`,
  email: SITE.email,
  telephone: SITE.phoneTel,
  foundingDate: SITE.foundingDate,
  description: SITE.description,
  identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: SITE.cin },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Puducherry' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Software as a service',
    'Custom software development',
    'Gym management software',
    'Campus placement software',
    'Skill assessment',
    'WhatsApp business automation',
    'Business automation',
    'Artificial intelligence',
  ],
});

// Home only.
export const website = () => ({
  ...ctx('WebSite'),
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  publisher: { '@id': ORG_ID },
});

// breadcrumb(['Products', 'products.html'], ['GymDesk', 'gymdesk.html']) → Home › Products › GymDesk
export const breadcrumb = (...trail) => ({
  ...ctx('BreadcrumbList'),
  itemListElement: [['Home', 'index.html'], ...trail].map(([name, file], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: pageUrl(file),
  })),
});

// items: [{ q, a }] — plain-text answers.
export const faqPage = items => ({
  ...ctx('FAQPage'),
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const softwareApp = ({ name, file, category, description, releaseNotes }) => ({
  ...ctx('SoftwareApplication'),
  name,
  url: pageUrl(file),
  applicationCategory: category,
  operatingSystem: 'Web browser',
  description,
  releaseNotes,
  publisher: { '@id': ORG_ID },
});

export const article = ({ headline, description, file, datePublished, dateModified }) => ({
  ...ctx('Article'),
  headline,
  description,
  url: pageUrl(file),
  datePublished,
  dateModified,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  mainEntityOfPage: pageUrl(file),
});

export const contactPage = file => ({
  ...ctx('ContactPage'),
  url: pageUrl(file),
  about: { '@id': ORG_ID },
});
