const { test, expect } = require('@playwright/test');
const { readExcelData } = require('../utils/excelUtils');
//import LoginPage from '../pages/loginPage';
const LoginPage = require('../pages/loginPage');

const excelData = readExcelData('E:\\playwrite\\pw-learning\\testData\\testData.xlsx', 'Sheet1');

test('Login Test using Excel + POM', async ({ page }) => 
    {
      const user = excelData[0];    // First row
      const loginPage = new LoginPage(page);
      await page.goto('https://practicetestautomation.com/practice-test-login/');
      await loginPage.login(user.Username,user.Password);
      await expect(page.getByText('Logged In Successfully')).toBeVisible();
});
