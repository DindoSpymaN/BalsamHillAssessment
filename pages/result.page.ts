import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ResultPage extends BasePage {
  readonly cellResults = this.page.getByTestId('results-grid');
  readonly searchResult = this.page.getByRole('heading', { name: 'Search result for: ‘Christmas' });
  
  constructor(page: Page) {
    super(page);
  }

  async selectResult(intIndex: any) {
    var allStrings = await this.cellResults.locator('.row > .col-md-4').nth(intIndex-1).innerText();
    var containStrings = allStrings.split('\n');
    const retString = containStrings[3];
    await this.cellResults.locator('.row > .col-md-4').nth(intIndex-1).click();
    return retString;
  }
}
