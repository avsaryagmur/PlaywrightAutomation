import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Home and verify title', async ({ page }) => {
        //Open the URL
        await page.goto("https://practice.automationbro.com/");

        //verift title
        await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro");
        
    })

    test('Open About Page and verify title', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/about");

        await expect(page).toHaveTitle("About – Practice E-Commerce Site");

    })

    //CSS Selector
    test('Click get started button using CSS Selector', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/");

        await page.locator("#get-started").click(); //We should add await, when we use the promise. click() uses the promise. 

        await expect(page).toHaveURL("https://practice.automationbro.com/#get-started");
        //or
        await expect(page).toHaveURL(/.*#get-started/);

    })
    
     //Text Selector
     test('Verify heading text is visible using text selector', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/");

        const headingText =  await page.locator('text=Think different. Make different.');
        await page.locator("#get-started").click(); //We should add await, when we use the promise. click() uses the promise. 
    
        //verify the headingText is visible
       await expect(headingText).toBeVisible();
    
  })
    
       //Text Selector and CSS Selector Together (>>)
       test('Verify home link is enabled using text and css selector', async ({ page }) => {
        
        await page.goto("https://practice.automationbro.com/");

        const homeText =  await page.locator('#zak-primary-nav >> text=Home'); // find #zak-primary-nav  then check Home Text inside it
    
        //verify the homeText is enabled
       await expect(homeText).toBeEnabled();
    
  })

         //https://playwright.dev/docs/other-locators#css-matching-by-text
         //CSS: matching by text
         test('Verify home link is enabled using CSS: matching by text', async ({ page }) => {
        
            await page.goto("https://practice.automationbro.com/");
    
            const homeText =  await page.locator('#zak-primary-nav:has-text("Home")');
            
            //verify the homeText is enabled
           await expect(homeText).toBeEnabled();
        
      })
      
         // Xpath selector
         test('Verify search icon is visible using Xpath selector', async ({ page }) => {
        
             await page.goto("https://practice.automationbro.com/");
        
             const searchIcon =  await page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
                
                //verify the homeText is enabled
             await expect(searchIcon).toBeVisible();
            
          })



    
})
