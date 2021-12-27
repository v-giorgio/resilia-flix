class Suggestion {
  constructor() {
    this._suggestionsBox = [];
  }

  setSuggestion(name, email, suggestion) {
    this._name = name;
    this._email = email;
    this._suggestion = suggestion;
    this._suggestionsBox[this._email] = this._suggestion;
  }

  getAllSuggestions() {
    return this._suggestionsBox;
  }
}

/* var suggestions = new Suggestion();

suggestions.setSuggestion("vinicius", "email.com", "testando");
suggestions.setSuggestion("vinicius", "vinicius.com", "testando");
suggestions.setSuggestion("vinicius", "vitor.com", "testando");
console.log(suggestions.getAllSuggestions()); */
