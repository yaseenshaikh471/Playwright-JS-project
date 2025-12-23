import {test,expect} from "@playwright/test"
import { loginPage } from "../pages/loginPage"
test('Adding two product to cart',async({page})=>{
    const adding_product= new loginPage(page)
    await adding_product.gotopage()
    await expect(page).toHaveTitle('Automation Exercise')
    await adding_product.add_product()
    await expect(adding_product.product1_price).toBeVisible()
    await expect(adding_product.product1_quantity).toBeVisible()
    await expect(adding_product.product1_totalPrice).toBeVisible()
    await expect(adding_product.product2_price).toBeVisible()
    await expect(adding_product.product2_quantity).toBeVisible()
    await expect(adding_product.product2_totalPrice).toBeVisible()
})