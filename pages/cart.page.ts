import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly cartPrice = this.page.locator('.text-end > strong').last();
  readonly cartItem = this.page.getByRole('link', { name: 'Cart 1 items' });
  readonly cartTrash = this.page.getByTestId('cc-btn-remove-0');
  readonly removedItem = this.page.locator('a').filter({ hasText: 'has been removed.' });
  
  constructor(page: Page) {
    super(page);
  }

  async checkprice() {
    const price = await this.cartPrice.textContent();
    return price;
  }

  async removeItem() { await this.cartTrash.click(); }
  
}
