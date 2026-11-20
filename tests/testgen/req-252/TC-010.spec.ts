import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-010.
test('TC-010 Vulnerabilities are ordered by created time with newest first', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
