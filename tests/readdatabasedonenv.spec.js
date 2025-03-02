const {test, expect} = require('@playwright/test')
import {qaTestData} from '../test-data/qa/google.json'

import {StageTestData} from '../test-data/stage/google.json'

test.describe('Module Test', async () => {
    let testData = null 
    test.beforeAll('Running before all tests', () => {
        if(process.env.ENV == 'qa'){
            testData = qaTestData;
        }else{
            testData = StageTestData
        }
    })

    test('Read test data based on diff env in playwright ', async ({page}) => {
        await page.goto(process.env.URL)

        // Search with keyboard
        await page.locator('#APjFqb').click()
        await page.locator('#APjFqb').fill(testData.skill1)
        await page.waitForTimeout(5000)
        await page.locator('#APjFqb').press("Enter")
    })
})



