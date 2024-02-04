import { test, expect } from '@playwright/test';

test.describe('Challange 1', () => {

    test('Contact Exercise', async ({ page }) => {
        /*
        Access Contact page
        Fill The form
        Submit the form
        Assert the success message
        */

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

        //await page.pause(); ADDED FOR DEBUGGING 

        await nameField.fill('test test');
        await emailField.fill('test@gmail.com');
        await phoneField.fill('+49123456789');
        await messageield.fill('!! - Playwright Automation Test')
      //  await page.waitForTimeout(3000);
        await submitButton.click();

        await expect( successMsg).toBeVisible();
        expect(await successMsg.textContent()).toContain(successMsgText);
        //or
        await expect(successMsg).toHaveText(successMsgText);

        
    })
})

test.describe('Challange 2', () => {
    
    test('Blog Excercise', async ({ page }) => {
    /*
    Access Blog page
    Get the length of recentPosts posts
    Expect min char lenght of each individual post item should be > 10
    */
    const blogMenu = await page.locator('#zak-primary-nav >> text=blog');

    await page.goto("https://practice.sdetunicorns.com/");

    await blogMenu.click();
    await expect(page).toHaveURL(/.*blog/);

    const recentPosts = await page.locator('#recent-posts-3 ul li');

    const lenghtOfRecentPosts =  await recentPosts.count();

    //assert the total list count is 5
    expect(lenghtOfRecentPosts).toEqual(5);

    
    //loop through the list and assett the chr lenght >10
    for (const el of await recentPosts.elementHandles()) {
    
        console.log( (await el.textContent())!.length);
      expect((await el.textContent())!.trim().length).toBeGreaterThan(10);
    }


    })
    
})

