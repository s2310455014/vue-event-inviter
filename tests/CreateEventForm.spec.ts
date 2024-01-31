import { test, expect } from '@playwright/test';

test('Create Event Form', async ({ page }) => {
    await page.goto('https://s2310455014.github.io/vue-event-inviter/#/');
    await page.getByText('Create new event').click();

    const name = 'Test Event'
    const date = '2022-01-01'
    const time = '12:00'
    const descr = 'Test Description'

    await page.fill('[data-testid="name"] input', name);
    await page.fill('[data-testid="date"] input', date);
    await page.fill('[data-testid="time"] input', time);
    await page.fill('[data-testid="descr"] input', descr);

    await page.getByText('Create Event').click();

    await page.waitForSelector('.validation p', { state: 'hidden' });

    const nameLabelText = await page.locator('.v-card-title').last().innerHTML();
    const dateLabelText = await page.locator('.v-card-subtitle').last().innerHTML();
    const descrLabelText = await page.locator('.v-card-text').last().innerHTML();

    expect(nameLabelText).toBe(name);
    expect(dateLabelText).toBe(date + ', ' + time);
    expect(descrLabelText).toBe(descr);
});

test('Create Event Form Validation', async ({ page }) => {
    await page.goto('https://s2310455014.github.io/vue-event-inviter/#/');
    await page.getByText('Create new event').click();

    await page.getByText('Create Event').click();

    await page.waitForSelector('.validation p');

    const validationMessage = await page.innerText('.validation p');
    expect(validationMessage).toContain('Fields with * are required.');
});
