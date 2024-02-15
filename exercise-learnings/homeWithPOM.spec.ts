import { test, expect } from '@playwright/test';
import HomePage  from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;  // create a new variable & homePage has a type of the HomePage class

    test('Open Home and verify title', async ({ page }) => {
        homePage = new HomePage(page); //initiale the homePage

        //Open the URL
         await homePage.navigate();


        //verift title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
        
    })


        //CSS Selector
        test('Click get started button using CSS Selector', async ({ page }) => {
            homePage = new HomePage(page); //initiale the homePage

        await homePage.navigate();

    
            //await page.locator("#get-started").click(); 
            await homePage.getStartedButton.click();

            await expect(page).toHaveURL(/.*#get-started/);
    
        })

        test('Verify heading text is visible using text selector', async ({ page }) => {
            homePage = new HomePage(page); //initiale the homePage

        
        await homePage.navigate();

    
            await homePage.headingText.click(); 
        
            //verify the headingText is visible
           await expect(homePage.headingText).toBeVisible();
        
      })
        
           //Text Selector and CSS Selector Together (>>)
           test('Verify home link is enabled using text and css selector', async ({ page }) => {
            homePage = new HomePage(page); //initiale the homePage
            
        await homePage.navigate();

            
            //verify the homeText is enabled
           await expect(homePage.homeText).toBeEnabled();
        
      })
          
             // Xpath selector
             test('Verify search icon is visible using Xpath selector', async ({ page }) => {
                homePage = new HomePage(page); //initiale the homePage

             await homePage.navigate();

                                
                    //verify the homeText is enabled
                 await expect(homePage.searchIcon).toBeVisible();
                
              })
    
              //Multiple elements
              test('Verify text of all nav links', async ({ page }) => {
                homePage = new HomePage(page); //initiale the homePage

                const expectedNavLinks = [
                    "Home",
                    "About",
                    "Shop",
                    "Blog",
                    "Contact",
                    "My account",
                ];
    
                await homePage.navigate();
                       
               //verify nav links texts
              //  expect(await homePage.navLinks.allTextContents()).toEqual(expectedNavLinks); //Note: toEqual is not a promise, so i deleted the await 

              expect(await homePage.getNavLinkText()).toEqual(expectedNavLinks);

    
             expect(await homePage.navLinks.count()).toEqual(6);

    
             })
    
             //Multiple elements // nth locator
              test('Verify text of specific nav link using the nth locator', async ({ page }) => {
                homePage = new HomePage(page); //initiale the homePage

                const expectedNavLinks = [
                    "Home",
                    "About",
                    "Shop",
                    "Blog",
                    "Contact",
                    "My account",
                ];
    
            await homePage.navigate();

           
    
                //find the nav link texts
                const specificNavLink =  homePage.navLinks.nth(3); // it will find element by index // also you can use first() , last()
                   
               //verify nav links texts
                expect(await specificNavLink.textContent()).toEqual(expectedNavLinks[3]); //Note: toEqual is not a promise, so i deleted the await 
    
    
             })
    

    
})