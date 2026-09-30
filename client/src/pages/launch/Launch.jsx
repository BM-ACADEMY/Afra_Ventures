// /launch — the Afra Ventures inauguration invitation (from "Afra Ventures
// Inauguration.html"). A full-screen page with its own design, outside the site
// header and footer. Its markup, styles and script are kept unchanged in
// launch.html, launch.css and launch-script.js; this component only mounts them.
import { useEffect, useLayoutEffect, useRef } from 'react';
import Seo from '../../components/Seo.jsx';
import markup from './launch.html?raw';
import css from './launch.css?raw';
import { start } from './launch-script.js';

// The invitation fills the window: its .app is height:100% of the React root.
const MOUNT_CSS = '#root,.launch-root{height:100%}';

// The site's own stylesheet (built: <link href="/assets/…css">, dev: Vite <style>
// tags) shares class names with the invitation (.bars, .stack, .hero, .nav, .skip),
// so it is switched off while /launch is open and back on when the visitor leaves.
// prerender.js already ships /launch with the link switched off (media="not all").
function siteStyles(on) {
  document.querySelectorAll('link[rel="stylesheet"][href^="/assets/"]').forEach(l => {
    l.media = on ? 'all' : 'not all';
  });
  document.querySelectorAll('style[data-vite-dev-id]').forEach(s => {
    if (s.sheet) s.sheet.disabled = !on;
  });
}

export default function Launch() {
  const root = useRef(null);

  // Layout effect: switches happen before paint, so no page flashes unstyled.
  useLayoutEffect(() => {
    siteStyles(false);
    return () => siteStyles(true);
  }, []);

  useEffect(() => {
    const stop = start();
    const el = root.current;
    return () => {
      stop();
      // Fresh markup drops every listener the script attached to it, so a
      // re-run (StrictMode in dev) starts from the original page.
      el.innerHTML = markup;
    };
  }, []);

  return (
    <>
      <Seo
        file="launch.html"
        title="Afra Ventures Inauguration"
        description="Afra Ventures Pvt Ltd inauguration. A special invitation is waiting for you."
      />
      {/* Styles live only while this page is open, so they never reach the rest of the site. */}
      <style dangerouslySetInnerHTML={{ __html: css + '\n' + MOUNT_CSS }} />
      <div className="launch-root" ref={root} dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}
