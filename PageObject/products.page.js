const BasePage = require("./base.page");

class ProductsPage extends BasePage {
  get appLogoField() {
    return $(".app_logo");
  }
}

module.exports = ProductsPage;
