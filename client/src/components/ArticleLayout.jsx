import { Link } from 'react-router';
import Band from './Band.jsx';
import Seo from './Seo.jsx';
import { article, breadcrumb } from '../lib/jsonld.js';

// "2026-09-17" → "17 September 2026" (fixed locale and time zone, so the
// pre-rendered HTML and the browser always agree).
const longDate = iso =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

// Layout for an Insights article: <Seo> with og:type=article, breadcrumb
// (Home › Insights › crumb) and Article JSON-LD, the header band, the .article
// body (children) and the closing button row (actions).
export default function ArticleLayout({
  file,
  headline,
  title = headline, // <title>; the live articles use the headline
  description, // meta description
  summary, // shorter Article JSON-LD description
  crumb, // short name for the breadcrumb
  topic, // eyebrow label, e.g. "Gyms"
  datePublished,
  dateModified = datePublished,
  lede,
  actions,
  children,
}) {
  return (
    <>
      <Seo
        file={file}
        title={title}
        description={description}
        type="article"
        jsonLd={[
          breadcrumb(['Insights', 'insights.html'], [crumb, file]),
          article({ headline, description: summary, file, datePublished, dateModified }),
        ]}
      />
      <Band>
        <div className="stack" style={{ maxWidth: '68ch' }}>
          <p className="eyebrow">
            <Link to="/insights" style={{ color: 'inherit', textDecoration: 'none' }}>
              Insights
            </Link>{' '}
            · {topic} · {longDate(datePublished)}
          </p>
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>{headline}</h1>
          <p className="lede" style={{ maxWidth: 'none' }}>
            {lede}
          </p>
        </div>
      </Band>
      <Band alt>
        <div className="article">{children}</div>
        <div className="btn-row" style={{ marginTop: '2rem' }}>
          {actions}
        </div>
      </Band>
    </>
  );
}
