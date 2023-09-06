import { test, expect, Page } from "@playwright/test";

test.describe('My Account - Authentication - BEFORE EACH', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('#username').fill('Playwright Test');
        await page.locator('#password').fill('yagmur12345678');
        await page.locator(`button[value='Log in']`).click();
        await expect(page.locator(`li a[href*='customer-logout']`)).toBeVisible();
    
    })
    

    test('Access Download', async ({ page }) => {
        await page.locator(`li a[href*= 'downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
             
    })

    test('Access Orders', async ({ page }) => {
        await page.locator(`li a[href*= 'orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
             
    })
    
    
})


test.describe.serial('My Account - Authentication - BEFORE ALL', () => {

   // we can not run before all in parallel, because it will login one and it is not usable in two browser.
   // so we will run test one after the other (serilized)

   let page: Page

    test.beforeAll(async ({browser}) => {
        page = await browser.newPage(); //open a bowser and use a new page


        await page.goto('/my-account');
        await page.locator('#username').fill('Playwright Test');
        await page.locator('#password').fill('yagmur12345678');
        await page.locator(`button[value='Log in']`).click();
        await expect(page.locator(`li a[href*='customer-logout']`)).toBeVisible();
    
    })
    

    // you do not need , async ({page}) , because we already have created a page in beforeAll

    test('Access Download', async () => {
        await page.locator(`li a[href*= 'downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
             
    })

    test('Access Orders', async () => {
        await page.locator(`li a[href*= 'orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
             
    })
    
    
})
