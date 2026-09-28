// GymDesk revenue-leak estimate. Same formulas, in the same order of
// operations, as the original static site's site.js, so the rupee figures match.
//
//   members   active members
//   fee       monthly fee (₹)
//   lapsePct  members who lapse in a year (%)
//   leads     new enquiries a month
//   closePct  enquiries converted (%)
export function leak({ members, fee, lapsePct, leads, closePct }) {
  // Renewals that lapse without a follow-up. Each lapsed member is counted as
  // the remaining months of a 12-month relationship, valued conservatively at
  // 6 months of fees.
  const renewLoss = members * (lapsePct / 100) * fee * 6;

  // Enquiries that never get a second contact. Half of the enquiries that were
  // never followed up would have closed at the gym's own close rate.
  const leadLoss = leads * 12 * 0.5 * (closePct / 100) * fee * 6;

  const total = renewLoss + leadLoss;
  // "Recover a third of it": what a disciplined reminder routine tends to reach in year one.
  return { renewLoss, leadLoss, total, recover: total * 0.3 };
}
