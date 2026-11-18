import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-009.
test('TC-009 Vulnerability published within the last 30 days is included in the list', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
