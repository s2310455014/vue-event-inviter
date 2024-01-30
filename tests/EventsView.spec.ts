import { test, expect } from '@playwright/test'
import type { Event } from '@/types'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test('Create Event', async ({ page }) => {
  const event: Event = {
    name: 'New Test Event',
    date: '2022-02-01',
    time: '14:30',
    description: 'New Test Description',
    invitees: [],
    location: '',
    isInvitesSent: false
  }

  await page.getByText('Create new event').click()

  await page.fill('[data-testid="name"] input', event.name)
  await page.fill('[data-testid="date"] input', event.date)
  await page.fill('[data-testid="time"] input', event.time)
  await page.fill('[data-testid="descr"] input', event.description)

  await page.getByText('Create Event').click()
  await page.waitForSelector(`.card:has-text("${event.name}")`)

  const createdEvent = await page.locator(`.card:has-text("${event.name}")`).count()
  expect(createdEvent).toBe(1)
})

test('Navigate to Event Details', async ({ page }) => {
  const eventName = await page
    .locator('.card')
    .first()
    .innerText()
    .then((text) => text.split('\n')[0])

  await page.locator(`.card:has-text("${eventName}") .link`).click()

  const url = page.url()
  expect(url).toContain('/event/')
})

test('Modal Opening', async ({ page }) => {
  await page.getByText('Create new event').click()
  const modalVisible = await page.isVisible('.dialog')
  expect(modalVisible).toBe(true)
})

test('Event Filtering', async ({ page }) => {
  await page.getByTestId('filter').click()
  const buttonText = await page.getByTestId('filter').innerText()
  expect(buttonText).toContain('SHOW ALL EVENTS')
})

test('Delete Event', async ({ page }) => {
  const event1: Event = {
    id: 4,
    name: 'Test Event',
    date: '2022-01-01',
    time: '12:00',
    description: 'Test Description',
    invitees: [],
    location: '',
    isInvitesSent: false
  }

  await page.getByText('Create new event').click()

  await page.fill('[data-testid="name"] input', event1.name)
  await page.fill('[data-testid="date"] input', event1.date)
  await page.fill('[data-testid="time"] input', event1.time)
  await page.fill('[data-testid="descr"] input', event1.description)

  await page.getByText('Create Event').click()
  await page.waitForSelector('.validation p', { state: 'hidden' })

  const eventsBeforeDeletion = await page.locator('.card').count()

  await page.locator('.delete-icon').last().click()

  await page.waitForSelector('.event-card', { state: 'hidden' })

  const eventsAfterDeletion = await page.locator('.card').count()

  //const deletedEvent = await page.getByTestId('.' + event1.id).last().count();
  //console.log(deletedEvent)

  // Verify that the event is deleted
  //const deletedEven2t = await page.locator('.event-card').withText(name).count();
  expect(eventsAfterDeletion).toBe(eventsBeforeDeletion - 1)
})
