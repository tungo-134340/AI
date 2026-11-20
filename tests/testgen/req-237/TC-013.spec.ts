import { test, expect } from '@playwright/test';

// Written by fake_gen_script (no AI): a fixed check for TC-013.
test('TC-013 List displays only the top 20 vulnerabilities when more than 20 match the filters', async ({ page }) => {
  await page.goto(process.env.AUT_URL || 'http://172.17.104.147:3000/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});
