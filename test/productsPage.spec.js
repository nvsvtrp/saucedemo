const PageManager = require("../PageObject/page.manager");

describe("Sauce Demo Web-Site. Products Page Tests.", () => {
  let pageManager;

  before(async () => {
    pageManager = new PageManager(browser);
  });

  beforeEach("Login as a problem user", async () => {
    await browser.url("https://www.saucedemo.com/");
    await pageManager.loginPage.login(
      pageManager.userCredentials.logins.standardUser,
      pageManager.userCredentials.passwords.universalPassword
    );
  });

  afterEach("Log out", async () => {
    const logoutButtonSelector = "#react-burger-menu-btn";
    const isLogoutButtonExisting = await browser.$(logoutButtonSelector).isExisting();
    if (isLogoutButtonExisting) {
      await pageManager.productsPage.resetAndLogoutViaButton();
    }

  });

  it("Add 'Sauce Labs Backpack' to cart. Delete 'Sauce Labs Backpack'", async () => {
      await pageManager.productsPage.buttons.backpackAdd.click();
      await expect(pageManager.productsPage.labels.shoppingCartBadge).toHaveText('1');
      await pageManager.productsPage.buttons.backpackRemove.click();
      await expect(pageManager.productsPage.labels.shoppingCartBadge).not.toBeDisplayed();
  })

  it("Add all items to cart. Shopping Cart Badge displays 6", async () => {
      await pageManager.productsPage.addAllItems();
      await expect(pageManager.productsPage.labels.shoppingCartBadge).toHaveText('6');
  })

  it("Add all items to cart. Remove every item via button 'Remove", async () => {
    await pageManager.productsPage.addAllItems();
    await pageManager.productsPage.removeAllItems();
    await expect(pageManager.productsPage.labels.shoppingCartBadge).not.toBeDisplayed();
  })

  it("Check images", async () => {
    await pageManager.productsPage.checkAllImages();
    });

  it("Check sort by alphabet(z to a)", async () => {
    const fromZtoA = pageManager.productsPage.buttons.sortContainer;
    await pageManager.productsPage.buttons.sortContainer.click();
    await fromZtoA.selectByAttribute("value", "za");
    const firstItem = await pageManager.productsPage.labels.inventoryItem;
    const itemName = await firstItem.$(".inventory_item_name").getText();
    await expect(itemName).toContain("Test.allTheThings() T-Shirt (Red)");
  });

  it("Check sort by price(low to high)", async () => {
    const fromLowToHigh = pageManager.productsPage.buttons.sortContainer;
    await pageManager.productsPage.buttons.sortContainer.click();
    await fromLowToHigh.selectByAttribute("value", "lohi");
    const firstItem = await pageManager.productsPage.labels.inventoryItem;
    const itemName = await firstItem.$(".pricebar").getText();
    const minPrice = await getMinPrice();
    await expect(itemName).toContain(minPrice);
  });

  it("Check sort by price(high to low)", async () => {
    const fromLowToHigh = pageManager.productsPage.buttons.sortContainer;
    await pageManager.productsPage.buttons.sortContainer.click();
    await fromLowToHigh.selectByAttribute("value", "hilo");
    const firstItem = await pageManager.productsPage.labels.inventoryItem;
    const itemName = await firstItem.$(".pricebar").getText();
    const maxPrice = await getMaxPrice();
    await expect(itemName).toContain(maxPrice);
  });

  it("should find the highest price among the inventory items", async () => {
    await pageManager.productsPage.items.backpackItemName.click();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe(
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
  });

  it("Response test", async()=> {
    await pageManager.productsPage.buttons.burgerMenu.click();
    await pageManager.productsPage.buttons.burgerAbout.click();
    const statusCode = await browser.executeAsync((done) => {
        fetch('https://saucelabs.com/')
            .then(response => done(response.status))
            .catch(error => done(error));
    });
    expect(statusCode).toEqual(200);
  })

  async function getMaxPrice() {
    const priceElements = await $$(".inventory_item_price");
    const prices = [];
    for (const element of priceElements) {
      const priceText = await element.getText();
      prices.push(priceText);
    }
    const maxPriceText = prices.reduce((max, price) => {
      const maxValue = parseFloat(max.replace("$", "").trim());
      const currentValue = parseFloat(price.replace("$", "").trim());
      return currentValue > maxValue ? price : max;
    });
    return maxPriceText;
  }

  async function getMinPrice() {
    const priceElements = await $$(".inventory_item_price");
    const prices = [];
    for (const element of priceElements) {
      const priceText = await element.getText();
      prices.push(priceText);
    }
    const minPriceText = prices.reduce((min, price) => {
      const minValue = parseFloat(min.replace("$", "").trim());
      const currentValue = parseFloat(price.replace("$", "").trim());
      return currentValue < minValue ? price : min;
    });
    return minPriceText;
  }
});
