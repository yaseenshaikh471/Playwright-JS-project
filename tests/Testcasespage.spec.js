import {test,expect} from '@playwright/test'
import { Homelinks } from '../pages/Homelinks'

test('test cases',async({page})=>{
    const HomePageLinks= new Homelinks(page)
    await HomePageLinks.gotopage()
    await expect(await page.title()).toBe('Automation Exercise')
    await HomePageLinks.testcaseslink()
    await expect(await page.locator(HomePageLinks.titlehead)).toContainText('Test Cases')
    await HomePageLinks.Homefromtestcases()
    await expect(await page.title()).toBe('Automation Exercise')
})