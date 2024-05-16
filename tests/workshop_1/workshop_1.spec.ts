import {test} from 'playwright/test';

//Descripcion de la prueba
test('Basic Navigation', async ({page})=>{
    //Usaremos la pagina gitlab
    await page.goto('https://gitlab.com/');
    //Tiempo de espera para ver el contenido de la pagina
    await page.waitForTimeout(3000);
    await page.reload();
})

test('Interacting with Web Element on Gitlab', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.locator('#be-navigation-mobile');
})