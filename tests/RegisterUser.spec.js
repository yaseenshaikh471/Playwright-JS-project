import {test,expect} from '@playwright/test'
import { registerPage } from '../pages/registerPage'
test('Register user',async({page})=>{
    const regstr=new registerPage(page)
    await regstr.gotopage()
    await regstr.register_page()
    await regstr.regster('df','randfgom@fjjf.com')
    await regstr.regsterform()
    await expect(page.locator(regstr.acc_created)).toContainText('Account Created!')
})