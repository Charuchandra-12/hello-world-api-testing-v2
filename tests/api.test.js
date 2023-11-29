const { test, expect } = require('@playwright/test');

test('Hello World API test', async ({ page }) => {
  // console.log('Before navigating to the URL');
  await page.goto('http://localhost:3000');
  // console.log('After navigating to the URL');
  const text = await page.innerText('body');
  expect(text).toBe('Hello, World!');
});
