import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';


test('login test', async ({ page }) => {
  const login = new loginPage(page)
  await login.gotopage()
  await login.login('gg@gmail.com','sasc@123ok')

  await expect(page.locator(login.invalidmsg).nth(0)).toContainText('Your email or password is incorrect!')
  
})