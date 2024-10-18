import { test, expect } from "playwright/test";

test("Add multiple tracks", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");

  await page
    .locator("div")
    .filter({ hasText: /^Autumn Leaves03:00\+$/ })
    .getByLabel("controlled")
    .check();
  await page
    .locator("div")
    .filter({ hasText: /^Spring Dance03:20\+$/ })
    .getByLabel("controlled")
    .check();
  await page.getByRole("button", { name: "ADD 2 tracks" }).click();

  await page.waitForTimeout(2000);
});
test("Remove Multiple tracks", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");

  await page
    .locator("div")
    .filter({ hasText: /^Autumn Leaves03:00\+$/ })
    .getByLabel("controlled")
    .check();
  await page
    .locator("div")
    .filter({ hasText: /^Spring Dance03:20\+$/ })
    .getByLabel("controlled")
    .check();
  await page.getByRole("button", { name: "ADD 2 tracks" }).click();

  await page
    .locator("div")
    .filter({ hasText: /^Autumn Leaves03:00\-$/ })
    .getByLabel("controlled")
    .check();
  await page
    .locator("div")
    .filter({ hasText: /^Spring Dance03:20\-$/ })
    .getByLabel("controlled")
    .check();
  await page.getByRole("button", { name: "REMOVE 2 tracks" }).click();

  await page.waitForTimeout(2000);
});
