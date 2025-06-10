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
    console.log("1. Balsam Hill Landing page is loaded")
    await mainPage.searchBarInput.isEnabled();
    await mainPage.search('Christmas Tree');
    console.log("2. Christmas Tree is searched through search bar.")
    await expect(page).toHaveURL('https://www.balsamhill.com/search?text=Christmas+Tree&sort=relevanceSort');
    await expect(resultPage.searchResult).toBeVisible();
    console.log("3. Results page is loaded.")
    await resultPage.cellResults.isEnabled();
    const searchPrice = await resultPage.checkprice(3);
    await resultPage.selectResult(3);
    console.log("4. Item #3 is selected, price is ", searchPrice)
    const itemPrice = await itemPage.checkprice();
    console.log("5. Item page is loaded, displayed price is ", itemPrice)
    expect(searchPrice).toEqual(itemPrice);
    console.log("6. Both price is the same.")
    await itemPage.addtocart();
    console.log("7. Item is added to cart.")
    await itemPage.viewcart();
    const cartPrice = await cartPage.checkprice();
    console.log("8. Cart is now viewed, total price is ", cartPrice)
    expect(searchPrice).toEqual(cartPrice);
    console.log("9. Price is still the same.")
    await expect(cartPage.cartItem).toBeVisible();
    console.log("10. 1 Mark is visible on cart icon.")
    await cartPage.removeItem();
    await expect(cartPage.removedItem).toBeVisible();
    console.log("11. Item is removed from cart.")
    await page.close();
    console.log("12. Browser is closed.")
});
