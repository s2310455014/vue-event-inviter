import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('fetches and displays contacts data on mount', async ({ page }) => {
    await page.click('text=Contacts');
    await page.waitForSelector('#card-section');

    const contactsCount = await page.$$eval('.contactCard', (items) => items.length);
    expect(contactsCount).toBe(20);
});

test('navigate to Contacts page on button click', async ({ page }) => {
    await page.click('text=Contacts');

    await page.waitForSelector('#app');

    const isContactsPageVisible = await page.isVisible('#app');
    expect(isContactsPageVisible).toBe(true);
});

test('navigate to Events page on button click', async ({ page }) => {
    await page.click('text=Events');

    await page.waitForSelector('#app');

    const isEventsPageVisible = await page.isVisible('#app');
    expect(isEventsPageVisible).toBe(true);
});
