import { expect, test } from "@playwright/test"


test('Locator Test', async ({page}) =>{
    // Go to URL
    // await page.goto('https://playwright.dev/')

    // await page.waitForTimeout(3000); // Wait for 3 seconds between requests
    
    // // By role
    // // await page.getByRole('link',{name : 'Videos'}).click();
    // await page.getByRole('link', {name : 'Docs'}).click()


    // By Label
    // await page.goto('https://www.google.com/')

    // await page.getByLabel('Search', {exact : true}).fill('api testing by testers talk')
    // await page.waitForTimeout(4000)
    
    // await page.getByLabel('Search', {exact : true}).press('Enter')

    // await page.goto('https://github.com/BakkappaN')
    // await page.getByAltText("View BakkappaN's full-sized avatar").click()


    // By Test ID

    // await page.goto('https://github.com/login')
    // await page.getByTestId('username').fill('srandive245@gmail.com')
    // await page.getByTestId('current-password').fill('Kingsr@09')

    // await page.goto('https://www.youtube.com/')
    // await page.getByPlaceholder('Search').click()
    // await page.getByPlaceholder('Search').fill('@testerstalk')

    // await page.getByPlaceholder('Search').press('Enter')

    // await page.getByTitle("#4 Step by Step Integrating Playwright with CICD Tools(Jenkins+GitHub,Azure DevOps & GitHub Actions)").click()

    // await page.goto('https://www.youtube.com/')

    // await page.getByPlaceholder('Search').fill('@testerstalk')

    // await page.getByPlaceholder('Search').press('Enter')

    // await page.getByText("#4 Step by Step Integrating Playwright with CICD Tools(Jenkins+GitHub,Azure DevOps & GitHub Actions)").click()

    // await page.goto('https://www.youtube.com/')
    // await page.locator("//*[@name='search_query']").click()
    // await page.locator("//*[@name='search_query']").fill('Github with A to Z with Shubham')
    // await page.locator("//*[@name='search_query']").press('Enter')
    // await page.getByText('What Is GitHub? | GitHub Profile Creation | Use of GitHub | Part I').click();

    await page.goto('https://www.youtube.com')
    await page.locator("[name = 'search_query']").click()
    await page.locator("[aria-controls = 'i0']").type('Github with A to Z with Shubham')
    await page.locator("[name = 'search_query']").press('Enter')
    await page.getByText('What Is GitHub? | GitHub Profile Creation | Use of GitHub | Part I').click();



    await page.waitForTimeout(5000)
    
})