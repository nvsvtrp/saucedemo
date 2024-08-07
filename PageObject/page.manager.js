const LoginPage = require("./login.page");
const ProductsPage = require("./products.page");

class PageManager {
  constructor(driver) {
    this.driver = driver;
    this.loginPage = new LoginPage(driver);
    this.productsPage = new ProductsPage(driver);
  }
}

module.exports = PageManager;
