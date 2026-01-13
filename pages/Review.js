export class Review{
    constructor(page){
        this.page=page
        this.productslink=page.locator('ul [href="/products"]')
        this.viewproductbtn=page.locator('[href="/product_details/1"]')
        this.name4review=page.locator('input[type="text"]')
        this.email4review=page.locator('input[placeholder="Email Address"]')
        this.reviewarea=page.locator('textarea[name="review"]')
        this.submitbtn=page.locator('#button-review')
    }
    
    async gotoHomepage(){
        await this.page.goto('https://automationexercise.com/',{waitUntil:'domcontentloaded'})
    }

    async addreview(){
        await this.productslink.click()
        await this.viewproductbtn.click()
        await this.name4review.fill('gsav')
        await this.email4review.fill('ah@s.com')
        await this.reviewarea.fill('This is just a demo review wait and confirm it then go')
        await this.page.waitForTimeout(1500)
        await this.submitbtn.click()
    }
}