import {test,expect} from '@playwright/test'

const logGreenMessage = async (message, delay = 1000) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(`\x1b[32m✔ ${message}\x1b[0m`); // \x1b[32m makes text green
};

test.describe('Hooks in Playwright', () =>{
    test.beforeEach('Run before each test', async ({page}) => {
        await page.goto('https://www.youtube.com/')
        await page.getByRole('combobox', { name: 'Search' }).click();
    })

    test.beforeAll('Run before all test', async() => { // In that case we cant use 'page' object
        console.log('Runs before all tests..')
    })

    test.afterEach('Run after each test', async ({page}) => {
        console.log('Runs after the each test')
    })

    test.afterAll('Run after all test', async() => { // In that case we cant use 'page' object
        console.log('Runs after all tests..')
    })

    test('Test No. 01 - Hooks', async ({page}) =>{
        // Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
        await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
        await page.getByRole('button', { name: 'Search', exact: true }).click();
    
        await page.waitForTimeout(5000);
    
        //Click on playlist
        await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();
    
        // Validate title
        await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');
    
        await page.close();
        await logGreenMessage("Test 1 Passed", 1000); // D
    })

    test('Test No. 02 - Hooks', async ({page}) =>{
        // Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill('GitHub with A to Z with Shubham');
        await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await page.getByText('What Is GitHub? | GitHub Profile Creation | Use of GitHub | Part I').click();
        
        await page.close();
        await logGreenMessage("Test 2 Passed", 1000); // D
    })
})

