import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ResultPage extends BasePage {
  readonly cellResults = this.page.getByTestId('results-grid');
  readonly searchResult = this.page.getByRole('heading', { name: 'Search result for: ‘Christmas' });
  
  constructor(page: Page) {
    super(page);
  }

  async checkprice(intIndex: any) {
    var allStrings = await this.cellResults.locator('.row > .col-md-4').nth(intIndex-1).innerText();
    var containStrings = allStrings.split('\n');
    var retString;
    for (var index in containStrings) {
      if (containStrings[index].indexOf('$') >= 0) retString = containStrings[index];
    }
    return retString;
  }

  async selectResult(intIndex: any) {
    await this.cellResults.locator('.row > .col-md-4').nth(intIndex-1).click();
  }
}
