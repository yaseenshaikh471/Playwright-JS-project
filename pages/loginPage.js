const { expect } = require('@playwright/test')

exports.loginPage =
class loginPage{
    constructor(page){
        this.page=page
        this.loginlink='a[href="/login"]'
        this.emailinput='form[action="/login"] input[type="email"]'
        this.passinput='form[action="/login"] input[type="password"]'
        this.loginbtn='button[data-qa="login-button"]'

        this.invalidmsg='p'

        this.productslink='ul a[href="/products"]'
        this.products=page.locator('div.product-image-wrapper')
        this.addTocartlaybtn1='.product-overlay a[data-product-id="1"]'
        this.product_names=page.locator('div.product-image-wrapper p')
        this.addTocartlaybtn2='.product-overlay a[data-product-id="2"]'
        this.continue_btn='div.modal-content button'
        this.viewCard_btn='div.modal-content [href="/view_cart"]'
        this.productName1=page.locator('tr#product-1 td:nth-child(2) h4 a')
        this.productName2=page.locator('tr#product-2 td:nth-child(2) h4 a')
        this.product1_price = page.locator('tr#product-1 td:nth-child(3) p')
        this.product1_quantity = page.locator('tr#product-1 td:nth-child(4) button')
        this.product1_totalPrice = page.locator('tr#product-1 td:nth-child(5) p')
        this.product2_price = page.locator('tr#product-2 td:nth-child(3) p')
        this.product2_quantity = page.locator('tr#product-2 td:nth-child(4) button')
        this.product2_totalPrice = page.locator('tr#product-2 td:nth-child(5) p')


        this.logOutbtn='a[href="/logout"]'
    }
    async gotopage(){
        await this.page.goto('https://automationexercise.com/',{waitUntil:"domcontentloaded"})
    }

 

    async login(username,password){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.emailinput).fill(username)
        await this.page.locator(this.passinput).fill(password)
        await this.page.locator(this.loginbtn).click()

    }

    async add_product(){
        await this.page.locator(this.productslink).click()
        const product1_name= await this.product_names.nth(0).innerText()
        await this.products.nth(0).hover()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addTocartlaybtn1).click()
        await this.page.locator(this.continue_btn).click()
        const product2_name= await this.product_names.nth(1).innerText()
        await this.products.nth(1).hover()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.addTocartlaybtn2).click()
        await this.page.locator(this.viewCard_btn).click()
        // await expect(this.productName1).toHaveText(product1_name)
        // await expect(this.productName2).toHaveText(product2_name)
    }

    async logOut(){
        await this.page.locator(this.logOutbtn).click()
    }
}