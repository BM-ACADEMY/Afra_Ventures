// Build checks, run last in `npm run build`. Any failure exits 1 and stops the deploy.
//
// 1. Draft guard: pilot / traction / brands must never reach a production build.
//
// Whether drafts belong in this build is read from the SSR bundle's page list —
// the same one the build used — rather than process.env, because Vite also
// takes VITE_INCLUDE_DRAFTS from .env files that plain Node never sees.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const entry = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href;
const { BUILD_PAGES, DRAFT_FILES } = await import(entry);

const previewBuild = BUILD_PAGES.some(p => p.draft);

if (previewBuild) {
  console.log(`check-build: draft preview build — ${DRAFT_FILES.join(', ')} included on purpose. Never deploy this dist/.`);
} else {
  const leaked = DRAFT_FILES.filter(f => fs.existsSync(path.resolve('dist', f)));
  if (leaked.length) {
    console.error('Draft pages in production build:', leaked);
    process.exit(1);
  }
  console.log(`check-build: no draft pages in dist/ (${DRAFT_FILES.join(', ')})`);
}
