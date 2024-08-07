const PageManager = require('../PageObject/page.manager');

describe("Sauce Demo Web-Site. Login Page Tests.", () => {
  let pageManager;

  before(async () => {
    pageManager = new PageManager(browser);
  });

  beforeEach(async () => {
    await browser.url("https://www.saucedemo.com/");
  });

  it("Login as a problem user. Login will be successful and you should see Swag Labs logo", async () => {
    await pageManager.loginPage.login('problem_user', 'secret_sauce');
    await expect(pageManager.productsPage.appLogoField).toHaveText("Swag Labs");
  });

});
