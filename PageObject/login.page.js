const BasePage = require("./base.page");

class LoginPage extends BasePage {
  get inputs() {
    return {
      usernameInput: $("#user-name"),
      passwordInput: $("#password"),
    };
  }

  get buttons() {
    return {
      loginButton: $("#login-button"),
    };
  }

  async login(username, password) {
    await this.inputs.usernameInput.setValue(username);
    await this.inputs.passwordInput.setValue(password);
    await this.buttons.loginButton.click();
  }
}

module.exports = LoginPage;
