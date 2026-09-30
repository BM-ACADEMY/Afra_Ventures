import Band from '../../components/Band.jsx';
import Notice from '../../components/Notice.jsx';
import Seo from '../../components/Seo.jsx';

export default function Brands() {
  return (
    <>
      <Seo
        file="brands.html"
        title="Operating brands | Afra Ventures"
        description="The service brands operating under Afra Ventures Private Limited."
        noindex
      />
      <Band wrap="stack-lg">
        <Notice title="This page is built but not switched on — deliberately.">
          <p>
            Listing the older service brands here changes how the company reads. Confirm with your
            chartered accountant how the brand transfer into Afra Ventures is documented, and how
            it should be described, before linking this page from the navigation or indexing it.
            The technology positioning on the rest of the site does not depend on this page
            existing.
          </p>
        </Notice>
        <div className="stack">
          <p className="eyebrow">Operating brands</p>
          <h1>The service lines operating under Afra Ventures.</h1>
          <p className="lede">
            Alongside the software products, the company operates a set of established service
            brands. Each runs under its own name and its own team.
          </p>
        </div>
        <div className="ledger">
          <div className="ledger-row">
            <span className="idx">01</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>BM TechX</h3></div>
            <p className="small muted">
              Digital growth: websites and online stores, search optimisation, social media and
              paid campaigns, and WhatsApp automation for lead handling.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">02</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>Namma Pondy Properties</h3>
            </div>
            <p className="small muted">
              Real estate agency and advisory: property marketing, project marketing, and buyer
              and seller representation across Puducherry and the neighbouring districts.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">03</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>BM Academy</h3></div>
            <p className="small muted">
              Training and skill development: technology and employability courses, campus
              seminars, and soft skills programmes delivered with colleges.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">04</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>CoreTalents</h3></div>
            <p className="small muted">
              Recruitment and staffing for employers: sourcing, screening and delivery against an
              agreed fee and a written replacement guarantee.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">05</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>EduConsultants</h3></div>
            <p className="small muted">
              Education and career guidance for students choosing a course, a college or a next
              step after graduation.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">06</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>TravellersNeed</h3></div>
            <p className="small muted">
              Travel and tourism: Pondicherry-first holiday packages, accommodation and transport
              arrangement, booked and served over WhatsApp.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">07</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>Dada's Kitchen</h3></div>
            <p className="small muted">
              Catering and hospitality: event, corporate and institutional catering, with food
              safety registration in place.
            </p>
            <span className="tail" />
          </div>
          <div className="ledger-row">
            <span className="idx">08</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}><h3>ThePlotOne</h3></div>
            <p className="small muted">
              [ ] One line describing this brand. Confirm the description before this page goes
              live.
            </p>
            <span className="tail" />
          </div>
        </div>
        <p className="small muted" style={{ maxWidth: '66ch' }}>
          All of these activities fall within the company's objects as filed at incorporation:
          information technology and digital services, education, training and recruitment,
          travel, catering, real estate agency and management consultancy.
        </p>
      </Band>
    </>
  );
}
