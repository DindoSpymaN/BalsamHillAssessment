import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { ResultPage } from '../pages/result.page';
import { ItemPage } from '../pages/item.page';
import { CartPage } from '../pages/cart.page';

test('automation code assessment', async ({ page }) => {
    const mainPage = new MainPage(page);
    const resultPage = new ResultPage(page);
    const itemPage = new ItemPage(page);
    const cartPage = new CartPage(page);

    await mainPage.navigate('https://www.balsamhill.com/');
    await mainPage.searchBarInput.isEnabled();
    await mainPage.search('Christmas Tree');
    await expect(page).toHaveURL('https://www.balsamhill.com/search?text=Christmas+Tree&sort=relevanceSort');
    await expect(resultPage.searchResult).toBeVisible();
    await resultPage.cellResults.isEnabled();
    const searchPrice = await resultPage.selectResult(3);
    const itemPrice = await itemPage.checkprice();
    expect(searchPrice).toEqual(itemPrice);
    await itemPage.addtocart();
    await itemPage.viewcart();
    const cartPrice = await cartPage.checkprice();
    expect(searchPrice).toEqual(cartPrice);
    await expect(cartPage.cartItem).toBeVisible();
    await cartPage.removeItem();
    await expect(cartPage.removedItem).toBeVisible();
    await page.close();
});
