import { describe, expect, test } from 'vitest';
import { inr } from './inr.js';
import { leak } from './leak.js';

// Recorded from the live static gymdesk.html (original site.js) by setting the
// sliders in a browser and reading the figures it displayed.
const RECORDED = [
  {
    name: 'defaults',
    inputs: { members: 180, fee: 1200, lapsePct: 35, leads: 40, closePct: 25 },
    shown: { total: '₹8,85,600', renewLoss: '₹4,53,600', leadLoss: '₹4,32,000', recover: '₹2,65,680' },
  },
  {
    name: 'small gym',
    inputs: { members: 80, fee: 800, lapsePct: 20, leads: 15, closePct: 10 },
    shown: { total: '₹1,20,000', renewLoss: '₹76,800', leadLoss: '₹43,200', recover: '₹36,000' },
  },
  {
    name: 'large gym',
    inputs: { members: 950, fee: 3500, lapsePct: 48, leads: 220, closePct: 60 },
    shown: {
      total: '₹2,62,08,000',
      renewLoss: '₹95,76,000',
      leadLoss: '₹1,66,32,000',
      recover: '₹78,62,400',
    },
  },
  {
    name: 'all sliders at minimum',
    inputs: { members: 30, fee: 400, lapsePct: 5, leads: 5, closePct: 5 },
    shown: { total: '₹7,200', renewLoss: '₹3,600', leadLoss: '₹3,600', recover: '₹2,160' },
  },
];

describe('leak() matches the live calculator', () => {
  for (const { name, inputs, shown } of RECORDED) {
    test(name, () => {
      const r = leak(inputs);
      expect({
        total: inr(r.total),
        renewLoss: inr(r.renewLoss),
        leadLoss: inr(r.leadLoss),
        recover: inr(r.recover),
      }).toEqual(shown);
    });
  }
});

describe('inr()', () => {
  test('uses Indian digit grouping', () => {
    expect(inr(1200)).toBe('₹1,200');
    expect(inr(885600)).toBe('₹8,85,600');
    expect(inr(26208000)).toBe('₹2,62,08,000');
  });

  test('rounds to whole rupees', () => {
    expect(inr(265679.6)).toBe('₹2,65,680');
    expect(inr(0.4)).toBe('₹0');
  });
});
