import { expect, test } from "@playwright/test"


test('Locator Test', async ({page}) =>{
    // Go to URL
    // await page.goto('https://playwright.dev/')

    // await page.waitForTimeout(3000); // Wait for 3 seconds between requests
    
    // // By role
    // // await page.getByRole('link',{name : 'Videos'}).click();
    // await page.getByRole('link', {name : 'Docs'}).click()


    // By Label
    await page.goto('https://www.google.com/')
    await page.getByLabel('Search', {exact : true}).fill('api testing by testers talk')
    
    await page.waitForTimeout(4000)
})