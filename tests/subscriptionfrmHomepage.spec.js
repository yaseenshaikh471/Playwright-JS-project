import {test,expect} from '@playwright/test'
import { subscription } from '../pages/subscrption'

test('Subscription from HomePage',async({page})=>{
    const subscription_send= new subscription(page)
    await subscription_send.goto_homepage()
    await expect(await page.title()).toBe('Automation Exercise')
    await subscription_send.send_subscription_process()
    await expect(page.locator(subscription_send.ack_txt)).toContainText('You have been successfully subscribed!')

})