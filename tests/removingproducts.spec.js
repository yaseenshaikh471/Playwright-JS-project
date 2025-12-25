import {test,expect} from '@playwright/test'
import { Homelinks } from '../pages/Homelinks'
test('removing the products from cart',async({page})=>{
    const Home_links=new Homelinks(page)
    await Home_links.gotopage()
    await Home_links.productslink()
    await Home_links.addingquanitytocart()
    await Home_links.removeproduct()
    await expect(page.locator(Home_links.emptycart_text)).toContainText('Cart is empty!')
})