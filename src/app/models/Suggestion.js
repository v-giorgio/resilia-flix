/* Model for every suggestion created */

class Suggestion {
  /* sets the info about the info upon creation */
  constructor(name, email, suggestion) {
    this._name = name;
    this._email = email;
    this._suggestion = suggestion;
  }

  /* getters */

  getName() {
    return this._name;
  }

  getEmail() {
    return this._email;
  }

  getSuggestion() {
    return this._suggestion;
  }
}

export default Suggestion;
