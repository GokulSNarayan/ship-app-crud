import { test, expect } from '@playwright/test';

test('User is able to login', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/dashboard');
  await expect(page).toHaveURL('/dashboard');

});

test('User is able to navigate to Ships page', async ({ page }) => {
  await page.goto('/dashboard/ships');
  // Click the get started link.
  await page.getByRole('link', { name: 'Ships' }).click();
  await page.waitForURL('**/dashboard/ships');
  // Expects page to have a heading with the name of Ships.
  await expect(page).toHaveURL('/dashboard/ships');
  await expect(page.getByRole('heading', { name: 'Ships' })).toBeVisible();
});
