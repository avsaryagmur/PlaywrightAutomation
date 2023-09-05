import {Page, Locator} from '@playwright/test';

class UploadComponent {
    page: Page;
    uploadFileBtn: Locator;
    uploadInput: string;
    successMessage: Locator;

 constructor(page: Page){
    this.page = page;
    this.uploadFileBtn =  page.locator('#upload_1');
    this.uploadInput =  'input#upfile_1';
    this.successMessage  =  page.locator('#wfu_messageblock_header_1_1');

 }

 async uploadFile(filePath: string){
            //Note: We have to make sure that input selector should have the input type equals file. (input type="file" ..... )
            await this.page.setInputFiles(this.uploadInput, filePath);  

            //click the submit button
            await this.uploadFileBtn.click();
 }



}
export default UploadComponent; 