import {test,expect} from '@playwright/test'
import { Homelinks } from '../pages/Homelinks'

test('Product list and one product details',async({page})=>{
    const HomePageLinks= new Homelinks(page)
    await HomePageLinks.gotopage()
    await HomePageLinks.productslink()
    await expect(page.locator(HomePageLinks.product_pg_title)).toContainText('All Products')
    const products = await HomePageLinks.getAllProducts()
    const count = await products.count()

    for (let i = 0; i < count; i++) {
    await expect(products.nth(i)).toBeVisible()
    }
    await HomePageLinks.product_1()
    await expect(page.locator(HomePageLinks.productName)).toBeVisible()
    await expect(page.locator(HomePageLinks.product_price)).toBeVisible()
    await expect(page.locator(HomePageLinks.productCategory)).toBeVisible()
    await expect(page.locator(HomePageLinks.product_avalabilty)).toBeVisible()
    await expect(page.locator(HomePageLinks.product_condition)).toBeVisible()
    await expect(page.locator(HomePageLinks.product_brand)).toBeVisible()

})

