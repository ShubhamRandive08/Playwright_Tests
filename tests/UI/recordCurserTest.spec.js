import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Shubham');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SJSJSJJSJS');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible(); 
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});