// Include playwright module
const { test, expect } = require('@playwright/test')  // test - It is used to create the test cases , expect - to validate or to assert the web dev. or any text.


// Write a test
// page - page is the object with the help of that we can interact with the browser.
test('Validate Youtube title', async ({ page }) => {
    await page.setViewportSize({
        width : 1536 ,
        height : 816
    })
    await page.goto('https://www.youtube.com/')

    // Go to URL
    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    //Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Ttorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

    await page.close();
})



