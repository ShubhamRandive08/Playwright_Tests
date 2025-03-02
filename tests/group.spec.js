const {test,expect} = require('@playwright/test')

test.describe('Smoke Testing', async () => {
    test('Test 1', async ({ page }) => {
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

    test('Test 2', async ({ page }) => {
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

    test('Test 3', async ({ page }) => {
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
})

test.describe('Sanity Testing', async () => {
    test('Test 4', async ({ page }) => {
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

    test('Test 5', async ({ page }) => {
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

    test('Test 6', async ({ page }) => {
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
})