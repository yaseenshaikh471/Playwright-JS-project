import {test,expect} from '@playwright/test'
import {Review} from '../pages/Review'

test('Adding review test',async({page})=>{
    const review= new Review(page)
    await review.gotoHomepage()
    await review.addreview()
    await expect(review.reviewarea).toHaveValue('This is just a demo review wait and confirm it then go')

})