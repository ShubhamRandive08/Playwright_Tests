const {test,expect} = require('@playwright/test')

test.describe('Date Picker', async () =>{
    test('Peak the Date', async ({page}) => {
        await page.goto('https://jqueryui.com/datepicker/')

        const frameElement = page.frameLocator("//iframe[@class = 'demo-frame']")

        frameElement.locator('.hasDatepicker').click()


        // Today's date
        // await frameElement.locator(".ui-datepicker-today").click();

        // await page.waitForTimeout(10000)

        // Custom Date
         const defaultDate = frameElement.locator('.ui-datepicker-today > a')
         const currentDateValue = await defaultDate.getAttribute('data-date') // 28 as today

         let customDate = (parseInt(currentDateValue) - 3)

         const element = "[data-date=" + "'"+customDate.toString()+"'"+"]"

         await frameElement.locator(element).click()

         await page.waitForTimeout(5000)

    })


})