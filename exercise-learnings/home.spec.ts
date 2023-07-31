import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Home and verify title', async ({ page }) => {
        //Open the URL
        await page.goto("https://practice.automationbro.com/");

        //verift title
        await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro");
        
    })
    
    
})
