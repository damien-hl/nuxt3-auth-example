import { expect, test } from '@playwright/test'

test('go to /', async ({ page }) => {
  await page.goto('/')

  expect(await page.title()).toBe('Simple authentication example using Nuxt3')
})
