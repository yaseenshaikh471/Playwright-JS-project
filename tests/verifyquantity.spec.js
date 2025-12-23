import {test,expect} from "@playwright/test"
import { Homelinks } from "../pages/HomeLinks"
test('verfying the quantity of products', async({page})=>{
    const HomePageLinks= new Homelinks(page)
    await HomePageLinks.gotopage()
    await HomePageLinks.productslink()
    await HomePageLinks.addingquanitytocart()
    await expect(HomePageLinks.quantityonCart).toContainText('4')

})
