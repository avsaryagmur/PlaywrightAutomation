import {Page, Locator} from '@playwright/test'; //Enable the Auto Suggestion for PageObjects

class HomePage{

    //in TypeScript we have to specifically declare
    page: Page;
    getStartedButton: Locator;
    headingText: Locator;
    homeText: Locator; 
    searchIcon: Locator;
    navLinks: Locator;
    constructor(page){
        this.page = page; // we need to access page property
        this.getStartedButton = page.locator("#get-started");
        this.headingText =  page.locator('text=Think different. Make different.');
        this.homeText =   page.locator('#zak-primary-nav >> text=Home');
        this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        this.navLinks =   page.locator('#zak-primary-menu li[id*=menu]');

    }

    async  navigate() {
        await this.page.goto("https://practice.automationbro.com/");

    }

     getNavLinkText() {
  //Actually,we do not have to add async because when we do return, it will simply return the promise.
        return this.navLinks.allInnerTexts();

    }

}

export default HomePage; // we need to use this file in another file