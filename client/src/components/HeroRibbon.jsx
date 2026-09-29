// Decorative flowing-lines artwork behind the Home hero (and the header above it).
// Source: src/assets/flowlines.png (Afra's own generated artwork); the site uses
// the web-optimised copy flowlines.webp (1200 × 841). Hidden from screen readers.
import flowlines from '../assets/flowlines.webp';

export default function HeroRibbon() {
  return (
    <div className="hero-ribbon" aria-hidden="true">
      <img className="hero-wave" src={flowlines} alt="" width="1200" height="841" decoding="async" />
    </div>
  );
}
