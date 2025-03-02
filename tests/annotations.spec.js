const {test, expect} = require('@playwright/test')
const exp = require('constants')

test.describe('Annotations', async () => {
    test.skip('Validate assertions 1', async ({page}) => {
        await page.goto('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        //assert URL
        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        // assert Title
        await expect(page).toHaveTitle("playwright tutorial full course - YouTube")

        // assert Text
        await expect(page.locator("//input[@name = 'search_query']").first()).toHaveValue("playwright tutorial full course")

        // assert editable enabled visible
        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEditable()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeVisible()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEnabled();

        // assert disabled empty count
        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeDisabled()

        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeEmpty() // Should be empty

        await expect(page.locator("//input[@name = 'search_query']").first()).not.toBeEmpty() // Should not empty

        await expect(page.locator("//input[@name = 'search_query']")).toHaveCount(1)

        await page.waitForTimeout(60)
    })

    test.only('Validate assertions 2', async ({page}) => {
        await page.goto('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        //assert URL
        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        // assert Title
        await expect(page).toHaveTitle("playwright tutorial full course - YouTube")

        // assert Text
        await expect(page.locator("//input[@name = 'search_query']").first()).toHaveValue("playwright tutorial full course")

        // assert editable enabled visible
        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEditable()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeVisible()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEnabled();

        // assert disabled empty count
        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeDisabled()

        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeEmpty() // Should be empty

        await expect(page.locator("//input[@name = 'search_query']").first()).not.toBeEmpty() // Should not empty

        await expect(page.locator("//input[@name = 'search_query']")).toHaveCount(1)

        await page.waitForTimeout(60)
    })

    test('Validate assertions 3', async ({page}) => {
        await page.goto('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        //assert URL
        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+tutorial+full+course')

        // assert Title
        await expect(page).toHaveTitle("playwright tutorial full course - YouTube")

        // assert Text
        await expect(page.locator("//input[@name = 'search_query']").first()).toHaveValue("playwright tutorial full course")

        // assert editable enabled visible
        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEditable()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeVisible()

        await expect(page.locator("//input[@name = 'search_query']").first()).toBeEnabled();

        // assert disabled empty count
        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeDisabled()

        // await expect(page.locator("//input[@name = 'search_query']").first()).toBeEmpty() // Should be empty

        await expect(page.locator("//input[@name = 'search_query']").first()).not.toBeEmpty() // Should not empty

        await expect(page.locator("//input[@name = 'search_query']")).toHaveCount(1)

        await page.waitForTimeout(60)
    })
})