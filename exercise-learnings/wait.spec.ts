import { test, expect } from '@playwright/test';
const path = require('path');  //nodejs path package



// hardcoded wait
// conditional wait
// assertion wat

test.describe('Waits', () => {
    
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('Hardcoded Wait', async ({ page }) => {
        const uploadFileBtn = await page.locator('#upload_1');
        const successMessage = await page.locator('#wfu_messageblock_header_1_1');

        // open URL
        await page.goto('https://practice.automationbro.com/cart/');

        // provide test file path
        const filePath = path.join(__dirname , '../data/testImage.png');


        // upload test file
        await page.setInputFiles('input#upfile_1', filePath);  

        //click the submit button
        await uploadFileBtn.click();

        //hardcoded sleep -- WRONG WAY
        await page.waitForTimeout(28000);   //28 secs   
        
        // assertion
        await expect(successMessage).toContainText('uploaded successfully');

        
    })

    test('Conditional wait', async ({ page }) => {
        const uploadFileBtn = await page.locator('#upload_1');
        const successMessage = await page.locator('#wfu_messageblock_header_1_1');

        // open URL
        await page.goto('https://practice.automationbro.com/cart/');

        // provide test file path
        const filePath = path.join(__dirname , '../data/testImage.png');


        // upload test file
        await page.setInputFiles('input#upfile_1', filePath);  

        //click the submit button
        await uploadFileBtn.click();

        // wait for condition
        await successMessage.waitFor({state: 'visible' , timeout: 20000}); 
        
        // assertion
        await expect(successMessage).toContainText('uploaded successfully');

    })

    test('Assertion wait', async ({ page }) => {
        const uploadFileBtn = await page.locator('#upload_1');
        const successMessage = await page.locator('#wfu_messageblock_header_1_1');

        // open URL
        await page.goto('https://practice.automationbro.com/cart/');

        // provide test file path
        const filePath = path.join(__dirname , '../data/testImage.png');


        // upload test file
        await page.setInputFiles('input#upfile_1', filePath);  

        //click the submit button
        await uploadFileBtn.click();

        
        // assertion and wait 
        await expect(successMessage).toContainText('uploaded successfully', {timeout: 20000});

    })
    
    
})
