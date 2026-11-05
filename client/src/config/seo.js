// SEO meta titles and descriptions — the one file to edit for every page.
//
// Rules (Afra Ventures SEO brief), enforced by src/config/seo.test.js:
//   - title: 50–60 characters, primary keyword near the start, ends with "| Afra Ventures"
//   - description: 140–155 characters, one benefit plus a call to action
//   - every title and description unique
// The 404 and launch pages are noindex, so the length rules skip them.
//
// <Seo file="…"> reads the entry for its file; og:/twitter: tags copy these values.
// A page may still pass title/description props to override (draft pages do).

export const SEO = {
  'index.html': {
    title: 'Business Software Solutions in Puducherry | Afra Ventures',
    description:
      "Software that runs follow-ups, renewals and records for gyms, colleges and growing firms across Tamil Nadu and India. Tell us what breaks and we'll help.",
  },
  'products.html': {
    title: 'Business Management Software Products | Afra Ventures',
    description:
      'Compare our business management software for gyms, WhatsApp enquiries and campus placement, each labelled live, beta or in development. Find your fit.',
  },
  'gymdesk.html': {
    title: 'Gym Management Software India: GymDesk | Afra Ventures',
    description:
      'GymDesk tracks members, attendance and dues, and sends renewal reminders automatically so fewer members lapse. Now in beta. Apply for a free pilot.',
  },
  'nera.html': {
    title: 'WhatsApp Business Automation Software: Nera | Afra Ventures',
    description:
      "Nera is being built to answer WhatsApp enquiries in seconds and follow up on the official Business API, so leads don't go cold. Talk to us about it.",
  },
  'velai-vaaippu.html': {
    title: 'Recruitment & College Placement Software | Afra Ventures',
    description:
      'Velai Vaaippu gives employers assessed shortlists and placement cells one record for every student in Tamil Nadu and Puducherry. Live now. Start today.',
  },
  'technology.html': {
    title: 'Custom Software Development in Puducherry | Afra Ventures',
    description:
      'Custom software built on React, Node and PostgreSQL, hosted in India and maintained by the team that wrote it. Describe your project to get started.',
  },
  'partners.html': {
    title: 'Custom Business Applications & Partnerships | Afra Ventures',
    description:
      'Placement software and training for colleges, hiring support for employers and custom business applications in Tamil Nadu. Find the right way to start.',
  },
  'about.html': {
    title: 'Women-Led Software Company in Puducherry | Afra Ventures',
    description:
      'A women-led software product company in Puducherry with a 12-person team that designs, builds and supports its own products. Meet the people behind it.',
  },
  'insights.html': {
    title: 'Business Software Insights: Gyms, Colleges | Afra Ventures',
    description:
      'Practical notes on gym renewals, placement cell software and multi-brand bookkeeping, written for the people who run the work. Read the latest insights.',
  },
  'careers.html': {
    title: 'Software Jobs and Careers in Puducherry | Afra Ventures',
    description:
      'Open roles in full-stack development, product support and business development at our Puducherry office, with a clear two-week hiring process. Apply now.',
  },
  'contact.html': {
    title: 'Contact Us for Business Software Solutions | Afra Ventures',
    description:
      'Ask about a GymDesk pilot, a placement partnership or custom software. A person replies within one working day. Call, WhatsApp or send an enquiry today.',
  },
  'privacy.html': {
    title: 'Privacy Policy: How We Use Your Data | Afra Ventures',
    description:
      'What we collect through afraventures.in, why we use it, how long we keep it and how to have it corrected or deleted. Read the policy or write to us.',
  },
  'terms.html': {
    title: 'Website Terms of Use and Conditions | Afra Ventures',
    description:
      'The terms for using afraventures.in, covering accuracy of product information, permitted use, intellectual property and governing law. Read them here.',
  },
  'gym-membership-renewals.html': {
    title: 'Gym Membership Renewals: Why Members Lapse | Afra Ventures',
    description:
      'Most gyms lose more to silent non-renewal than to cancellations. Learn where the leak starts and a five-step routine you can run from tomorrow. Read on.',
  },
  'college-placement-software.html': {
    title: 'College Placement Software: What Cells Need | Afra Ventures',
    description:
      'The five things placement software must get right, from tracking each eligible student to producing the annual report. Read before choosing a vendor.',
  },
  'multi-brand-bookkeeping.html': {
    title: 'Multi-Brand Bookkeeping for Small Businesses | Afra Ventures',
    description:
      "Running several lines of business under one company? Four changes so each brand's numbers report for themselves, every month. Read the full guide.",
  },
  '404.html': {
    title: 'Page not found | Afra Ventures',
    description: 'That page does not exist on afraventures.in.',
  },
  'launch.html': {
    title: 'Afra Ventures Inauguration',
    description: 'Afra Ventures Pvt Ltd inauguration. A special invitation is waiting for you.',
  },
};

// Files the length rules skip (not indexed).
export const SEO_NOINDEX = ['404.html', 'launch.html'];
