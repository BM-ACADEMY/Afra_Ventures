import Band from './Band.jsx';

// Closing call-to-action strip. children = the buttons.
//   <CtaBand title="Have a problem worth solving?" text="Tell us what it costs you today.">
//     <Link className="btn btn-primary" to="/contact.html">Start a conversation</Link>
//   </CtaBand>
export default function CtaBand({ title, text, children }) {
  return (
    <Band tight className="cta-band" wrap="cta-inner">
      <div className="stack-sm">
        <h3>{title}</h3>
        <p className="muted small">{text}</p>
      </div>
      <div className="btn-row">{children}</div>
    </Band>
  );
}
