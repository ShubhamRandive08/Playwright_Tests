const {test, expect} = require('@playwright/test')
const exp = require('constants')

test.describe('Read ENV file in playwright', async () => {
    test('Read ENV file in playwright', async ({page}) => {
        await page.goto(process.env.URL)

        // Search with keyboard
        await page.locator('#APjFqb').click()
        await page.locator('#APjFqb').fill("Playwright by testers talk")
        await page.locator('#APjFqb').press("Enter")

        console.log(`Username : ${process.env.USER_NAME}`)
        console.log(`Password : ${process.env.PASSWORD}`)


        await page.waitForTimeout(5000)
    })

})