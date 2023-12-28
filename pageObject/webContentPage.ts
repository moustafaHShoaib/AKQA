import { expect, type Locator, type Page } from "@playwright/test";
import exp from "constants";
const testData = require('../testData.json');


export class webContentPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly CountrySelector: Locator;
  readonly year: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle=page.locator(".fullbleed_pageTitle__3BSXP-").nth(0)
    this.CountrySelector=page.getByRole("button", {name: 'Country Selector - United' })
  }

  async AssertlandingOnMainPage()
  {
    await this.page.waitForTimeout(2000)
    await this.page.waitForLoadState("domcontentloaded");
    // make sure the landing page is the main page
    await expect(this.page).toHaveURL(testData.URL);
    expect(this.pageTitle).toHaveText("The Best Nights Of Your Life")
    expect(this.CountrySelector).toBeVisible()
  }
}