const BasePage = require("./base.page");

class ProductsPage extends BasePage {
  get labels() {
    return {
      shoppingCartBadge: $('[data-test="shopping-cart-badge"]'),
      inventoryList: $('class[data-test="inventory-list"]'),
      inventoryItem: $('.inventory_item'),
      inventoryItemName: $('.inventory_item_name'),
    };
  }

  get buttons() {
    return {
      burgerMenu: $("#react-burger-menu-btn"),
      burgerAllItems: $("#inventory_sidebar_link"),
      burgerAbout: $("#about_sidebar_link"),
      burgerLogout: $("#logout_sidebar_link"),
      burgerResetAppState: $("#reset_sidebar_link"),
      shoppingCart: $("#shopping-cart-link"),

      backpackAdd: $("#add-to-cart-sauce-labs-backpack"),
      backpackRemove: $("#remove-sauce-labs-backpack"),
      bikeLightAdd: $("#add-to-cart-sauce-labs-bike-light"),
      bikeLightRemove: $("#remove-sauce-labs-bike-light"),
      boltTShirtAdd: $("#add-to-cart-sauce-labs-bolt-t-shirt"),
      boltTShirtRemove: $("#remove-sauce-labs-bolt-t-shirt"),
      fleeceJacketAdd: $("#add-to-cart-sauce-labs-fleece-jacket"),
      fleeceJacketRemove: $("#remove-sauce-labs-fleece-jacket"),
      onesieAdd: $("#add-to-cart-sauce-labs-onesie"),
      onesieRemove: $("#remove-sauce-labs-onesie"),
      testTShirtAdd: $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
      testTShirtRemove: $('button[data-test="remove-test.allthethings()-t-shirt-(red)"]'),

      sortContainer: $('[data-test="product-sort-container"]'),
    };
  }

  get images() {
    return {
      backpackImage: $('img[data-test="inventory-item-sauce-labs-backpack-img"]'),
      bikeLightImage: $('img[data-test="inventory-item-sauce-labs-bike-light-img"]'),
      boltTShirtImage: $('img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]'),
      fleeceJacketImage: $('img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]'),
      onesieImage: $('img[data-test="inventory-item-sauce-labs-onesie-img"]'),
      testTShirtImage: $('img[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]'),
      expectedBackpackImage: '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg',
      expectedBikeLightImage: '/static/media/bike-light-1200x1500.37c843b0.jpg',
      expectedBoltTShirtImage: '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg',
      expectedFleeceJacketImage: '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg',
      expectedOnesieImage: '/static/media/red-onesie-1200x1500.2ec615b2.jpg',
      expectedTestTShirtImage: '/static/media/red-tatt-1200x1500.30dadef4.jpg',
    }
  }
  get items() {
    return {
      backpackItemName: $('.inventory_item_name=Sauce Labs Backpack'),
      bikeLightItemName: $('.inventory_item_name=Sauce Labs Bike Light'),
      boltTShirtItemName: $('.inventory_item_name=Sauce Labs Bolt T-Shirt'),
      fleeceJacketItemName: $('.inventory_item_name=Sauce Labs Fleece Jacket'),
      onesieItemName: $('.inventory_item_name=Sauce Labs Onesie'),
      testTShirtItemName: $('.inventory_item_name=Test.allTheThings() T-Shirt (Red)'),
  }
  }

  get separateItemsField() {
    return {
      fieldForAllItems: $('.inventory_details_name.large_size'),
      backToProducts: $('#back-to-products'),
    }
  }

  async checkAllImages(){
    const backpackSrc = await this.images.backpackImage.getAttribute('src');
    await expect(backpackSrc).toContain(this.images.expectedBackpackImage);
    const bikeLightSrc = await this.images.bikeLightImage.getAttribute('src');
    await expect(bikeLightSrc).toContain(this.images.expectedBikeLightImage);
    const boltTShirtSrc = await this.images.boltTShirtImage.getAttribute('src');
    await expect(boltTShirtSrc).toContain(this.images.expectedBoltTShirtImage);
    const fleeceJacketSrc = await this.images.fleeceJacketImage.getAttribute('src');
    await expect(fleeceJacketSrc).toContain(this.images.expectedFleeceJacketImage);
    const onesieSrc = await this.images.onesieImage.getAttribute('src');
    await expect(onesieSrc).toContain(this.images.expectedOnesieImage);
    const testTShirtSrc = await this.images.testTShirtImage.getAttribute('src');
    await expect(testTShirtSrc).toContain(this.images.expectedTestTShirtImage);
  }

  async resetAndLogoutViaButton() {
    await this.buttons.burgerMenu.click();
    await this.buttons.burgerResetAppState.click();
    await this.buttons.burgerLogout.click();
  }
  async removeAllItems() {
    await this.buttons.backpackRemove.click();
    await this.buttons.bikeLightRemove.click();
    await this.buttons.boltTShirtRemove.click();
    await this.buttons.fleeceJacketRemove.click();
    await this.buttons.onesieRemove.click();
    await this.buttons.testTShirtRemove.click();
  }
  async addAllItems() {
    await this.buttons.backpackAdd.click();
    await this.buttons.bikeLightAdd.click();
    await this.buttons.boltTShirtAdd.click();
    await this.buttons.fleeceJacketAdd.click();
    await this.buttons.onesieAdd.click();
    await this.buttons.testTShirtAdd.click();
  }

}

module.exports = ProductsPage;
