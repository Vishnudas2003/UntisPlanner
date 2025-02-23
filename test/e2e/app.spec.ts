import {test, expect} from "@playwright/test"

test("has title", async ({page}) => {
  await page.goto("http://localhost:3001/")

  await expect(page).toHaveTitle(/UntisPlanner/)
})

test("get started link", async ({page}) => {
  await page.goto("https://playwright.dev/")

  await page.getByRole("link", {name: "Get started"}).click()

  await expect(page.getByRole("heading", {name: "Installation"})).toBeVisible()
})
