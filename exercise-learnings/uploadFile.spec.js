import { test, expect } from '@playwright/test';
const path = require('path');  //nodejs path package

test.describe('Upload Files', () => {

    test('Upload Regular File', async ({ page }) => {

        const selectFileBtn = await page.locator('#upfile_1');
        const uploadFileBtn = await page.locator('#upload_1');
        const successMessage = await page.locator('#wfu_messageblock_header_1_1');

        // open URL
        await page.goto('https://practice.automationbro.com/cart/');

        // provide test file path
        //create a new folder as data and put the file inside it
        const filePath = path.join(__dirname , '../data/testFile.txt');


        // upload test file

        //Note: We have to make sure that input selector should have the input type equals file. (input type="file" ..... )
        await page.setInputFiles('input#upfile_1', filePath);  

        //click the submit button
        await uploadFileBtn.click();
        
        
        // assertion
        expect(await successMessage.textContent()).toContain('uploadeqd successfully');



    })
    
})

