import { useState } from 'react';
import { Link } from 'react-router';
import Chip from './Chip.jsx';

const STAGES = [
  ['all', 'All'],
  ['live', 'Live'],
  ['beta', 'Beta'],
  ['dev', 'In development'],
];

// Stage filter buttons + product ledger. Pre-rendered with every row visible.
// rows: [{ stage: 'live' | 'beta' | 'dev', to, idx, name, chip, text }]
export default function StageFilter({ rows }) {
  const [stage, setStage] = useState('all');

  return (
    <>
      <div className="btn-row" id="stagefilter" role="group" aria-label="Filter products by stage">
        {STAGES.map(([value, label]) => {
          const active = stage === value;
          return (
            <button
              key={value}
              type="button"
              className={active ? 'btn btn-primary' : 'btn btn-ghost'}
              aria-pressed={active}
              onClick={() => setStage(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="ledger">
        {rows.map(p => (
          <Link
            key={p.to}
            className="ledger-row"
            to={p.to}
            hidden={!(stage === 'all' || stage === p.stage)}
          >
            <span className="idx">{p.idx}</span>
            <div className="stack-sm" style={{ alignItems: 'flex-start' }}>
              <h3>{p.name}</h3>
              <Chip stage={p.stage}>{p.chip}</Chip>
            </div>
            <p className="small muted">{p.text}</p>
            <span className="tail">
              <span className="arrow" aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
