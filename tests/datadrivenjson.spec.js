const {test, expect} = require('@playwright/test')
import {Module1TestData} from '../test-data/qa/google.json'

test.describe('Read ENV file in playwright', async () => {
    test('Data Driven testing using JSON in playwright', async ({page}) => {
        await page.goto(process.env.URL)

        // Search with keyboard
        await page.locator('#APjFqb').click()
        await page.locator('#APjFqb').fill(Module1TestData.skill1)
        await page.locator('#APjFqb').press("Enter")


        await page.waitForTimeout(5000)
    })

})