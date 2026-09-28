// Page section: <section class="band [band-alt]"><div class="wrap [inner]">.
//   <Band alt wrap="stack-lg">…</Band>
//   <Band tight className="cta-band" wrap="cta-inner">…</Band>
export default function Band({ alt, tight, id, className, wrap, children }) {
  const section = [tight ? 'band-tight' : 'band', alt && 'band-alt', className]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={section} id={id}>
      <div className={wrap ? `wrap ${wrap}` : 'wrap'}>{children}</div>
    </section>
  );
}
