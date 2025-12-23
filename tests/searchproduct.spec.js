import {test,expect} from "@playwright/test"
import { Homelinks } from "../pages/HomeLinks"
test('search product and verfy result',async({page})=>{
    const HomepageLinks= new Homelinks(page)
    await HomepageLinks.gotopage()
    await HomepageLinks.productslink()
    await HomepageLinks.search_product()
    const product_names= await HomepageLinks.searched_products_names()
    const count= await product_names.count()

  for (let i = 0; i < count; i++) {
  const text = await product_names.nth(i).textContent()

  if (text) {
    await expect.soft(text).toMatch(/dress/i)
  }
}

})