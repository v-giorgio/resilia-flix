/* check every possible error along the input validation */

class CustomErrorsController {
  /* empty input */
  checkErrorEmptyInput(input) {
    if (input === "" || input === " " || input === 0) return false;
    else return true;
  }

  /* input can have only string - no digits */
  checkErrorOnlyString(input) {
    if (/\d/.test(input)) return false;
    else return true;
  }

  /* invalid email format */
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

  /* invalid password format */
  checkErrorInvalidPassword(input) {
    let regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regex.test(input)) return true;
    else return false;
  }

  /* invalid cep length */
  checkErrorCepLength(input) {
    if (input.toString().length == 8) return true;
    else return false;
  }

  /* invalid rg length */
  checkErrorRGLength(input) {
    if (input.toString().length == 9) return true;
    else return false;
  }

  /* passwords do not match */
  checkErrorMatchingPasswords(password, checkedPassword) {
    if (password === checkedPassword) return true;
    else return false;
  }

  /* find in the localstorage if there is an user with the same email */
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

  /* find in the localstorage if the user exists */
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
