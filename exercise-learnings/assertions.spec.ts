import { test, expect } from '@playwright/test';


// eslint-disable-next-line playwright/no-skipped-test
test.describe.skip(' Assertions', () => {

    /*
    By default, failed assertion will terminate test execution. Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.
    It helps to you can make sure all the other steps are working.
    */
    test('Soft Assertion', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");

        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.");

        await page.locator("#get-started").click(); 

        //SOFT ASSERTION
        await expect.soft(page).toHaveTitle("This text will be failed, but thanks to .soft, the all test will run then it will take fail after that.");

        await expect(page).toHaveURL("https://practice.sdetunicorns.com/#get-started");
        //or
        await expect(page).toHaveURL(/.*#get-started/);
        
    })

    test('Avoid running further if there were soft assertion failures', async ({ page }) => {
      //NOTE: This text will take error - line 57

        await page.goto("https://practice.sdetunicorns.com/");

        const contactMenu = await page.locator('#zak-primary-nav >> text=contact');
        const nameField = await page.locator('#evf-277-field_ys0GeZISRs-1');
        const emailField = await page.locator('#evf-277-field_LbH5NxasXM-2');
        const phoneField = await page.locator('#evf-277-field_66FR384cge-3');
        const messageield = await page.locator('#evf-277-field_yhGx3FOwr2-4');
        const submitButton = await page.locator('#evf-submit-277');
        const successMsg = await page.locator("div[role='alert']");
        const successMsgText = 'Thanks for contacting us! We will be in touch with you shortly' ;

        await contactMenu.click();
         await expect(page).toHaveURL(/.*contact/);

        await nameField.fill('test test');
        await emailField.fill('test@gmail.com');
        await phoneField.fill('+49123456789');
        await messageield.fill('!! - Playwright Automation Test')
         //  await page.waitForTimeout(3000);
        await submitButton.click();


        // Make a few checks that will not stop the test when failed...
        await expect.soft(page).toHaveTitle("This text will be failed, but thanks to .soft, the all test will run then it will take fail after that.");

        await expect( successMsg).toBeVisible();

        // Avoid running further if there were soft assertion failures.
        expect(test.info().errors.length).toBeLessThan(1);
        //or
        expect(test.info().errors).toHaveLength(0);

        // test will not run, we can not see the result of this assertion
        await expect(successMsg).toHaveText(successMsgText);

        
    })
        
    })
    
    
    

