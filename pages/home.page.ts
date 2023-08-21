class HomePage{

    //in TypeScript we have to specifically declare
    page: any;
    getStartedButton: any;
    headingText: any;
    homeText: any;
    searchIcon: any;
    navLinks: any;
    constructor(page){
        this.page = page; // we need to access page property
        this.getStartedButton = page.locator("#get-started");
        this.headingText =  page.locator('text=Think different. Make different.');
        this.homeText =   page.locator('#zak-primary-nav >> text=Home');
        this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        this.navLinks =   page.locator('#zak-primary-menu li[id*=menu]');

    }

}

export default HomePage; // we need to use this file in another file