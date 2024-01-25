import { test, expect } from "@playwright/test";
const UI_URL = "http://localhost:5173/";
test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
});
test("Should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}/addhotel`);

  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test city");
  await page.locator('[name="Country"]').fill("Test Country");
  await page.locator('[name="Description"]').fill("Description test for hotel");
  await page.locator('[name="pricePerNight"]').fill("120");
  await page.selectOption("select[name] = starRating", "3");
  await page.getByText("budget").click();
  await page.getByLabel("free wifi").check();
  await page.getByLabel("parking").check();
  await page.locator('[name="adultCount"]').fill("5");
  await page.locator('[name="childcount"]').fill("2");
});
