import { test, expect } from '@playwright/test';

test('Karukichi blog search logic test', async ({ page, browserName }) => {
  const postTitle = '「社内の採用サイトを microCMS・Next.js・AWS Amplifyを使ってリプレイスした話」の補足記事'

  await page.goto('https://karukichi-blog.netlify.app/');

  await page.getByRole('textbox', { name: 'キーワード' }).fill('React');

  await page.getByRole('link', { name: postTitle}).click();
  await expect(page).toHaveURL('https://karukichi-blog.netlify.app/blogs/recruitment-site-replace');
  await page.waitForTimeout(2000)
  await page.getByRole('heading', { name: postTitle }).isVisible()

  await page.screenshot({ path: `screenshot/blog/${browserName}.png` });
});
