export class Categories {
    constructor(page) {
        this.page = page
        this.women_cat_btn = page.locator('a[href="#Women"]')
        this.dress_cat_btn = page.locator('#Women a[href="/category_products/1"]')
        this.product_3 = page.locator('a[href="/product_details/3"]')
        this.product_details = page.locator('div.product-information p')
    }

    async gotoHomepage() {
        await this.page.goto('https://automationexercise.com/',{waitUntil:"domcontentloaded"})
    }

    async categorycheck() {
        await this.women_cat_btn.click()
        await this.dress_cat_btn.click()
        await this.product_3.click()
    }
}
