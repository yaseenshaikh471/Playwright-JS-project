import { test, expect } from '@playwright/test'
import { Categories } from '../pages/Categories'

test('finding categories from product', async ({ page }) => {
    const categories_links = new Categories(page)

    await categories_links.gotoHomepage()
    await categories_links.categorycheck()

    await expect(categories_links.product_details.nth(0)).toContainText('Women')
    await expect(categories_links.product_details.nth(0)).toContainText('Dress')
})
