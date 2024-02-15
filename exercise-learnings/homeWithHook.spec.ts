import { test, expect } from '@playwright/test';
import HomePage  from '../pages/home.page';

test.describe('Home Test with HOOK', () => {
    let homePage: HomePage;  // create a new variable & homePage has a type of the HomePage class

    test.beforeAll(async ({ browser }) => {

        console.log("HELLO! I AM BEFORE ALL HOOK")
        
    })
    

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page); //initiale the homePage
         await homePage.navigate();
    })


    test.afterEach(async ({ page }) => {
        console.log("I AM AFTER EACH HOOK")

    })

    test.afterAll(async ({ browser }) => {
        console.log("I AM AFTER ALL HOOK")

    })
    
    
    

    test('Open Home and verify title', async ({ page }) => {
        
        //verift title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
        
    })


        //CSS Selector
    test('Click get started button using CSS Selector', async ({ page }) => {
            //await page.locator("#get-started").click(); 
            await homePage.getStartedButton.click();

            await expect(page).toHaveURL(/.*#get-started/);
    
        })

    test('Verify heading text is visible using text selector', async ({ page }) => {
    
            await homePage.headingText.click(); 
        
            //verify the headingText is visible
           await expect(homePage.headingText).toBeVisible();
        
      })
        
           //Text Selector and CSS Selector Together (>>)
      test('Verify home link is enabled using text and css selector', async ({ page }) => {
            
            //verify the homeText is enabled
           await expect(homePage.homeText).toBeEnabled();
        
      })
          
             // Xpath selector
       test('Verify search icon is visible using Xpath selector', async ({ page }) => {                         
                    //verify the homeText is enabled
                 await expect(homePage.searchIcon).toBeVisible();
                
        })
    
              //Multiple elements
         test('Verify text of all nav links', async ({ page }) => {

                const expectedNavLinks = [
                    "Home",
                    "About",
                    "Shop",
                    "Blog",
                    "Contact",
                    "My account",
                ];
                           
               //verify nav links texts
              //  expect(await homePage.navLinks.allTextContents()).toEqual(expectedNavLinks); //Note: toEqual is not a promise, so i deleted the await 

              expect(await homePage.getNavLinkText()).toEqual(expectedNavLinks);

    
             expect(await homePage.navLinks.count()).toEqual(6);

    
        })
    
             //Multiple elements // nth locator
        test('Verify text of specific nav link using the nth locator', async ({ page }) => {

                const expectedNavLinks = [
                    "Home",
                    "About",
                    "Shop",
                    "Blog",
                    "Contact",
                    "My account",
                ];
    
           
    
                //find the nav link texts
                const specificNavLink =  homePage.navLinks.nth(3); // it will find element by index // also you can use first() , last()
                   
               //verify nav links texts
                await expect(specificNavLink).toHaveText(expectedNavLinks[3]); //Note: toEqual is not a promise, so i deleted the await 
    
    
      })
    

    
})