import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import BlogPage from '../pages/blog.page';

test.describe('Challange 1', () => {
    let contactPage: ContactPage;

    test('Contact Exercise', async ({ page }) => {
        contactPage = new ContactPage(page);
        /*
        Access Contact page
        Fill The form
        Submit the form
        Assert the success message
        */

        await contactPage.navigate();
        
        await contactPage.contactMenu.click();
         await expect(page).toHaveURL(/.*contact/);

         await contactPage.fillTextAndSendMessage();



        await expect( contactPage.successMsg).toBeVisible();

        expect (await contactPage.successMsg.textContent()).toContain(contactPage.successMsgText);

        await expect(contactPage.successMsg).toHaveText(contactPage.successMsgText);

        
    })
})

test.describe('Challange 2', () => {
    let blogPage: BlogPage;
    test('Blog Excercise', async ({ page }) => {
        blogPage = new BlogPage(page);
    /*
    Access Blog page
    Get the length of recentPosts posts
    Expect min char lenght of each individual post item should be > 10
    */

    await blogPage.navigate();

    await blogPage.blogMenu.click();
    await expect(page).toHaveURL(/.*blog/);


    expect(await blogPage.findlenghtOfRecentPosts()).toEqual(5);

    //loop through the list and assett the chr lenght >10
    for (const el of await blogPage.recentPosts.elementHandles()) {
    
      console.log( (await el.textContent())!.length);
     expect((await el.textContent())!.trim().length).toBeGreaterThan(10); //!  ===   exclamation means, el.textContent() will always have a text, no risk with null cases
    }


    })
    
})