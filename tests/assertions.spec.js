const {test, expect} = require('@playwright/test')

test.describe('Assertions', async () => {
    test('Validate assertions', async ({page}) => {
        await page.goto('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        await page.waitForTimeout(6000)
    })
})