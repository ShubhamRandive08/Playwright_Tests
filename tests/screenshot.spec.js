// Include playwright module
const { test, expect } = require('@playwright/test')  

test('Take a screenshot in playwright', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk')

    // Element Screenshot
    await page.locator("[class = 'yt-spec-avatar-shape__image-overlays yt-spec-avatar-shape__image']").screenshot({path : './Screenshots/element.png'})

    // Page Screenshot
    await page.screenshot({path : './Screenshots/page.png'})


    // Full page screenshot
    await page.screenshot({path : './Screenshots/Full_page.png', fullPage : true})

    await page.close();

})



