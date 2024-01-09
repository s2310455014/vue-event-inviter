import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('Test Modal Opening', async ({ page }) => {
    await page.getByText('Create new event').click();
    const modalVisible = await page.isVisible('.dialog');
    expect(modalVisible).toBe(true);
});

test('Test Event Filtering', async ({ page }) => {
    await page.('filter').click();
    const buttonText = await page.getByTestId('filter').innerText();
    expect(buttonText).toContain('SHOW ALL EVENTS');
});
