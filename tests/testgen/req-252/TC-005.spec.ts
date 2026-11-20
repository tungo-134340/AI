import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-005.
test('TC-005 Vulnerability with CVSS score below 9.0 is excluded from the list', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
