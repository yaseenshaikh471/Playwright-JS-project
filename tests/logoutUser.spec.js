import { test,expect } from '@playwright/test'
import { loginPage } from '../pages/loginPage'

test.use({ storageState: 'auth.json' })

test('logout', async ({ page }) => {
  const login = new loginPage(page)
  await login.gotopage()  
  await login.logOut()
  await expect(page.locator(login.loginlink)).toBeVisible()
})