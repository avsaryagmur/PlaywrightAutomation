import { Page, Locator } from "@playwright/test";

class ContactPage{
    page: Page;
    contactMenu: Locator;
    nameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    messageField: Locator;
    submitButton: Locator;
    successMsg: Locator;
    successMsgText: string;
    fillName: string;
    fillEmail: string;
    fillPhone: string;
    fillMessage: string;

    constructor(page){
        this.page = page;
        this.contactMenu =  page.locator('#zak-primary-nav >> text=contact');
        this.nameField =  page.locator('#evf-277-field_ys0GeZISRs-1');
        this.emailField =  page.locator('#evf-277-field_LbH5NxasXM-2');
        this.phoneField =  page.locator('#evf-277-field_66FR384cge-3');
        this.messageField =  page.locator('#evf-277-field_yhGx3FOwr2-4');
        this.submitButton =  page.locator('#evf-submit-277');
        this.successMsg =  page.locator("div[role='alert']");
        this.successMsgText = 'Thanks for contacting us! We will be in touch with you shortly' ;


        this.fillName = 'test test';
        this.fillEmail = 'test@gmail.com';
        this.fillPhone = '+49123456789';
        this.fillMessage= '!! - Playwright Automation Test';


    }

    async  navigate() {
        await this.page.goto('https://practice.automationbro.com/cart/');
    
    }

    async fillTextAndSendMessage(){
            await this.nameField.fill(this.fillName);
            await this.emailField.fill(this.fillEmail);
            await this.phoneField.fill(this.fillPhone);
            await this.messageField.fill(this.fillMessage);
            await this.page.waitForTimeout(3000);

            await this.submitButton.click();
   
         }

}

export default ContactPage;