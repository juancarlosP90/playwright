import {test} from 'playwright/test';

//Descripcion de la prueba
test.skip('Basic Navigation', async ({page})=>{
    //Usaremos la pagina gitlab
    await page.goto('https://gitlab.com/');
    //Tiempo de espera para ver el contenido de la pagina
    await page.waitForTimeout(3000);
    await page.reload();
})

test.skip('Interacting with Web Element on Gitlab', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial'}).click();
    //await page.locator('[data-testid="new-user-first-name-field"]').fill('Juan');
    //await page.locator('[data-testid="new-user-last-name-field"]').fill('Pulido');
    await page.getByTestId('new-user-first-name-field').fill('Juan');
    await page.getByTestId('new-user-last-name-field').fill('Pulido');
})

test.skip('Using Various Locator Methods', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');//cookie btn click
    await page.getByRole('link', {name: 'Sign in'}).click();
})