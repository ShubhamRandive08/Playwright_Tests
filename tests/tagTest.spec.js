// Include playwright module
const { test, expect } = require('@playwright/test')  // test - It is used to create the test cases , expect - to validate or to assert the web dev. or any text.


// Write a test
// page - page is the object with the help of that we can interact with the browser.
test('Test 1 @Tag1', async ({ page }) => {
    await page.goto('https://www.youtube.com/')

    // Go to URL
    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000);

    //Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

    await page.close();
})

test('Test 2 @Tag2', async ({ page }) => {
    await page.goto('https://www.youtube.com/')

    // Go to URL
    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000);

    //Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

    await page.close();
})

test('Test 3 @Tag1', async ({ page }) => {
    await page.goto('https://www.youtube.com/')

    // Go to URL
    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000);

    //Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

    await page.close();
})



