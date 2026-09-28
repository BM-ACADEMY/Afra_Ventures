// FAQ list. The same items array also feeds the FAQPage JSON-LD through
// faqPage(items) in the page's <Seo>, so the visible text and the structured
// data can never drift apart.
//
// items: [{ q, a }], with plain-text answers (they go into JSON-LD as-is).
export default function Faq({ items, className = 'faq', openFirst = true }) {
  return (
    <div className={className}>
      {items.map(({ q, a }, i) => (
        <details key={q} open={openFirst && i === 0}>
          <summary>{q}</summary>
          <div className="faq-body">
            <p>{a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
