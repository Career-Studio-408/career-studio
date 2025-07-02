import { test, expect } from '@playwright/test'
import { USER_1_EMAIL, USER_1_PASSWORD, BASE_URL } from '../util/env.ts'

test('login with credentials and navigate to dashboard', async ({ page }) => {
  await page.goto(`${BASE_URL}`)
  await page.click('button:has-text("Login")')

  await page.fill('input[name="email"]', USER_1_EMAIL)
  await page.fill('input[name="password"]', USER_1_PASSWORD)
  await page.click('button:has-text("Sign in")')

  await page.waitForURL(/.*\/dashboard.*/, { timeout: 10000 })
  await expect(page).toHaveURL(/.*\/dashboard.*/)
  await expect(page.locator('text=Profile Information')).toBeVisible()
  await expect(page.locator('button:has-text("Login")')).not.toBeVisible()
})