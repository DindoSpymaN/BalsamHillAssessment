import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
  readonly searchBarInput = this.page.locator('#constructor-search-input');
  
  constructor(page: Page) {
    super(page);
  }

  async search(strSearch: string) {
    await this.searchBarInput.fill(strSearch);
    await this.searchBarInput.press('Enter');
  }
}