import CustomErrorsController from "../controllers/CustomErrorsController.js";
import CustomErrors from "../models/CustomErrors.js";
import Suggestion from "../models/Suggestion.js";
import CustomErrorsView from "../views/CustomErrorsView.js";

class SuggestionsController {
  constructor() {
    this._listSuggestions = [];
    /* errors check model and controller */
    this.errorCheck = new CustomErrorsController();
    this.errorCheckMessage = new CustomErrors();

    /* get all inputs from suggestion page */
    let $ = document.querySelector.bind(document);
    this._inputName = $("#name-user");
    this._inputEmail = $("#email-user");
    this._inputComment = $("#comment-user");
    this._suggestionBtn = $(".button-suggestion");

    /* get all spans (error/validation) from register page */
    this._msgName = $("#input-suggestion-user");
    this._msgEmail = $("#input-suggestion-email");
    this._msgComment = $("#input-suggestion-comment");
    this._msgValidation = $("#suggestion-validation");

    /* get Errors View */
    this.errorsListMsg = new CustomErrorsView();
  }

  /* check every input from suggestion page */
  validateSuggestion() {
    this._inputName.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkName(this._inputName.value);
    });

    this._inputEmail.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkEmail(this._inputEmail.value);
    });

    this._inputComment.addEventListener("blur", (event) => {
      event.preventDefault();
      this.checkComment(this._inputComment.value);
    });

    this._suggestionBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this._msgValidation.innerHTML = "";
      if (
        this.checkName(this._inputName.value) &&
        this.checkEmail(this._inputEmail.value) &&
        this.checkComment(this._inputComment.value)
      ) {
        this.createSuggestion(
          this._inputName.value,
          this._inputEmail.value,
          this._inputComment.value
        );
        this.errorsListMsg.thankSuggestion(this._msgValidation);
        this._inputName.value = "";
        this._inputEmail.value = "";
        this._inputComment.value = "";
      } else {
        this.errorsListMsg.manyEmptyInputs(this._msgValidation);
      }
    });
  }

  /* check the name format - no digits - using the validators */
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

  /* check if the suggestion box is not empty using the validators */
  checkComment(comment) {
    if (!this.errorCheck.checkErrorEmptyInput(comment)) {
      this.errorsListMsg.clear(this._msgComment);
      this.errorsListMsg.emptyInput(this._msgComment);
      throw new Error(this.errorCheckMessage.emptyInput);
    } else {
      this.errorsListMsg.clear(this._msgComment);
      return true;
    }
  }

  /* create the suggestion and put it in an array */
  createSuggestion(name, email, comment) {
    let suggestion = new Suggestion(name, email, comment);
    this._listSuggestions.push(suggestion);
  }

  /* all suggestions getter */
  getAllSuggestions() {
    return this._listSuggestions;
  }
}

const suggestion = new SuggestionsController();
suggestion.validateSuggestion();
