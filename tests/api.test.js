const { test, expect } = require('@playwright/test');

test('hello world API test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const text = await page.innerText('body');
  expect(text).toBe('Hello, World!');
});
