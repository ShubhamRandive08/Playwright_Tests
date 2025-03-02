const {test, expect} = require('@playwright/test')
import {Module1TestData} from '../test-data/qa/google.json'

for (const [key,value] of Object.entries(Module1TestData)) {
    test(`Data Driven testing using JSON in playwright ${value}`, async ({page}) => {
        await page.goto(process.env.URL)

        // Search with keyboard
        await page.locator('#APjFqb').click()
        await page.locator('#APjFqb').fill(value)
        await page.locator('#APjFqb').press("Enter")


        await page.waitForTimeout(5000)
    })
}
