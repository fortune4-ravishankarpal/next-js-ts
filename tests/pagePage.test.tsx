import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("http://localhost:3000/react-hook-form-trigger");
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill("ravi");
    await page.locator('input[name="name"]').press("Tab");
    await page.locator('input[name="age"]').fill("21");
    await page.locator('input[name="age"]').press("Tab");
    await page.locator('input[name="email"]').fill("ravi@gaml");
    await page.locator('input[name="email"]').press("Tab");
    await page.locator('input[name="name1"]').click();
    await page.locator('input[name="name1"]').fill("ravi");
    await page.locator('input[name="name1"]').press("Tab");
    await page.locator('input[name="age1"]').fill("21");
    await page.locator('input[name="age1"]').press("Tab");
    await page.locator('input[name="email1"]').fill("ravi@gaml");
    await page.locator('input[name="email1"]').press("Tab");
    await page.getByRole("button", { name: "Submit" }).press("Enter");
    await expect(page.locator("[data-testid='loading']")).toBeVisible();
    await expect(page.locator("[data-testid='loading']")).toHaveText("Loading...");
});
