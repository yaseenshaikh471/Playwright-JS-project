const { expect } = require('@playwright/test')

exports.Homelinks= class homeLinks{
    constructor(page){
        //Contact us locators
        this.page=page
        this.contact_us_link='a[href="/contact_us"]'
        this.contact_title='h2.title.text-center'
        this.inputname='input[data-qa="name"]'
        this.inputemail='input[data-qa="email"]'
        this.subject='input[data-qa="subject"]'
        this.message='textarea[data-qa="message"]'
        this.uploadFileBtn='input[name="upload_file"]'
        this.submitbtn='[data-qa="submit-button"]'
        this.sucsessmsg='.status.alert.alert-success'
        this.homePage='a.btn.btn-success'
        
        // test cases locator
        this.testcasesbtn='[href="/test_cases"]'
        this.titlehead='h2 b'
        this.case1='[href="#collapse1"]'
        this.homelink='li [href="/"]'

        // Product details locator
        this.productlink='a[href="/products"]'
        this.product_pg_title='h2.title.text-center'
        this.productList='div.productinfo.text-center'
        this.product_1_viewDetails='a[href="/product_details/1"]'
        this.productName='div.product-information h2'
        this.productCategory='div.product-information p:nth-of-type(1)'
        this.product_price='div.product-information span span'
        this.product_avalabilty='div.product-information p:nth-of-type(2)'
        this.product_condition='div.product-information p:nth-of-type(3)'
        this.product_brand='div.product-information p:nth-of-type(4)'

        //search
        this.search_input='input[name="search"]'
        this.searchbtn='button#submit_search'
        this.searched_product_names='div.productinfo p'

        //View product details add quantity
        this.view_product1details='a[href="/product_details/1"]'
        this.product_quantity='span input[name="quantity"]'
        this.addTocartbtn='span button'
        this.view_cartlnk='div.modal-content a[href="/view_cart"]'
        this.quantityonCart=page.locator('tr#product-1 td:nth-child(4) button')
        this.proceed_btn=page.locator('a.btn')
        this.reg_login_lnk='div.modal-content a[href="/login"]'

        this.cart_btn='a[href="/view_cart"]'
        this.cart_link='ul li a[href="/view_cart"]'
        this.comntBox='textarea.form-control'
        this.place_orderBtn='a[href="/payment"]'
        this.nameOnCard='[name="name_on_card"]'
        this.card_no='[name="card_number"]'
        this.cvv='[name="cvc"]'
        this.month_cardt='input[name="expiry_month"]'
        this.year_card='input[name="expiry_year"]'
        this.pay_button='button[data-qa="pay-button"]'
        this.payment_confirmation=page.locator('h2 b')
        this.delete_acc='a[href="/delete_account"]'
        this.delete_confirmation=page.locator('h2 b')
        

    }

    async gotopage(){
        await this.page.goto('https://automationexercise.com/',{waitUntil:"domcontentloaded"})
    }

    async handleAlert() {
    this.page.on('dialog', async dialog => {
      await dialog.accept()
    })
  }

    async contactUs(name,email){
        await this.page.locator(this.contact_us_link).click()
        await this.page.locator(this.inputname).fill(name)
        await this.page.locator(this.inputemail).fill(email)
        await this.page.locator(this.subject).fill('Contact for details on test cases')
        await this.page.locator(this.message).fill('Good afternoon, Team this is thankful message for demo website and warm greeting as a test.')
        await this.page.locator(this.uploadFileBtn).setInputFiles('upload_data/Ragda-Patties.webp')
        await this.page.waitForTimeout(1500)
        await this.page.locator(this.submitbtn).click()
        await this.page.waitForTimeout(2000)
       

    }

    async testcaseslink(){
      await this.page.locator(this.testcasesbtn).first().click()
      await this.page.locator(this.case1).click()
      await this.page.waitForTimeout(2500)
      await this.page.locator(this.case1).click()
    }
      async Homefromtestcases(){
      await this.page.locator(this.homelink).click()
    }

    async homebtn(){ await this.page.locator(this.homePage).click()}

    async productslink(){
      await this.page.locator(this.productlink).click()}

    async getAllProducts() {
  return this.page.locator(this.productList)
  
}


    async product_1(){
      await this.page.waitForTimeout(1500)
      await this.page.locator(this.product_1_viewDetails).click()
      
    }

    async search_product(){
      await this.page.locator(this.search_input).fill('dress')
      await this.page.locator(this.searchbtn).click()
      await this.page.waitForTimeout(1500)
    }

    async searched_products_names(){
    return this.page.locator(this.searched_product_names)
    }

    async addingquanitytocart (){
      await this.page.locator(this.view_product1details).click()
      await this.page.waitForTimeout(1000)
      await this.page.locator(this.product_quantity).fill('4')
      await this.page.locator(this.addTocartbtn).click()
      await this.page.locator(this.view_cartlnk).click()
    
    }
    async proceed(){
      await this.proceed_btn.click()}

      async linkofregster_login(){
      await this.page.locator(this.reg_login_lnk).click()
    }

    async cart_page(){
      await this.page.locator(this.cart_link).click()
    }

    async placing_order(){
      await this.page.locator(this.comntBox).fill('Hey i am ordering the 4 tshirt')
      await this.page.locator(this.place_orderBtn).click()
      await this.page.locator(this.nameOnCard).fill('yaseen')
      await this.page.locator(this.card_no).fill('6549123542424242')
      await this.page.locator(this.cvv).fill('965')
      await this.page.locator(this.month_cardt).fill('05')
      await this.page.locator(this.year_card).fill('895')
      await this.page.locator(this.pay_button).click()
      await this.page.waitForTimeout(1000)
    }
    async delete_account(){
      await this.page.locator(this.delete_acc).click()
    }
  }
      
       
       