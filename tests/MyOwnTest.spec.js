const {test,expect} = require('@playwright/test');

test('Validate Login Page', async ({page}) =>{
    await page.goto('http://127.0.0.1:5501/collage_addmission_process_project/index.html')
    await page.getByRole('textbox', { name: 'Username' }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('srandive245@gmail.com')
    await page.getByRole('textbox', { name: 'Password' }).click()
    await page.getByRole('textbox', { name: 'Password' }).fill('shubham');
    await expect(page.getByRole('button', { name: 'SIGN IN' })).toBeVisible();
    await page.getByRole('button', { name: 'SIGN IN' }).click();
    await page.waitForTimeout(6000)
    await expect(page.locator('span').first()).toBeVisible();
    await expect(page.locator('span').nth(2)).toBeVisible();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible()
    await page.getByRole('button', { name: 'OK' }).click()
    await page.getByRole('textbox', { name: 'Username' }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('srandive245@gmail.com')
    await page.getByRole('textbox', { name: 'Password' }).click()
    await page.getByRole('textbox', { name: 'Password' }).fill('Kingsr@08');
    await expect(page.getByRole('button', { name: 'SIGN IN' })).toBeVisible();
    await page.getByRole('button', { name: 'SIGN IN' }).click();
    await page.waitForTimeout(8000)
    await page.close()
});

test('Validate Register Page', async ({page})=>{
    await page.goto('http://127.0.0.1:5501/collage_addmission_process_project/index.html')
    await expect(page.getByRole('link', { name: 'Create' })).toBeVisible();
    await page.screenshot({path : 'screenshot.png'})
    await page.getByRole('link', { name: 'Create' }).click();
    await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Gaurav Ramane');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('Gaurav@gmail.com');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Gaurav Ramane');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('gaurav');
    await expect(page.getByRole('button', { name: 'SIGN UP' })).toBeVisible();
    await page.getByRole('button', { name: 'SIGN UP' }).click();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.close()
});


