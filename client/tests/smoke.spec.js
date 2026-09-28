// Route smoke tests. Run against the production build:
//   npm run build && npm run test:e2e
//
// The page list comes from the built SSR bundle — the same registry the build used.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { expect, test } from '@playwright/test';

const entry = path.resolve('dist-ssr/entry-server.js');
if (!fs.existsSync(entry)) throw new Error('No build found — run `npm run build` first.');
const { BUILD_PAGES } = await import(pathToFileURL(entry).href);

const LIVE = BUILD_PAGES.filter(p => !p.draft);
// Pages that have their own link in the main navigation.
const NAV = new Set(['products.html', 'technology.html', 'partners.html', 'about.html', 'insights.html', 'careers.html', 'contact.html']);

for (const page of LIVE) {
  test.describe(page.file, () => {
    test('loads with 200, no console errors, correct nav highlight', async ({ page: p }) => {
      const errors = [];
      p.on('console', m => m.type() === 'error' && errors.push(m.text()));
      p.on('pageerror', e => errors.push(e.message));

      const res = await p.goto(page.path, { waitUntil: 'networkidle' });
      expect(res.status()).toBe(200);
      await expect(p.locator('h1')).toHaveCount(1);
      expect(errors).toEqual([]);

      const current = p.locator('header.masthead a[aria-current="page"]');
      if (NAV.has(page.file)) {
        await expect(current).toHaveCount(1);
        await expect(current).toHaveAttribute('href', page.path);
      } else {
        await expect(current).toHaveCount(0);
      }
    });

    test('content is visible with JavaScript disabled', async ({ browser }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const p = await context.newPage();
      await p.goto(page.path);
      await expect(p.locator('h1')).toBeVisible();
      await expect(p.locator('header.masthead')).toBeVisible();
      await expect(p.locator('footer.foot')).toBeVisible();
      expect((await p.locator('main').innerText()).length).toBeGreaterThan(200);
      await context.close();
    });
  });
}

test('old .html links still open the right page, at the clean URL', async ({ page }) => {
  const errors = [];
  page.on('console', m => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', e => errors.push(e.message));
  for (const [oldUrl, cleanUrl, heading] of [
    ['/about.html', '/about', /women-led product company/],
    ['/gymdesk.html#what-it-does', '/gymdesk#what-it-does', /GymDesk/],
    ['/index.html', '/', /notebook and a WhatsApp group/],
  ]) {
    await page.goto(oldUrl, { waitUntil: 'networkidle' });
    const url = new URL(page.url());
    expect(url.pathname + url.hash).toBe(cleanUrl);
    await expect(page.locator('h1')).toHaveText(heading);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', `https://afraventures.in${cleanUrl.split('#')[0]}`);
  }
  expect(errors).toEqual([]);
});

test('gymdesk.html: moving a slider changes the total', async ({ page }) => {
  await page.goto('/gymdesk');
  const total = page.locator('#o-total');
  await expect(total).toHaveText('₹8,85,600');
  await page.locator('#c-members').fill('600');
  await expect(total).not.toHaveText('₹8,85,600');
  // 600 × 35% × ₹1,200 × 6 = ₹15,12,000 renewals + ₹4,32,000 enquiries
  await expect(total).toHaveText('₹19,44,000');
  await expect(page.locator('#v-members')).toHaveText('600');
});

test('products.html: a stage button hides the other rows', async ({ page }) => {
  await page.goto('/products');
  const rows = page.locator('.ledger .ledger-row');
  await expect(rows).toHaveCount(3);
  await expect(rows.filter({ visible: true })).toHaveCount(3);

  await page.getByRole('button', { name: 'Live' }).click();
  await expect(page.getByRole('button', { name: 'Live' })).toHaveAttribute('aria-pressed', 'true');
  await expect(rows.filter({ visible: true })).toHaveCount(1);
  await expect(rows.filter({ visible: true })).toContainText('Velai Vaaippu');

  await page.getByRole('button', { name: 'All' }).click();
  await expect(rows.filter({ visible: true })).toHaveCount(3);
});

test.describe('contact.html form', () => {
  test('empty submit is blocked by the browser; nothing is sent', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    // name and email are `required`, so the browser stops the submit itself.
    expect(await page.locator('#f-name').evaluate(el => el.validity.valueMissing)).toBe(true);
    await expect(page.locator('form [role=status]')).toHaveText('');
  });

  test('blank name after trimming shows "Add your name and email…"', async ({ page }) => {
    await page.goto('/contact');
    await page.locator('#f-name').fill('   ');
    await page.locator('#f-email').fill('someone@example.com');
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(page.locator('form [role=status]')).toHaveText('Add your name and email so we can reply.');
  });

  // Sends a REAL enquiry to the configured form service. Off by default.
  // Build with VITE_FORM_ENDPOINT set, then: SMOKE_SEND_REAL_ENQUIRY=1 npm run test:e2e
  // Afterwards, confirm by hand that "[Smoke test]" arrived in the enquiries inbox.
  test('one real test enquiry is accepted by the form service', async ({ page }) => {
    test.skip(!process.env.SMOKE_SEND_REAL_ENQUIRY, 'set SMOKE_SEND_REAL_ENQUIRY=1 to send a real enquiry');
    await page.goto('/contact');
    await page.locator('#f-name').fill('[Smoke test] Afra website');
    await page.locator('#f-email').fill(process.env.SMOKE_REPLY_TO || 'smoke-test@afraventures.in');
    await page.locator('#f-message').fill(`Automated launch check, ${new Date().toISOString()}. Please ignore.`);
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(page.locator('form [role=status]')).toHaveText(/^Thanks — we have your enquiry/, { timeout: 15_000 });
  });
});
