import { test, expect } from '@playwright/test';

test('portfolio renders without errors and navigation reaches projects', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Abdul Hakeem', exact: true })).toBeVisible();
  await expect(page.getByAltText('Abdul Hakeem wearing a navy blazer')).toBeVisible();
  await expect.poll(() => page.getByAltText('Abdul Hakeem wearing a navy blazer').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  const menu = page.getByRole('button', { name: 'Open navigation' });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects' }).click();
    await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  } else {
    await page.getByRole('link', { name: 'View My Work' }).click();
  }
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole('heading', { name: 'My Projects', exact: true })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test('CV is a real PDF and contact links point to supplied details', async ({ page, request }) => {
  await page.goto('/');
  const cv = page.locator('a[download]').first();
  const href = await cv.getAttribute('href');
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  await expect(page.getByRole('link', { name: 'Send a Message' })).toHaveAttribute('href', 'mailto:mha.abdulhakeem@gmail.com?subject=Portfolio%20enquiry');
  await expect(page.getByRole('link', { name: 'Abdul Hakeem on LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/abdul-hakeem-a0b075254/');
});
