exports.registerPage=class registerPage{
    constructor(page){
        this.page=page
        this.regstrlink='a[href="/login"]'
        this.regstrname='input[data-qa="signup-name"]'
        this.regstremail='input[data-qa="signup-email"]'
        this.sgnupbtn='[data-qa="signup-button"]'

        this.malerdo='input#id_gender1'
        // this.inptname='[data-qa="name"]'
        // this.inpteml='[data-qa="email"]'
        this.inptpass='[data-qa="password"]'
        this.dtday='[data-qa="days"]'
        this.dtmnt='[data-qa="months"]'
        this.dtyear='[data-qa="years"]'
        this.fname='[data-qa="first_name"]'
        this.lname='[data-qa="last_name"]'
        this.add='[data-qa="address"]'
        this.country='[data-qa="country"]'
        this.state='[data-qa="state"]'
        this.city='[data-qa="city"]'
        this.zcode='[data-qa="zipcode"]'
        this.mno='[data-qa="mobile_number"]'
        this.crtaccbtn='[data-qa="create-account"]'

        this.acc_created='h2.title.text-center'
        this.alreadyexist_message='form[action="/signup"] p'
    }

    async gotopage(){
        await this.page.goto('https://automationexercise.com/',{waitUntil:"domcontentloaded"})
    }

    async register_page(){
      await this.page.locator(this.regstrlink).click()
    }
      async regster(newname,newemail){
        
        await this.page.locator(this.regstrname).fill(newname)
        await this.page.locator(this.regstremail).fill(newemail)
        await this.page.locator(this.sgnupbtn).click()
        await this.page.waitForTimeout(2000)
      }

      async regsterform(){
        await this.page.locator(this.malerdo).check()
        await this.page.locator(this.inptpass).fill('randompass123')
        await this.page.locator(this.dtday).selectOption({value:'1'})
        await this.page.locator(this.dtmnt).selectOption({label:'April'})
        await this.page.locator(this.dtyear).selectOption({index:20})
        await this.page.locator(this.fname).fill('bbxxc')
        await this.page.locator(this.lname).fill('babu')
        await this.page.locator(this.add).fill('xyz')
        await this.page.locator(this.country).selectOption({label:'India'})
        await this.page.locator(this.state).fill('Maharashtra')
        await this.page.locator(this.city).fill('Mumbai')
        await this.page.locator(this.zcode).fill('5615')
        await this.page.locator(this.mno).fill('9823121122')
        await this.page.waitForTimeout(2000)

        await this.page.locator(this.crtaccbtn).click()
        
    }
}