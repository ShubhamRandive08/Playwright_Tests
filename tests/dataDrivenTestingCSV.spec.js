const {test, expect} = require('@playwright/test')
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const records = parse(fs.readFileSync(path.join(__dirname, "../test-data/qa/testdata.csv")), {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,  // Allows inconsistent columns
    relax_quotes: true,        // Ignores misplaced quotes instead of erroring out
    trim: true,                // Removes unwanted spaces
});

for (const record of records) {
    test(`Data Driven testing using CSV file in playwright ${record.TestCaseId}`, async ({page}) => {
        await page.goto(process.env.URL)

        // Search with keyboard
        await page.locator('#APjFqb').click()
        await page.locator('#APjFqb').fill(record.Skill1)
        await page.locator('#APjFqb').press("Enter")


        await page.waitForTimeout(5000)
    })
}
