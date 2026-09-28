// Content card: <div class="card">. className adds extra classes.
export function Card({ className, style, children }) {
  return (
    <div className={className ? `card ${className}` : 'card'} style={style}>
      {children}
    </div>
  );
}

// Record panel with a two-part header:
//   <Panel head={['Company record', 'MCA / India']}>…</Panel>
export function Panel({ head, children }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{head[0]}</span>
        <span>{head[1]}</span>
      </div>
      {children}
    </div>
  );
}
