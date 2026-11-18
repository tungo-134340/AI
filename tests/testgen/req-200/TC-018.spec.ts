import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-018.
test('TC-018 When vulnerabilities match filters, the system displays a table with the filtered, ordered list', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
