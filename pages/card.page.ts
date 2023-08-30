import {Page} from '@playwright/test';
import UploadComponent from './component/upload.component';

class CardPage {
    page: Page;

 constructor(page: Page){
    this.page = page;

 }

 useUploadComponent(){
    return new UploadComponent(this.page);
 }

 async  navigate() {
    await this.page.goto('https://practice.automationbro.com/cart/');

}

}
export default CardPage; 