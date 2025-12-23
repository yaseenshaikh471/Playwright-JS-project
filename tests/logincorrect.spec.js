import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePAge';

test('login test', async ({ page }) => {
  const login = new loginPage(page)
  await login.gotopage()
  await login.login('postman471@gmail.com','Pass@123ok')

  await page.context().storageState({ path: 'auth.json' })
  
  // const home=new HomePage(page)
  // await home.addProductToCart('Stylish Dress')
  // await page.waitForTimeout(3000)
  // await home.gotoCartproceed()
  // await page.waitForTimeout(3000)
})