exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
        this.productCard = '.product-image-wrapper'
        this.productName = '.productinfo p'
        this.addToCartBtn = 'a.btn.btn-default.add-to-cart'
        this.continueBtn='.modal-content [data-dismiss="modal"]'
        this.cartlnk = 'a[href="/view_cart"]'
        this.proceedbtn='a.btn'
        
    }

    async gotopage(){
        await this.page.goto('https://automationexercise.com/',{waitUntil:"domcontentloaded"})
    }

    async addProductToCart(productName) {
    const card = this.page.locator(this.productCard, {
        has: this.page.locator(this.productName, { hasText: productName })
    })
    await card.first().waitFor({ state: 'visible' })
    await card.first().hover()
    await card.first().locator(this.addToCartBtn).first().click()
    await this.page.waitForTimeout(1000)
}

    async gotoCartproceed(){
        await this.page.locator(this.continueBtn).click()
        await this.page.locator(this.cartlnk).first().click()
    }

}
