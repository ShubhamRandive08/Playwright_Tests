import {test,expect} from '@playwright/test'


test.describe('Mouse Action in playwright', async () => {
    test('Test No. 01 - Mouse Action', async ({page}) => {
        await page.goto('https://www.bing.com/search?q=A+to+Z+with+Shubham')


        // await page.locator('.gLFyf').click();
        // await page.locator('.gLFyf').type('https://www.youtube.com/@Shubham_Randive')

        //click
        // await page.getByRole("link", {name : 'A to Z with Shubham - YouTube'}).first().click();

        // double click
        // await page.getByRole('link', {name : `A to Z with Shubham - YouTube`}).first().dblclick()

        // mouse right click
        // await page.getByRole('link', {name : `A to Z with Shubham - YouTube`}).first().dblclick({button : 'right'})

        // mouse middle click
        // await page.getByRole('link', {name : `A to Z with Shubham - YouTube`}).first().dblclick({button : 'middle'})

        //left click
        // await page.getByRole('link', {name : `A to Z with Shubham - YouTube`}).first().dblclick({button : 'left'})

        //mouse hover
        await page.locator("[aria-label = 'Search using voice']").hover()
    })
})