// Decorative flowing-lines artwork behind the Home hero (and the header above it).
// Source: src/assets/flowlines.png (Afra's own generated artwork); the site uses
// the web-optimised copy flowlines.webp (1200 × 841). Hidden from screen readers.
// Animated in site.css: the artwork drifts slowly, and a band of light (the
// sheen, clipped to the artwork's shape via --wave) travels along the lines.
import flowlines from '../assets/flowlines.webp';

export default function HeroRibbon() {
  return (
    <div className="hero-ribbon" aria-hidden="true">
      <div className="hero-wave" style={{ '--wave': `url(${flowlines})` }}>
        <img src={flowlines} alt="" width="1200" height="841" decoding="async" />
        <span className="hero-wave-sheen" />
      </div>
    </div>
  );
}
