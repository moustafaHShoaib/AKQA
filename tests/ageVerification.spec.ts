import { test, expect, Page } from "@playwright/test";
import { ageVerificationPage } from "../pageObject/ageVerificationPage";
import { webContentPage } from "../pageObject/webContentPage";
import { describe } from "node:test";

test.describe("Age Verification Happy Flows", () => {
  test("Enter a valid Age", async ({ page }) => {
    const ageVerificationpage = new ageVerificationPage(page);
    const webContentpage = new webContentPage(page);

    await ageVerificationpage.gotoAgeVerificationPage();
    await ageVerificationpage.EnterDateOFBirth(18,100);
    await webContentpage.AssertlandingOnMainPage()
  })

})


test.describe("Age Verification unhappy Flows", () => {
  test("Enter invalid Age", async ({ page }) => {
    const ageVerificationpage = new ageVerificationPage(page);
    const webContentpage = new webContentPage(page);

    await ageVerificationpage.gotoAgeVerificationPage();
    await ageVerificationpage.EnterDateOFBirth(15,16);
    expect(ageVerificationpage.year).toBeVisible()
   
  })

})