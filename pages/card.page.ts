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
    await this.page.goto('/cart/');

}

}
export default CardPage; 