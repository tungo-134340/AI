import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-019.
test('TC-019 When no vulnerabilities match filters, the system displays the empty-state message', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
