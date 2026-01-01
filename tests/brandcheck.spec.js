import {test,expect} from '@playwright/test'
import { subscription } from '../pages/subscrption'
import { BrandPom } from '../pages/BrandPom'

test('brand check in details',async({page})=>{
    const subs= new subscription(page)
    const brand_check= new BrandPom(page)
    await subs.goto_homepage()
    await brand_check.brandcheck()
    await expect(brand_check.branddtls.nth(3)).toContainText(/madame/i)
})