class CustomErrorsController {
  checkErrorEmptyInput(input) {
    if (input === "" || input === " " || input === 0) return false;
    else return true;
  }

  checkErrorOnlyString(input) {
    if (/\d/.test(input)) return false;
    else return true;
  }

  checkErrorInvalidEmail(input) {
    if (
      input.indexOf("@") === 0 ||
      input.indexOf("@") === input.length - 1 ||
      input.indexOf("@") === -1 ||
      input.indexOf(" ") !== -1 ||
      input.length < 10 ||
      input.length > 40 ||
      input.indexOf("*") !== -1 ||
      input.indexOf("/") !== -1 ||
      input.indexOf("+") !== -1 ||
      input.indexOf("=") !== -1
    )
      return false;
    else return true;
  }

  checkErrorInvalidPassword(input) {
    let regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regex.test(input)) return true;
    else return false;
  }

  checkErrorCepLength(input) {
    if (input.toString().length == 8) return true;
    else return false;
  }

  checkErrorRGLength(input) {
    if (input.toString().length == 9) return true;
    else return false;
  }

  checkErrorMatchingPasswords(password, checkedPassword) {
    if (password === checkedPassword) return true;
    else return false;
  }

  /* find in the array if there is an user with the same email */
  checkErrorUserNotDefined(userEmail) {
    let keys = Object.keys(localStorage);
    let emailValue = "";
    for (let i = 0; i < keys.length; i++) {
      emailValue = localStorage.getItem(keys[i]).split(",");
      if (emailValue[0] == userEmail) {
        return false;
      }
    }
    return true;
  }

  checkCorrectLogin(userEmail, userPassword) {
    let keys = Object.keys(localStorage);
    let emailValue = "";
    for (let i = 0; i < keys.length; i++) {
      emailValue = localStorage.getItem(keys[i]).split(",");
      if (emailValue[0] == userEmail) {
        if (emailValue[1] == userPassword) {
          return true;
        }
      }
    }
    return false;
  }
}

export default CustomErrorsController;
