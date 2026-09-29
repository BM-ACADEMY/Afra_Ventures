// Decorative wave image behind the Home hero (and the header above it).
// ⚠ This image appears to be Stripe's own hero artwork. Get permission before
// publishing it, or switch back to Afra's original artwork: in Home.jsx, import
// HeroRibbonSilk from '../components/HeroRibbonSilk.jsx' and render <HeroRibbonSilk />.
import wave from '../assets/wave-fallback-desktop-1x.fba6fa88.webp';

export default function HeroRibbon() {
  return (
    <div className="hero-ribbon" aria-hidden="true">
      <img className="hero-wave" src={wave} alt="" width="1392" height="975" decoding="async" />
    </div>
  );
}
