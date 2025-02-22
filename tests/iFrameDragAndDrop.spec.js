import { test, expect } from '@playwright/test'

test.describe('Test Cases for iframe in playwright the Drag and Drop Functionalites', async () => {

    let passedTests = [];
    let failedTests = [];

    test.beforeEach(async ({ page }) => {
        await page.goto('https://jqueryui.com/droppable/')
        console.log('\x1b[36mStarting a new test...\x1b[0m');
    });

    test.afterEach(async ({ }, testInfo) => {
        if (testInfo.status === 'passed') {
            passedTests.push(testInfo.title);
            console.log(`\x1b[32m✔ Test Passed: ${testInfo.title}\x1b[0m`);
        } else {
            failedTests.push(testInfo.title);
            console.log(`\x1b[31m✖ Test Failed: ${testInfo.title}\x1b[0m`);
        }
    });

    test.afterAll(async () => {
        console.log('\nSummary:');
        if (failedTests.length === 0) {
            console.log('\x1b[32m✔ All tests passed successfully!\x1b[0m');
        } else {
            console.log('\x1b[31m✖ Some tests failed!\x1b[0m');
        }
    });

    test('Test No. 01 - Drag and Drop', async ({ page }) => {

        // Identify the iframe 
        const iFrameElement = page.frameLocator('.demo-frame')

        // source and destionation
        const dragElement = iFrameElement.locator("[id = 'draggable']")
        const dropElement = iFrameElement.locator("[id = 'droppable']")

        // Drag and Drop elements
        await dragElement.dragTo(dropElement)

    })

    
})