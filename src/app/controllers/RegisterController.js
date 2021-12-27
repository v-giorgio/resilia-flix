import User from "../models/User.js";
import UserLocationService from "../services/UserLocationService.js";
import CustomErrorsController from "../controllers/CustomErrorsController.js";
import CustomErrors from "../models/CustomErrors.js";

class RegisterController {
  constructor() {
    /* list of already created users */
    this._userList = [];

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
  }

  createUser() {
    let checker = false;
    this._inputName.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkName(this._inputName.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputEmail.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkEmail(this._inputEmail.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputPassword.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkPassword(this._inputPassword.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputCheckedPassword.addEventListener("blur", (event) => {
      event.preventDefault();
      if (
        this.checkConfirmPassword(
          this._inputPassword.value,
          this._inputCheckedPassword.value
        )
      ) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputRG.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkRg(this._inputPassword.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    let user = new User(
      this._inputName.value,
      this._inputEmail.value,
      this._inputPassword.value,
      this._inputPassword.value,
      this._inputCep.value
    );

    this._inputCep.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkCep(this._inputCep.value)) {
        this.apiLocation.findByCEP(this._inputCep.value, user);
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputState.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkState(this._inputState.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputCity.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkCity(this._inputCity.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputNeighborhood.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkNeighborhood(this._inputNeighborhood.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputStreet.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkStreet(this._inputStreet.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputSupp.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkSupp(this._inputSupp.value)) {
        checker = true;
      } else {
        checker = false;
      }
    });

    this._inputNum.addEventListener("blur", (event) => {
      event.preventDefault();
      if (this.checkNum(this._inputNum.value)) {
        user.setNum(this._inputNum.value);
        checker = true;
      } else {
        checker = false;
      }
    });

    this._registerBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (checker && checkUserAlreadyCreated(user)) {
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
        this._userList.push(user);
      }
    });
  }

  checkName(name) {
    if (!this.errorCheck.checkErrorEmptyInput(name)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorOnlyString(name)) {
      throw new Error(this.errorCheckMessage.onlyString);
    } else {
      return true;
    }
  }

  checkEmail(email) {
    if (!this.errorCheck.checkErrorEmptyInput(email)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorInvalidEmail(email)) {
      throw new Error(this.errorCheckMessage.invalidEmail);
    } else {
      return true;
    }
  }

  checkPassword(password) {
    if (!this.errorCheck.checkErrorEmptyInput(password)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorInvalidPassword(password)) {
      throw new Error(this.errorCheckMessage.invalidPassword);
    } else {
      return true;
    }
  }

  checkConfirmPassword(password, confirmPassword) {
    if (!this.errorCheck.checkErrorEmptyInput(password)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (
      !this.errorCheck.checkErrorMatchingPasswords(password, confirmPassword)
    ) {
      throw new Error(this.errorCheckMessage.matchingPassword);
    } else {
      return true;
    }
  }

  checkRg(RG) {
    if (!this.errorCheck.checkErrorEmptyInput(RG)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorRGLength(RG)) {
      throw new Error(this.errorCheckMessage.RGLength);
    } else {
      return true;
    }
  }

  checkCep(cep) {
    if (!this.errorCheck.checkErrorEmptyInput(cep)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else if (!this.errorCheck.checkErrorCepLength(cep)) {
      throw new Error(this.errorCheckMessage.cepLength);
    } else {
      return true;
    }
  }

  checkState(state) {
    if (!this.errorCheck.checkErrorEmptyInput(state)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkCity(city) {
    if (!this.errorCheck.checkErrorEmptyInput(city)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkNeighborhood(neighborhood) {
    if (!this.errorCheck.checkErrorEmptyInput(neighborhood)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkStreet(street) {
    if (!this.errorCheck.checkErrorEmptyInput(street)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkSupp(supp) {
    if (!this.errorCheck.checkErrorEmptyInput(supp)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkNum(num) {
    if (!this.errorCheck.checkErrorEmptyInput(num)) {
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      return true;
    }
  }

  checkUserAlreadyCreated(user) {
    if (this.errorCheck.checkErrorUserNotDefined(this._userList, user)) {
      throw new Error(this.errorCheckMessage.userAlreadyDefined);
    } else {
      return true;
    }
  }

  getUserList() {
    return this._userList;
  }
}

const register = new RegisterController();
register.createUser("a", "a", "a", "a", 111, "111", "aaa", 2);
