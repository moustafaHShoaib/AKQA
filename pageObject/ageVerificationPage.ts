import { expect, type Locator, type Page } from "@playwright/test";
const testData = require("../testData.json");
import { addYears, max, subYears } from 'date-fns';

export class ageVerificationPage {
  readonly page: Page;
  readonly day: Locator;
  readonly month: Locator;
  readonly year: Locator;

  constructor(page: Page) {
    this.page = page;
    this.day = page.getByPlaceholder("DD");
    this.month = page.getByPlaceholder("MM");
    this.year = page.getByPlaceholder("YYYY");
  }

  async gotoAgeVerificationPage() {
    await this.page.goto(testData.URL);
    await this.page.waitForLoadState();
  }

async getRandomDateOfBirth(minAge:number,maxAge:number) {
  const currentDate = new Date();
  const maxDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());
  const minDate = new Date(currentDate.getFullYear() - maxAge, currentDate.getMonth(), currentDate.getDate());

  const randomTimestamp = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
  const randomDate = new Date(randomTimestamp);

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const dateFormatter = new Intl.DateTimeFormat('en-US');

  return dateFormatter.format(randomDate);
}

  async EnterDateOFBirth(minAge:number,maxAge:number) {
   const date=this.getRandomDateOfBirth(minAge,maxAge)
   const dateParts = (await date).split('/');
    await this.day.click();
    await this.day.fill(parseInt(dateParts[1], 10).toString());
    await this.month.click();
    await this.month.fill(parseInt(dateParts[0], 10).toString());
    await this.year.click();
    await this.year.fill(parseInt(dateParts[2], 10).toString());
  }
}
