// Rupee formatting in Indian digit grouping: 885600 → "₹8,85,600".
export function inr(n) {
  const rounded = Math.round(n);
  try {
    return '₹' + rounded.toLocaleString('en-IN');
  } catch {
    // Very old browsers without Intl support: plain digits.
    return '₹' + rounded;
  }
}
