import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');  //nodejs path package

test.describe('Upload Files with Parameterize Test Approach', () => {

    // Test will run for each fileName, SO we can check the same cases for different file formats

    const fileName = ['testFile.txt' , 'testImage.png'];

    for (const name of fileName) {
        test(`Should Upload the ${name} File Successfully`, async ({ page }) => {

            const uploadFileBtn =  page.locator('#upload_1');
            const successMessage =  page.locator('#wfu_messageblock_header_1_1');
    
            // open URL
            await page.goto('https://practice.sdetunicorns.com/cart/');
    
            // provide test file path
            //create a new folder as data and put the file inside it
            // eslint-disable-next-line no-undef
            const filePath = path.join(__dirname , `../data/${name}`);
    
    
            // upload test file
    
            //Note: We have to make sure that input selector should have the input type equals file. (input type="file" ..... )
            await page.setInputFiles('input#upfile_1', filePath);  
    
            //click the submit button
            await uploadFileBtn.click();
            
            
            // assertion
            expect(await successMessage.textContent()).toContain('uploaded successfully');
    
    
    
        })
    }


})

