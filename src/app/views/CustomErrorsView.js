import CustomErrors from "../models/CustomErrors.js";

class CustomErrorsView {
  /* initializes the message model to be used on every kind of error/validation */
  constructor() {
    this.errorsList = new CustomErrors();
  }
  emptyInput(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.emptyInput}</p>
        `;
  }
  onlyString(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.onlyString}</p>
        `;
  }
  invalidEmail(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.invalidEmail}</p>
        `;
  }
  invalidPassword(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.invalidPassword}</p>
        `;
  }
  cepLength(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.cepLength}</p>
        `;
  }
  RGLength(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.RGLength}</p>
        `;
  }
  matchingPassword(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.matchingPassword}</p>
        `;
  }
  userAlreadyDefined(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.userAlreadyDefined}</p>
        `;
  }
  userNotDefined(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.userNotDefined}</p>
        `;
  }
  apiError(span) {
    span.innerHTML = `
        <p class="error">${this.errorsList.apiError}</p>
        `;
  }

  manyEmptyInputs(span) {
    span.innerHTML = `
    <p class="error">${this.errorsList.manyEmptyInputs}</p>`;
  }

  emailSuccess(span) {
    span.innerHTML = `
        <p class="validation">${this.errorsList.emailSuccess}</p>
        `;
  }

  registerSuccess(span) {
    span.innerHTML = `
        <p class="validation">${this.errorsList.registerSuccess}</p>
        `;
  }

  loginSuccess(span) {
    span.innerHTML = `
        <p class="validation">${this.errorsList.loginSuccess}</p>
        `;
  }

  loginError(span) {
    span.innerHTML = `
    <p class="error">${this.errorsList.loginError}</p>
    `;
  }

  thankSuggestion(span) {
    span.innerHTML = `
    <p class="validation">${this.errorsList.thankSuggestion}</p>
    `;
  }

  noResults(span) {
    span.innerHTML = `
    <p class="error">${this.errorsList.noResults}</p>
    `;
  }

  clear(span) {
    span.innerHTML = "";
  }
}

export default CustomErrorsView;
