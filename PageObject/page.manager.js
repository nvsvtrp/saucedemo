const LoginPage = require("./login.page");
const ProductsPage = require("./products.page");
const UserCredentials = require("./user.credentials");

class PageManager {
  constructor(driver) {
    this.driver = driver;
    this.loginPage = new LoginPage(driver);
    this.productsPage = new ProductsPage(driver);
    this.userCredentials = new UserCredentials(driver);
  }
}

module.exports = PageManager;
