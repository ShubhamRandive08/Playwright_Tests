import {test,expect} from '@playwright/test'

test.describe('Script for the dropdown cheking', async () =>{
    test.beforeEach('Before each test cases', async ({page}) =>{
        await page.goto('https://www.facebook.com/')
    })


    test('Test No. 1 - DropDown List', async ({page}) => {
        await expect(page.locator("[class = '_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy']")).toBeVisible();
        await page.locator("[class = '_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy']").click();

        const dropDownList = page.locator('#month');
        await page.waitForTimeout(5000)

        dropDownList.selectOption('5') // By Value
        dropDownList.selectOption('Aug')
        
        await page.waitForTimeout(5000)

        await page.waitForTimeout(5000)
        await page.close()
    })
})