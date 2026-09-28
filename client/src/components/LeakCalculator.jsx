import { useState } from 'react';
import { inr } from '../lib/inr.js';
import { leak } from '../lib/leak.js';

// Sliders: same ids, labels, min/max/step and defaults as the original gymdesk.html.
const FIELDS = [
  { key: 'members', id: 'members', label: 'Active members', min: 30, max: 1200, step: 10, initial: 180, show: v => v },
  { key: 'fee', id: 'fee', label: 'Monthly fee', min: 400, max: 6000, step: 100, initial: 1200, show: inr },
  { key: 'lapsePct', id: 'lapse', label: 'Members who lapse in a year', min: 5, max: 70, step: 1, initial: 35, show: v => `${v}%` },
  { key: 'leads', id: 'leads', label: 'New enquiries a month', min: 5, max: 300, step: 5, initial: 40, show: v => v },
  { key: 'closePct', id: 'close', label: 'Enquiries you convert', min: 5, max: 80, step: 1, initial: 25, show: v => `${v}%` },
];

const DEFAULTS = Object.fromEntries(FIELDS.map(f => [f.key, f.initial]));

// Bar width relative to the larger loss, written the way the browser serialised
// it on the old site (e.g. "95.2381%").
const barWidth = (value, max) => `${+((value / max) * 100).toFixed(4)}%`;

// GymDesk revenue-leak calculator. Pre-rendered with the defaults, so the
// figures are in the HTML before JavaScript loads; the sliders update them live.
export default function LeakCalculator() {
  const [values, setValues] = useState(DEFAULTS);
  const r = leak(values);
  const max = Math.max(r.renewLoss, r.leadLoss, 1);

  return (
    <div className="calc" id="leakcalc">
      <div className="calc-inputs">
        <p className="eyebrow plain">Your gym</p>
        {FIELDS.map(f => (
          <div className="field" key={f.key}>
            <label htmlFor={`c-${f.id}`}>
              {f.label}{' '}
              <span className="val" id={`v-${f.id}`}>
                {f.show(values[f.key])}
              </span>
            </label>{' '}
            <input
              type="range"
              id={`c-${f.id}`}
              min={f.min}
              max={f.max}
              step={f.step}
              value={values[f.key]}
              onChange={e => setValues(v => ({ ...v, [f.key]: +e.target.value }))}
            />
          </div>
        ))}
      </div>
      <div className="calc-out">
        <div className="stack-sm">
          <p className="eyebrow plain">Estimated annual leak</p>
          <p className="bignum alert" id="o-total">
            {inr(r.total)}
          </p>
        </div>
        <div className="bars">
          <div className="bar-row">
            <span className="bar-label">Renewals</span>{' '}
            <span className="bar-track">
              <span className="bar-fill loss" id="b-renew" style={{ width: barWidth(r.renewLoss, max) }} />
            </span>{' '}
            <span className="bar-val" id="o-renew">
              {inr(r.renewLoss)}
            </span>
          </div>
          <div className="bar-row">
            <span className="bar-label">Enquiries</span>{' '}
            <span className="bar-track">
              <span className="bar-fill loss" id="b-lead" style={{ width: barWidth(r.leadLoss, max) }} />
            </span>{' '}
            <span className="bar-val" id="o-lead">
              {inr(r.leadLoss)}
            </span>
          </div>
        </div>
        <div className="stack-sm">
          <p className="eyebrow plain">Recover a third of it</p>
          <p className="bignum" id="o-recover">
            {inr(r.recover)}
          </p>
          <p className="outline-note">
            A third is what a disciplined reminder and follow-up routine tends to reach in the
            first year. It is the number we would hold ourselves to in a pilot.
          </p>
        </div>
      </div>
    </div>
  );
}
