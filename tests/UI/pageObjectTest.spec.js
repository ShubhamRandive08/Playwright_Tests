// Include playwright module
const { test, expect } = require('@playwright/test')  

 const {HomePage} = require('../../pages/homepage')
 const {ResultPage} = require('../../pages/resultpage')
 const {PlaylistPage} = require('../../pages/playlist')


test('POM in playwright', async ({ page }) => {
    // GO to URL
    const homepage = new HomePage(page)
    await homepage.goTo();


    // Search with Keywords
    homepage.searchKeywords('playwright by testes talk')

    // Click on playlist
    const resultpage = new ResultPage(page)
    await resultpage.clickOnPlaylist()

    await page.waitForTimeout(2000)

    // Click on the video
    const playlist = new PlaylistPage(page)
    await playlist.clickOnVideo()

    await page.waitForTimeout(2000)

})