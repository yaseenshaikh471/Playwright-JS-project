
export class BrandPom{
    constructor(page){
        this.page=page
        this.productslink=page.locator('ul [href="/products"]')
        this.brandbtn=page.locator('div.brands-name a[href="/brand_products/Madame"]')
        this.product_4_details=page.locator('a[href="/product_details/4"]')
        this.branddtls=page.locator('.product-information p')
    }
    async brandcheck(){
        await this.productslink.click()
        await this.brandbtn.click()
        await this.product_4_details.click()
        
    }
}