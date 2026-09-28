// Product screenshot slot. Without `src` it shows the "Screenshot pending"
// placeholder; with `src` the placeholder is replaced by the image.
//   <ScreenFrame title="Owner dashboard" caption="Today's collections, check-ins and expiries" />
//   <ScreenFrame title="…" caption="…" src="/screens/owner-dashboard.png" alt="…" />
//
// Screenshots must be 1600 × 1000 PNG (16:10, under 300 KB), redacted first:
// names, phones, photos, gym name and rupee totals replaced, not blurred.
export default function ScreenFrame({ title, caption, src, alt, width = 1600, height = 1000 }) {
  return (
    <figure className="screen" style={{ margin: '0' }}>
      {src ? (
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      ) : (
        <div className="screen-frame">
          <span>Screenshot pending</span>
        </div>
      )}
      <figcaption className="screen-cap">
        <b>{title}</b>
        {caption}
      </figcaption>
    </figure>
  );
}
