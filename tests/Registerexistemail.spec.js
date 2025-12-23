import {test,expect} from '@playwright/test'
import { registerPage } from '../pages/registerPage'

test('testwithexistingemail',async({page})=>{
 const register=new registerPage(page)
 await register.gotopage()
 await regstr.register_page()
 await register.regster('Pass@123ok','postman471@gmail.com')
 await expect(page.locator(register.alreadyexist_message)).toContainText('Email Address already exist!')
})