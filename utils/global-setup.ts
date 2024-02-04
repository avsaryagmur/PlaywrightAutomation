import { chromium, FullConfig } from "@playwright/test";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config :FullConfig) {
    const browser = await chromium.launch(); 
    const page = await browser.newPage(); //open a browser and use a new page

    
    await page.goto('https://practice.sdetunicorns.com/my-account');
    await page.context().storageState({ path: 'notLoggedInState.json'});  


    //login 
    await page.locator('#username').fill('Playwright Test');
    await page.locator('#password').fill('yagmur12345678');
    await page.locator(`button[value='Log in']`).click();


    // store my current state. => save signed-in state to 'loggedInState.json'

    // .storageState ==> Returns storage state for this browser context, contains current cookies and local storage snapshot.
    await page.context().storageState({ path: 'loggedInState.json'});  
    await browser.close();
}

export default globalSetup;