import { test, expect } from '@playwright/test';
import CardPage from '../pages/card.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');  //nodejs path package

test.describe('Upload Files - POM - COMPONENT', () => {
    let cardPage: CardPage;

    test('Upload File with Using Component and Pom', async ({ page }) => {
         cardPage = new CardPage(page);
       
        // open URL
        //await page.goto('https://practice.sdetunicorns.com/cart/');
        await cardPage.navigate();

        // provide test file path
        //create a new folder as data and put the file inside it
        const filePath = path.join(__dirname , '../data/testFile.txt');


        // upload test file
        cardPage.useUploadComponent().uploadFile(filePath);
        
        
        // assertion
        expect(await cardPage.useUploadComponent().successMessage.textContent()).toContain('uploaded successfully');



    })
    
})

