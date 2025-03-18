const {test,expect} = require('@playwright/test');

test('Validate Login Page', async ({page}) =>{
    await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html')
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
});

test('Validate Register Page', async ({page})=>{
    await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/index.html')
    await expect(page.getByRole('link', { name: 'Create' })).toBeVisible();
    // await page.screenshot({path : 'screenshot.png'})
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
});


test('Login as new Credintails', async ({page}) => {
    await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/src/pages/samples/register.html')
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Gaurav@gmail.com')
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('gaurav')
    await expect(page.getByRole('button', { name: 'SIGN IN' })).toBeVisible();
    await page.getByRole('button', { name: 'SIGN IN' }).click();
    await expect(page.getByRole('dialog', { name: '🚀 Login Successful!' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
    // await page.getByRole('button', { name: 'OK' }).click();
    await expect.soft((page.getByRole('link', { name: 'Gaurav Ramane 󰅀' }))).toBeVisible();
    await page.getByRole('link', { name: 'Gaurav Ramane 󰅀' }).click();
    await expect(page.getByText('Logout')).toBeVisible();
    await page.getByText('Logout').click();
    await expect(page.getByRole('heading', { name: 'Are you sure you want to' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Yes, logout!' })).toBeVisible();
    await page.getByRole('button', { name: 'Yes, logout!' }).click();
    await expect(page.getByRole('heading', { name: 'Hello TEACHERS ! let\'s get' })).toBeVisible();
    await page.close();
})

test('Validate Home Page', async ({page}) =>{
    await page.goto('http://127.0.0.1:5502/collage_addmission_process_project/src/index.html')
    await expect(page.getByRole('button', { name: '󰒿' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Welcome back,' })).toBeVisible();
    await expect(page.getByRole('button', { name: '󰇚' })).toBeVisible();
    await page.getByRole('button', { name: '󰇚' }).click();
    await expect(page.locator('div').filter({ hasText: '!' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Are you sure?' })).toBeVisible();
    await expect(page.getByText('Do you want to download the')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Yes, download it!' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.locator('.content-wrapper')).toBeVisible();
    await page.getByRole('button', { name: '󰇚' }).click();
    await expect(page.locator('div').filter({ hasText: '!' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Are you sure?' })).toBeVisible();
    await expect(page.getByText('Do you want to download the')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Yes, download it!' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
    await page.getByRole('button', { name: 'Yes, download it!' }).click();
    await expect(page.locator('.swal2-success-ring')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Downloaded!' })).toBeVisible();
    await expect(page.getByText('The student report has been')).toBeVisible();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.close();
})