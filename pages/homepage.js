// Inlcude playwright module
const { expect, test } = require('@playwright/test')
const exp = require('constants')

//Create the class

exports.HomePage = class HomePage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    /* 1️⃣ /** *→ This is a JSDoc comment block, commonly used for documentation and type hinting.
2️⃣ @param → Specifies a function parameter and its type.
3️⃣ { import('@playwright/test').Page } →

This tells JavaScript(and TypeScript - aware tools like VS Code) that the page parameter is of type Page, which is imported from Playwright(@playwright / test).
It helps with auto - completion, type - checking, and documentation.
4️⃣ page → The actual parameter name used in the function. */


    constructor(page) {
        //init page obj
        this.page = page

        // Elements
        this.serchTextbox = page.locator("#APjFqb")
    }

    async goTo() {
        await this.page.goto('https://www.google.com/')
    }

    async searchKeywords(param1){
        await expect(this.serchTextbox).toBeEnabled()
        await this.serchTextbox.click()
        await this.serchTextbox.fill(param1)
        await this.serchTextbox.press('Enter')

    }
}

