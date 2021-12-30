import CustomErrorsView from "../views/CustomErrorsView.js";
import FindPieceView from "../views/FindPieceView.js";

class FindPieceController {
  constructor() {
    /* get items from localStorage */
    this._list = Object.keys(localStorage);

    /* get searchInput from searchPage */
    let $ = document.querySelector.bind(document);
    this._searchInput = $("#search-input");
    this._searchBtn = $(".search-btn");
    this._spanError = $(".error-search");
    this._resultsBox = $(".receive-movie-results");

    /* get errorValidators */
    this._errorsView = new CustomErrorsView();

    /* get View creator */
    this._view = new FindPieceView();
  }

  findPiece() {
    this._searchInput.addEventListener("blur", (event) => {
      event.preventDefault();
      let listItems = [];
      this._resultsBox.innerHTML = "";
      this._spanError.innerHTML = "";
      for (let i = 0; i < this._list.length; i++) {
        if (this._list[i].includes(this._searchInput.value.toLowerCase())) {
          this._spanError.innerHTML = "";
          listItems.push(this._list[i]);
        } else {
          if (listItems.length == 0) {
            this._errorsView.noResults(this._spanError);
          }
        }
      }
      for (let i = 0; i < listItems.length; i++) {
        this._view.addItems(
          localStorage.getItem(listItems[i]).split("|")[5],
          this._resultsBox,
          listItems[i].charAt(0).toUpperCase() + listItems[i].slice(1),
          localStorage.getItem(listItems[i]).split("|")[7]
        );
      }
    });

    this._searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (this._list.includes(this._searchInput.value.toLowerCase())) {
        this._spanError.innerHTML = "";
        console.log(localStorage.getItem(this._searchInput.value));
      } else {
        this._spanError.innerHTML = "";
        this._errorsView.noResults(this._spanError);
      }
    });
  }
}

const search = new FindPieceController();
search.findPiece();
