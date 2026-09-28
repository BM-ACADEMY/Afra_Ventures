// Callout box: bold lead-in, then the body.
//   <Notice title="How this is calculated."><p>…</p></Notice>
export default function Notice({ title, children }) {
  return (
    <div className="notice">
      <b>{title}</b>
      {children}
    </div>
  );
}
