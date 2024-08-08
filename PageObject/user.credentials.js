const BasePage = require("./base.page");
class UserCredentials extends BasePage {
  get logins() {
    return {
      standardUser: "standard_user",
      lockedUser: "locked_out_user",
      problemUser: "problem_user",
      performanceUser: "performance_glitch_user",
      errorUser: "error_user",
      visualUser: "visual_user",
    };
  }
  get passwords() {
    return {
      universalPassword: "secret_sauce",
    };
  }
}
module.exports = UserCredentials;
