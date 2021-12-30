import User from "../models/User.js";
import UserLocationService from "../services/UserLocationService.js";
import CustomErrorsController from "../controllers/CustomErrorsController.js";
import CustomErrors from "../models/CustomErrors.js";
import CustomErrorsView from "../views/CustomErrorsView.js";
import UserLocationView from "../views/UserLocationView.js";

class RegisterController {
  constructor() {
    /* errors check model and controller */
    this.errorCheck = new CustomErrorsController();
    this.errorCheckMessage = new CustomErrors();

    /* get userLocation API service */
    this.apiLocation = new UserLocationService();

    /* get all inputs from register page */
    let $ = document.querySelector.bind(document);
    this._inputName = $("#register-userName");
    this._inputEmail = $("#register-email");
    this._inputPassword = $("#register-password");
    this._inputCheckedPassword = $("#register-check-password");
    this._inputRG = $("#register-rg");
    this._inputCep = $("#register-cep");
    this._inputState = $("#register-state");
    this._inputCity = $("#register-city");
    this._inputNeighborhood = $("#register-neighborhood");
    this._inputStreet = $("#register-street");
    this._inputSupp = $("#register-supp");
    this._inputNum = $("#register-num");
    this._registerBtn = $("#register-button");

    /* get all spans (error/validation) from register page */
    this._msgName = $("#username-error");
    this._msgEmail = $("#email-error");
    this._msgPassword = $("#password-error");
    this._msgCheckPassword = $("#check-password-error");
    this._msgRG = $("#rg-error");
    this._msgCep = $("#cep-error");
    this._msgState = $("#state-error");
    this._msgCity = $("#city-error");
    this._msgNeighborhood = $("#neighborhood-error");
    this._msgStreet = $("#street-error");
    this._msgNum = $("#num-error");
    this._msgSupp = $("#supp-error");
    this._msgRegisterValidation = $("#register-validation");

    /* get Errors View */
    this.errorsListMsg = new CustomErrorsView();

    /* get UserLocation Input filler View */
    this.locationInput = new UserLocationView();
  }

  createUser() {
    this._inputName.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkName(this._inputName.value);
    });

    this._inputEmail.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkEmail(this._inputEmail.value);
    });

    this._inputPassword.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkPassword(this._inputPassword.value);
    });

    this._inputCheckedPassword.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkConfirmPassword(
        this._inputPassword.value,
        this._inputCheckedPassword.value
      );
    });

    this._inputRG.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkRg(this._inputRG.value.replace(".", ""));
    });

    let user = new User();

    this._inputCep.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkCep(this._inputCep.value)) {
        this.apiLocation.findByCEP(
          this._inputCep.value,
          user,
          this.locationInput,
          this._inputState,
          this._inputCity,
          this._inputNeighborhood,
          this._inputStreet,
          this._inputSupp
        );
      }
    });

    this._inputState.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkState(this._inputState.value);
    });

    this._inputCity.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkCity(this._inputCity.value);
    });

    this._inputNeighborhood.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkNeighborhood(this._inputNeighborhood.value);
    });

    this._inputStreet.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkStreet(this._inputStreet.value)) {
      }
    });

    this._inputSupp.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkSupp(this._inputSupp.value);
    });

    this._inputNum.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkNum(this._inputNum.value)) {
        user.setNum(this._inputNum.value);
      }
    });

    this._registerBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this._msgRegisterValidation.innerHTML = "";
      if (
        this.checkName(this._inputName.value) &&
        this.checkEmail(this._inputEmail.value) &&
        this.checkPassword(this._inputPassword.value) &&
        this.checkRg(this._inputRG.value) &&
        this.checkCep(this._inputCep.value) &&
        this.checkState(this._inputState.value) &&
        this.checkCity(this._inputCity.value) &&
        this.checkNeighborhood(this._inputNeighborhood.value) &&
        this.checkStreet(this._inputStreet.value) &&
        this.checkSupp(this._inputSupp.value)
      ) {
        user.setData(
          this._inputName.value,
          this._inputEmail.value,
          this._inputPassword.value,
          this._inputRG.value,
          this._inputCep.value
        );
        if (
          user.getState() == "" ||
          user.getCity() == "" ||
          user.getNeighborhood() == "" ||
          user.getStreet() == "" ||
          user.getSupp() == ""
        ) {
          user.setLocation(
            this._inputState.value,
            this._inputCity.value,
            this._inputNeighborhood.value,
            this._inputStreet.value,
            this._inputSupp.value
          );
        }
        if (!this.checkUserAlreadyCreated(user.getEmail())) {
          this.errorsListMsg.userAlreadyDefined(this._msgRegisterValidation);
        } else {
          try {
            /* create random Id keys for each item in localStorage */
            let randomId = Math.ceil(Math.random() * 1000);
            while (localStorage.getItem(randomId) !== null) {
              randomId = Math.ceil(Math.random() * 1000);
            }
            /* create user in LocalStorage with random key and 2 values: email and the User object */
            localStorage.setItem(randomId, [
              user.getEmail(),
              user.getPassword(),
              user,
            ]);
            this._inputName.value = "";
            this._inputEmail.value = "";
            this._inputPassword.value = "";
            this._inputCheckedPassword.value = "";
            this._inputRG.value = "";
            this._inputCep.value = "";
            this._inputState.value = "";
            this._inputCity.value = "";
            this._inputNeighborhood.value = "";
            this._inputStreet.value = "";
            this._inputSupp.value = "";
            this._inputNum.value = "";
            this.errorsListMsg.registerSuccess(this._msgRegisterValidation);
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        this.errorsListMsg.manyEmptyInputs(this._msgRegisterValidation);
      }
    });
  }

  checkName(name) {
    if (!this.errorCheck.checkErrorEmptyInput(name)) {
      this.errorsListMsg.clear(this._msgName);
      this.errorsListMsg.emptyInput(this._msgName);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorOnlyString(name)) {
      this.errorsListMsg.clear(this._msgName);
      this.errorsListMsg.onlyString(this._msgName);
      throw new Error(this.errorCheckMessage.onlyString);
    } else {
      this.errorsListMsg.clear(this._msgName);
      return true;
    }
  }

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

  checkConfirmPassword(password, confirmPassword) {
    if (!this.errorCheck.checkErrorEmptyInput(password)) {
      this.errorsListMsg.clear(this._msgCheckPassword);
      this.errorsListMsg.emptyInput(this._msgCheckPassword);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (
      !this.errorCheck.checkErrorMatchingPasswords(password, confirmPassword)
    ) {
      this.errorsListMsg.clear(this._msgCheckPassword);
      this.errorsListMsg.matchingPassword(this._msgCheckPassword);
      throw new Error(this.errorCheckMessage.matchingPassword);
    } else {
      this.errorsListMsg.clear(this._msgCheckPassword);
      return true;
    }
  }

  checkRg(RG) {
    if (!this.errorCheck.checkErrorEmptyInput(RG)) {
      this.errorsListMsg.clear(this._msgRG);
      this.errorsListMsg.emptyInput(this._msgRG);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorRGLength(RG)) {
      this.errorsListMsg.clear(this._msgRG);
      this.errorsListMsg.RGLength(this._msgRG);
      throw new Error(this.errorCheckMessage.RGLength);
    } else {
      this.errorsListMsg.clear(this._msgRG);
      return true;
    }
  }

  checkCep(cep) {
    if (!this.errorCheck.checkErrorEmptyInput(cep)) {
      this.errorsListMsg.clear(this._msgCep);
      this.errorsListMsg.emptyInput(this._msgCep);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorCepLength(cep)) {
      this.errorsListMsg.clear(this._msgCep);
      this.errorsListMsg.cepLength(this._msgCep);
      throw new Error(this.errorCheckMessage.cepLength);
    } else {
      this.errorsListMsg.clear(this._msgCep);
      return true;
    }
  }

  checkState(state) {
    if (!this.errorCheck.checkErrorEmptyInput(state)) {
      this.errorsListMsg.clear(this._msgState);
      this.errorsListMsg.emptyInput(this._msgState);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgState);
      return true;
    }
  }

  checkCity(city) {
    if (!this.errorCheck.checkErrorEmptyInput(city)) {
      this.errorsListMsg.clear(this._msgCity);
      this.errorsListMsg.emptyInput(this._msgCity);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgCity);
      return true;
    }
  }

  checkNeighborhood(neighborhood) {
    if (!this.errorCheck.checkErrorEmptyInput(neighborhood)) {
      this.errorsListMsg.clear(this._msgNeighborhood);
      this.errorsListMsg.emptyInput(this._msgNeighborhood);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgNeighborhood);
      return true;
    }
  }

  checkStreet(street) {
    if (!this.errorCheck.checkErrorEmptyInput(street)) {
      this.errorsListMsg.clear(this._msgStreet);
      this.errorsListMsg.emptyInput(this._msgStreet);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgStreet);
      return true;
    }
  }

  checkSupp(supp) {
    if (!this.errorCheck.checkErrorEmptyInput(supp)) {
      this.errorsListMsg.clear(this._msgSupp);
      this.errorsListMsg.emptyInput(this._msgSupp);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgSupp);
      return true;
    }
  }

  checkNum(num) {
    if (!this.errorCheck.checkErrorEmptyInput(num)) {
      this.errorsListMsg.clear(this._msgNum);
      this.errorsListMsg.emptyInput(this._msgNum);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgNum);
      return true;
    }
  }

  checkUserAlreadyCreated(userEmail) {
    if (!this.errorCheck.checkErrorUserNotDefined(userEmail)) {
      this.errorsListMsg.clear(this._msgRegisterValidation);
      this.errorsListMsg.userAlreadyDefined(this._msgRegisterValidation);
      throw new Error(this.errorCheckMessage.userAlreadyDefined);
    } else {
      this.errorsListMsg.clear(this._msgRegisterValidation);
      return true;
    }
  }

  getUserList() {
    return this._userList;
  }
}

const register = new RegisterController();
register.createUser();
