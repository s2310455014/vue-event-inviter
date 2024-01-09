import { test, expect } from '@playwright/test';

test('Test Create Event Form', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByText('Create new event').click();

    await page.fill('[data-testid="name"] input', 'Test Event');
    await page.fill('[data-testid="date"] input', '2022-01-01');
    await page.fill('[data-testid="time"] input', '12:00');
    await page.fill('[data-testid="descr"] input', 'Test Description');

    await page.getByText('Create Event').click();

    await page.waitForSelector('.validation p', { state: 'hidden' });

    const nameLabelText = await page.locator('.v-card-title').last().innerHTML();

    expect(nameLabelText).toBe('Test Event');
});

test('Test Create Event Form Validation', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByText('Create new event').click();

    await page.getByText('Create Event').click();

    await page.waitForSelector('.validation p');

    const validationMessage = await page.innerText('.validation p');
    expect(validationMessage).toContain('Fields with * are required.');
});
