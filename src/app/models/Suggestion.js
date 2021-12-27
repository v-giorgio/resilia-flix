class Suggestion {
  constructor(name, email, suggestion) {
    this._name = name;
    this._email = email;
    this._suggestion = suggestion;
  }

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
