import CustomErrorsController from "../controllers/CustomErrorsController.js";
import CustomErrors from "../models/CustomErrors.js";
import CustomErrorsView from "../views/CustomErrorsView.js";

class LoginController {
  constructor() {
    /* errors check model and controller */
    this.errorCheck = new CustomErrorsController();
    this.errorCheckMessage = new CustomErrors();

    /* get all inputs from login page */
    let $ = document.querySelector.bind(document);
    this._inputEmail = $("#login-email");
    this._inputPassword = $("#login-password");
    this._loginBtn = $("#login-submit");

    /* get all spans (error/validation) from register page */
    this._msgEmail = $("#login-email-error");
    this._msgPassword = $("#login-password-error");
    this._msgValidation = $("#login-validation");

    /* get Errors View */
    this.errorsListMsg = new CustomErrorsView();
  }

  /* check every input */
  userLogin() {
    this._inputEmail.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkEmail(this._inputEmail.value);
    });

    this._inputPassword.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkPassword(this._inputPassword.value);
    });

    this._loginBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this._msgValidation.innerHTML = "";
      /* check if inputs are blank */
      if (
        this.checkEmail(this._inputEmail.value) &&
        this.checkPassword(this._inputPassword.value)
      ) {
        /* check if user exists + email and password are correct */
        if (
          this.checkCorrectLogin(
            this._inputEmail.value,
            this._inputPassword.value
          )
        ) {
          this.errorsListMsg.loginSuccess(this._msgValidation);
          this._inputEmail.value = "";
          this._inputPassword.value = "";
        } else {
          this.errorsListMsg.userNotDefined(this._msgValidation);
        }
      } else {
        this.errorsListMsg.manyEmptyInputs(this._msgValidation);
      }
    });
  }

  /* check the email input using the validators */
  checkEmail(email) {
    if (!this.errorCheck.checkErrorEmptyInput(email)) {
      this.errorsListMsg.clear(this._msgEmail);
      this.errorsListMsg.emptyInput(this._msgEmail);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorInvalidEmail(email)) {
      this.errorsListMsg.clear(this._msgEmail);
      this.errorsListMsg.invalidEmail(this._msgEmail);
      throw new Error(this.errorCheckMessage.invalidEmail);
    } else {
      this.errorsListMsg.clear(this._msgEmail);
      return true;
    }
  }

  /* check the password input using the validators */
  checkPassword(password) {
    if (!this.errorCheck.checkErrorEmptyInput(password)) {
      this.errorsListMsg.clear(this._msgPassword);
      this.errorsListMsg.emptyInput(this._msgPassword);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorInvalidPassword(password)) {
      this.errorsListMsg.clear(this._msgPassword);
      this.errorsListMsg.invalidPassword(this._msgPassword);
      throw new Error(this.errorCheckMessage.invalidPassword);
    } else {
      this.errorsListMsg.clear(this._msgPassword);
      return true;
    }
  }

  /* check if the user exists on the localstorage using the validators */
  checkCorrectLogin(userEmail, userPassword) {
    if (!this.errorCheck.checkCorrectLogin(userEmail, userPassword)) {
      this.errorsListMsg.clear(this._msgValidation);
      this.errorsListMsg.loginError(this._msgValidation);
      throw new Error(this.errorCheckMessage.loginError);
    } else {
      this.errorsListMsg.clear(this._msgValidation);
      return true;
    }
  }
}

const login = new LoginController();
login.userLogin();
