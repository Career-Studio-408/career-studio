import { test, expect } from '@playwright/test'
import { BASE_URL } from '../util/env'

test('homepage loads', async ({ page }) => {
  await page.goto(BASE_URL)
  await expect(page).toHaveTitle(/Career Studio/)
})
