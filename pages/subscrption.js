exports.subscription= class subscription{
    constructor(page){
        this.page=page
        this.subscription_email='input#susbscribe_email'
        this.send_btn='button#subscribe'
        this.cart_link='ul a[href="/view_cart"]'
        this.ack_txt='div.alert-success.alert'
    }
    async goto_homepage(){
        await this.page.goto('https://automationexercise.com/')
    }

    async goto_cart(){
        await this.page.locator(this.cart_link).click()
    }

    async send_subscription_process(){
        await this.page.locator(this.subscription_email).fill('ys@gmail.com')
        await this.page.locator(this.send_btn).click()
    }

}