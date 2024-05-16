import {test} from '@playwright/test';

test.only('April Factsheet for variis', async ({page})=>{
    await page.goto('https://soraunion.clickup.com/9002016494/home');

    await page.goto('https://soraunion.clickup.com/login');
    await page.locator('[data-test="login-email-input"]').click();
    await page.locator('[data-test="login-email-input"]').fill('juan.pulidorodriguez@soraunion.com');
    await page.locator('[data-test="login-password-input"]').click();
    await page.locator('[data-test="login-password-input"]').fill('Merlin2023*');
    await page.locator('[data-test="login-password-input"]').press('Enter');
    await page.locator('[data-test="simple-bar-item-inbox"]').click();
    await page.getByRole('button', { name: 'APPROVED Current status: approved April Factsheet for variis DB Dropdown menu Hi @Noman Ali - @Alejandra Alas confirmed this task is approved and completed. Please move ahead and close it at your earliest convenience. Thanks! May' }).click();
    await page.getByRole('link', { name: 'April Factsheet for variis' }).click();
    await page.locator('[data-test="task-view-integrations-panel-toggle__tab-Google Drive"]').click();
    
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'https://drive.google.com/file' }).click();
  
    const page1 = await page1Promise;
    const page2Promise = page1.waitForEvent('popup');
    const downloadPromise = page1.waitForEvent('download');

    await page1.getByLabel('Descargar').click();

    const page2 = await page2Promise;
    const download = await downloadPromise;
    await page.waitForTimeout(5000);
})

