import {test, expect} from 'playwright/test';


test('Search Functionality, single search', async({page})=>{
    
    await page.goto('https://vite-react-alpha-lemon.vercel.app/');

    const newTodo = await page.getByRole('textbox', { name: 'Search' });
    await newTodo.fill('Summer');
    await page.waitForTimeout(2000);

    const firstTodo = await page.getByRole('paragraph').getByText('Summer Breeze');
    await expect(firstTodo).toHaveClass('MuiTypography-root MuiTypography-body1 css-3ffyn9');

    await page.waitForTimeout(2000);

})

test('Search Functionality, multiple(2) search', async({page})=>{

    await page.goto('https://vite-react-alpha-lemon.vercel.app/');

    const newTodo = await page.getByRole('textbox', { name: 'Search' });
    await newTodo.fill('um');
    await page.waitForTimeout(2000);

    const firstTodo = await page.getByRole('paragraph').getByText('Summer Breeze');
    const secondTodo = await page.getByRole('paragraph').getByText('Autumn Leaves');

    await expect(firstTodo).toHaveClass('MuiTypography-root MuiTypography-body1 css-3ffyn9');
    await expect(secondTodo).toHaveClass('MuiTypography-root MuiTypography-body1 css-3ffyn9');

    await page.waitForTimeout(2000)
    
})

test('Search Functionality, "Not found" search', async({page})=>{
    
    await page.goto('https://vite-react-alpha-lemon.vercel.app/');

    const newTodo = await page.getByRole('textbox', { name: 'Search' });
    await newTodo.fill('aqatest');
    await page.waitForTimeout(2000);

    await page.getByRole('paragraph').getByText('Not found');
    await page.waitForTimeout(2000)

})

test.skip('Search Functionality, NEGATIVITY SEARCH', async({page})=>{

    await page.goto('https://vite-react-alpha-lemon.vercel.app/');

    const newTodo = await page.getByRole('textbox', { name: 'Search' });
    await newTodo.fill('Rainy');
    
    const firstTodo = await page.getByRole('paragraph').getByText('Summer Breeze');
    await expect(firstTodo).toHaveClass('MuiTypography-root MuiTypography-body1 css-3ffyn9');

})