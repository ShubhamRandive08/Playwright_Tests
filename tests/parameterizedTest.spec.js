// Include playwright module
const { test, expect } = require('@playwright/test')  // test - It is used to create the test cases , expect - to validate or to assert the web dev. or any text.


// Write a test
// page - page is the object with the help of that we can interact with the browser.

const testPara = ['Playwright by testers talk', 'Cypress by testers talk', 'Javascript by testers talk']

for (const searchKeyword of testPara) {
    test(`Parameterize test in playwright ${searchKeyword}`, async ({ page }) => {
        await page.goto('https://www.youtube.com/')
    
        // search with keyword
        await page.getByPlaceholder("Search").click()
        await page.getByPlaceholder("Search").fill(searchKeyword)
        await page.getByPlaceholder("Search").press("Enter")
    
        await page.waitForTimeout(5000)
    
    })
    
}
