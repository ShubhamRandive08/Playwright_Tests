import {test, exact, expect } from '@playwright/test'
import exp from 'constants'

test.describe('Playwright tests for keyboard action', async () =>{
    test('Test No.01 : Keybord Action', async ({page}) => {
        page.goto('https://www.youtube.com/')
 
        await expect(page.locator("//input[@name = 'search_query']")).toBeVisible();
        
        await page.locator("//input[@name = 'search_query']").click()

        // await page.locator("//input[@name = 'search_query']").type('Playwright by testers talk')

        // Press Enter
        //await page.locator("//input[@name = 'search_query']").press('Enter')

        // Press control + a and Delete
        // page.locator("//input[@name = 'search_query']").click()

        //await page.locator("//input[@name = 'search_query']").press('Control+a')

        //await page.locator("//input[@name = 'search_query']").press('Delete')

        // Press Tab
        await page.keyboard.press('Tab')
        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')


        await page.waitForTimeout(10000)
        
        await page.close()
    })
})