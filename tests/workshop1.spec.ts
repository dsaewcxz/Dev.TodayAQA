import {test} from 'playwright/test';

test.skip('Using Various Locator Methods', async ({page})=>{
    await page.goto(" https://gitlab.com/ ");

    await page.locator('#be-nav-navigation');
    await page.getByRole('button', {name: 'Search'}).click();
    await page.waitForTimeout(2000);
    await page.locator('#be-nav-search-content__input slp-mb-16');
    const newTodo = await page.getByRole('textbox', { name: 'Search' });
    await newTodo.fill('Henlo Hanna, ti umnica');
    await newTodo.press('Enter');
    await page.waitForTimeout(5000);
    
})
