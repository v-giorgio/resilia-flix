import CustomErrorsController from "../controllers/CustomErrorsController.js";
import CustomErrors from "../models/CustomErrors.js";
import CustomErrorsView from "../views/CustomErrorsView.js";

class RecoverPasswordController {
  constructor() {
    /* errors check model and controller */
    this.errorCheck = new CustomErrorsController();
    this.errorCheckMessage = new CustomErrors();

    /* get email input from recover password page */
    let $ = document.querySelector.bind(document);
    this._inputEmail = $("#recover-email");
    this._recoverBtn = $(".button-recover");

    /* get all spans (error/validation) from register page */
    this._msgEmail = $("#recover-password-email-error");
    this._msgValidation = $("#recover-password-validation");

    /* get Errors View */
    this.errorsListMsg = new CustomErrorsView();
  }

  verifyRequest() {
    this._inputEmail.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkEmail(this._inputEmail.value);
    });

    this._recoverBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this._msgValidation.innerHTML = "";
      /* check if input is blank */
      if (this.checkEmail(this._inputEmail.value)) {
        /* check if user exists */
        if (this.checkUserNotDefined(this._inputEmail.value)) {
          this.errorsListMsg.emailSuccess(this._msgValidation);
          this._inputEmail.value = "";
        } else {
          this.errorsListMsg.userNotDefined(this._msgValidation);
        }
      } else {
        this.errorsListMsg.manyEmptyInputs(this._msgValidation);
      }
    });
  }

  /* check the email format using the validators */
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

  /* check if the email exists on the localstorage using the validators */
  checkUserNotDefined(userEmail) {
    if (this.errorCheck.checkErrorUserNotDefined(userEmail)) {
      this.errorsListMsg.clear(this._msgValidation);
      this.errorsListMsg.userNotDefined(this._msgValidation);
      throw new Error(this.errorCheckMessage.userNotDefined);
    } else {
      this.errorsListMsg.clear(this._msgValidation);
      return true;
    }
  }
}

const recoverPassword = new RecoverPasswordController();
recoverPassword.verifyRequest();
