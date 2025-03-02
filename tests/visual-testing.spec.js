import { test, expect } from '@playwright/test';

test('visual comparison test', async ({ page }) => {
    await page.goto('https://github.com/login/');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');

    await page.locator("#login_field").click()
    await page.locator("#login_field").fill("Shubham")

    expect(await page.screenshot()).toMatchSnapshot('homepage.png');

});
