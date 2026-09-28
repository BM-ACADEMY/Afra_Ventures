// Product stage label: <Chip stage="live">Live</Chip> → .chip .chip-live
// stage: 'live' | 'beta' | 'dev'
export default function Chip({ stage, style, children }) {
  return (
    <span className={`chip chip-${stage}`} style={style}>
      {children}
    </span>
  );
}
