import { test, expect } from '@playwright/test';
const shipCode = 'ABCD-1234-A1';
const newShipCode = 'ABCD-1234-A2';



test.beforeEach('Go to ships page', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('/dashboard/ships');
});

test.describe('CRUD operations on ships records', () => {

  test('User is able to create a new ship record', async ({ page }) => {

    await page.getByRole('button', { name: 'Create' }).click();

    await page.getByLabel('Ship Name').click();
    await page.getByLabel('Ship Name').fill('Test Ship');
    await page.getByLabel('Ship Name').press('Tab');

    await page.getByLabel('Ship Length').fill('250');
    await page.getByLabel('Ship Length').press('Tab');

    await page.getByLabel('Ship Width').fill('50');
    await page.getByLabel('Ship Width').press('Tab');

    await page.getByLabel('Ship Code').press('CapsLock');
    await page.getByLabel('Ship Code').fill(shipCode);

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForLoadState('networkidle');

    // Verify the new ship record is visible in the table
    const row = page.locator(`//table//tr[td[contains(text(), '${shipCode}')]]`);
    await expect(row).toContainText(/Test Ship/);
    await expect(row).toContainText(/250/);
    await expect(row).toContainText(/50/);
  });

  test('User is able to edit an existing ship record', async ({ page }) => {

    // open the popup menu for the ship record which shows edit and delete options
    const rowLocator = page.locator(`//table//tr[td[contains(text(), '${shipCode}')]]`);
    const buttonLocator = rowLocator.locator('td:last-of-type button[aria-haspopup="menu"]');
    await buttonLocator.click();

    // Click on the edit option in the popup menu
    await page.getByRole('menuitem', { name: 'Edit' }).click();

    // edit the details for the created ship record and save the changes
    await page.getByLabel('Ship Name').click();
    await page.getByLabel('Ship Name').fill('Test Ship 1');

    await page.getByLabel('Ship Length').click();
    await page.getByLabel('Ship Length').fill('300');
    await page.getByLabel('Ship Length').press('Tab');

    await page.getByLabel('Ship Width').fill('60');
    await page.getByLabel('Ship Width').press('Tab');

    await page.getByLabel('Ship Code').press('ArrowRight');
    await page.getByLabel('Ship Code').fill(newShipCode);

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForLoadState('networkidle');

    // Verify the updated ship record is visible in the table
    const row = page.locator(`//table//tr[td[contains(text(), '${newShipCode}')]]`);
    await expect(row).toContainText(/Test Ship 1/);
    await expect(row).toContainText(/300/);
    await expect(row).toContainText(/60/);
  });

  test('User is able to delete an existing ship record', async ({ page }) => {

    // open the popup menu for the ship record which shows edit and delete options
    const rowLocator = page.locator(`//table//tr[td[contains(text(), '${newShipCode}')]]`);
    const buttonLocator = rowLocator.locator('td:last-of-type button[aria-haspopup="menu"]');
    await buttonLocator.click();

    // Click on the delete option in the popup menu
    await page.getByRole('menuitem', { name: 'Delete' }).click();

    // Click on the delete button in the confirmation dialog
    await page.getByRole('button', { name: 'Delete' }).click();

    // Verify whether the record was deleted
    const row = page.locator(`//table//tr[td[contains(text(), '${newShipCode}')]]`);
    await expect(row).not.toBeVisible();
  });

})