import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ItemPage extends BasePage {
  readonly itemPrice = this.page.getByTestId('produt-detail-container').getByLabel('$');
  readonly btnAddToCart = this.page.getByTestId('produt-detail-container').getByTestId('pdc-btn-addtocart');
  readonly btnViewCart = this.page.getByTestId('pdc-add-to-cart-modal-btn-viewcart');
  
  constructor(page: Page) {
    super(page);
  }

  async checkprice() {
    const price = await this.itemPrice.textContent();
    return price;
  }

  async addtocart() {
    
    await this.btnAddToCart.click();
  }

  async viewcart() {
    await this.btnViewCart.click();
  }
  
}
