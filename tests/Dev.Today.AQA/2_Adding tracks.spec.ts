import { test, expect } from "playwright/test";

test("Add track", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");

  await page
    .locator("div")
    .filter({ hasText: /^Summer Breeze03:35\+$/ })
    .getByRole("button")
    .click();

  await page.waitForTimeout(2000);

  await expect(
    page.getByText("Summer Breeze03:35-", { exact: true }),
  ).toBeVisible();

  await page.waitForTimeout(2000);
});

test.skip("Add track, ERROR", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");

  await page
    .locator("div")
    .filter({ hasText: /^Winter Winds04:00\+$/ })
    .getByRole("button")
    .click();

  await page.waitForTimeout(2000);

  await expect(
    page.getByText("Summer Breeze03:35-", { exact: true }),
  ).toBeVisible();
});