import {test,expect} from "@playwright/test"
import { registerPage } from "../pages/registerPage"
import { Homelinks } from "../pages/Homelinks"

test('Test registering before checkout from cart',async({page})=>{
    const register_page= new registerPage(page)
    const Home_links= new Homelinks(page)
    await register_page.gotopage()
    await register_page.register_page()
    await register_page.regster('asgevbh','gduss@dcvhbs.com')
    await register_page.regsterform()
    await expect(page.locator(register_page.acc_created)).toContainText('Account Created!')

    await Home_links.productslink()
    await Home_links.addingquanitytocart()
    await Home_links.proceed()
    await Home_links.placing_order()
    await expect(Home_links.payment_confirmation).toBeVisible()
    await Home_links.delete_account()
    await expect(Home_links.delete_confirmation).toBeVisible()
})