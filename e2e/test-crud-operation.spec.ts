
import { test, expect, Page } from '@playwright/test';

const createData = {
  shipName: 'Test Ship 1',
  shipLength: '250',
  shipWidth: '50',
  shipCode: 'ABCD-1234-A1'
}

const editData = {
  shipName: 'Test Ship 2',
  shipLength: '200',
  shipWidth: '50',
  shipCode: 'ABCD-1234-A2'
}

const deleteData = {
  shipName: 'Test Ship 3',
  shipLength: '200',
  shipWidth: '50',
  shipCode: 'ABCD-1234-A3'
}

type ShipData = typeof createData;


test.beforeEach('Go to ships page', async ({ page }) => {
  await page.goto('/dashboard/ships');
});


test.describe('CRUD operations on ships records', () => {

  test('User is able to create a new ship record', async ({ page }) => {
    await createShipRecord(page, createData);

    // Verify the new ship record is visible in the table
    const row = page.locator(`//table//tr[td[contains(text(), '${createData.shipCode}')]]`);
    await expect(row).toContainText(/Test Ship 1/);
    await expect(row).toContainText(/250/);
    await expect(row).toContainText(/50/);

    await deleteShipRecord(page, createData.shipCode);
  });

  test('User is able to edit an existing ship record', async ({ page }) => {

    //create a record
    await createShipRecord(page, editData);

    await page.waitForTimeout(1000);
    // open the popup menu for the ship record which shows edit and delete options
    const rowLocator = page.locator(`//table//tr[td[contains(text(), ${editData.shipCode})]]`);
    const buttonLocator = rowLocator.locator('td:last-of-type button[aria-haspopup="menu"]');
    await buttonLocator.click();
    await page.getByRole('menuitem', { name: 'Edit' }).click();

    // edit the details for the created ship record and save the changes
    await page.getByLabel('Ship Name').fill('Test Ship 6');
    await page.getByLabel('Ship Length').fill('250');
    await page.getByLabel('Ship Width').fill('60');
    await page.getByLabel('Ship Code').fill('ABCD-1234-A6');
    await page.getByRole('button', { name: 'Save' }).click();

     await page.waitForTimeout(1000);

    // Verify the updated ship record is visible in the table
    const row = page.locator(`//table//tr[td[contains(text(), 'ABCD-1234-A6')]]`);
    await expect(row).toContainText(/Test Ship 6/);
    await expect(row).toContainText(/250/);
    await expect(row).toContainText(/60/);

    await deleteShipRecord(page, 'ABCD-1234-A6');
  });

  test('User is able to delete an existing ship record', async ({ page }) => {

    //create a record
    await createShipRecord(page, deleteData);
    const createdRow = page.locator(`//table//tr[td[contains(text(), ${deleteData.shipCode})]]`);
    await expect(createdRow).toBeVisible();

    await deleteShipRecord(page, deleteData.shipCode);

    // Verify whether the record was deleted
    const rowToBeDeleted = page.locator(`//table//tr[td[contains(text(), '${deleteData.shipCode}')]]`);
    await expect(rowToBeDeleted).not.toBeVisible();
  });

})


async function createShipRecord(page: Page, data: ShipData) {
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByLabel('Ship Name').fill(data.shipName);
  await page.getByLabel('Ship Length').fill(data.shipLength);
  await page.getByLabel('Ship Width').fill(data.shipWidth);
  await page.getByLabel('Ship Code').fill(data.shipCode);
  await page.getByRole('button', { name: 'Save' }).click();
}

async function deleteShipRecord(page: Page, code: string) {
  const rowLocator = page.locator(`//table//tr[td[contains(text(), '${code}')]]`);
  const buttonLocator = rowLocator.locator('td:last-of-type button[aria-haspopup="menu"]');
  await buttonLocator.click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
}