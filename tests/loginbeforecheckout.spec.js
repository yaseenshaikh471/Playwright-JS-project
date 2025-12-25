import {test,expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { Homelinks } from '../pages/HomeLinks'

test ('Login before product adding and check out',async({page})=>{
    const login_page= new loginPage(page)
    const Home_links=new Homelinks(page)
    await login_page.gotopage()
    await login_page.login('random@fjjf.com','Pass@123ok')
    await Home_links.productslink()
    await Home_links.addingquanitytocart()
    await Home_links.proceed()
    await Home_links.placing_order()
    await Home_links.delete_account()
    await expect(Home_links.delete_confirmation).toContainText('Account Deleted!')
})