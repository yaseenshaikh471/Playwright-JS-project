import {test,expect} from '@playwright/test'
import { Homelinks } from '../pages/HomeLinks'
test('test contact us',async({page})=>{
    const Homepagelinks =new Homelinks(page)
    await Homepagelinks.gotopage()
    await Homepagelinks.handleAlert()
    await Homepagelinks.contactUs('Yaseen','ys5442199@gmail.com')
    await expect(page.locator(Homepagelinks.sucsessmsg)).toContainText('Success! Your details have been submitted successfully.')
    await Homepagelinks.homebtn()
    await expect(await page.title()).toBe('Automation Exercise')
})