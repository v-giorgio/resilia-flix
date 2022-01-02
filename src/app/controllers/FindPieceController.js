import CustomErrorsView from "../views/CustomErrorsView.js";
import FindPieceView from "../views/FindPieceView.js";
import InfoController from "./InfoController.js";

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

    /* get main section ids */
    this._mainSearch = $(".container-search");
    this._mainInfo = $(".main-infoFilme");
    this._mainTrailer = $(".main-video");

    /* get Info Ids */
    this._button1 = $("#info-1");
    this._button2 = $("#info-2");
    this._button3 = $("#info-3");
    this._button4 = $("#info-4");
    this._button5 = $("#info-5");
    this._button6 = $("#info-6");
    this._button7 = $("#info-7");
    this._button8 = $("#info-8");
    this._button9 = $("#info-9");
    this._button10 = $("#info-10");
    this._button11 = $("#info-11");
    this._button12 = $("#info-12");
    this._button13 = $("#info-13");
    this._button14 = $("#info-14");
    this._button15 = $("#info-15");
    this._button16 = $("#info-16");
    this._button17 = $("#info-17");
    this._button18 = $("#info-18");
    this._button19 = $("#info-19");
    this._button20 = $("#info-20");
    this._button21 = $("#info-21");
    this._button22 = $("#info-22");

    this._backButton = $(".info-back");
    this._watchButton = $("#watch");
    this._backButtonTrailer = $(".info-back-button-tr");
    this._iframe = $("#iframeSection");

    /* get errorValidators */
    this._errorsView = new CustomErrorsView();

    /* get View creator */
    this._view = new FindPieceView();

    /* get Info creator */
    this.infoSection = new InfoController();
  }

  findPiece() {
    this._searchInput.addEventListener("blur", (event) => {
      event.preventDefault();
      let listItems = [];
      this._view.clearDivs(
        this._button1,
        this._button2,
        this._button3,
        this._button4,
        this._button5,
        this._button6,
        this._button7,
        this._button8,
        this._button9,
        this._button10,
        this._button11,
        this._button12,
        this._button13,
        this._button14,
        this._button15,
        this._button16,
        this._button17,
        this._button18,
        this._button19,
        this._button20,
        this._button21,
        this._button22
      );
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
      this.createEvent();
      for (let i = 0; i < listItems.length; i++) {
        let div = this.getDiv(listItems[i]);
        this._view.addItems(
          localStorage.getItem(listItems[i]).split("|")[5],
          div,
          listItems[i].charAt(0).toUpperCase() + listItems[i].slice(1),
          localStorage.getItem(listItems[i]).split("|")[7]
        );
      }
    });
  }

  getDiv(pieceName) {
    switch (pieceName) {
      case "atlanta":
        return this._button1;
      case "us":
        return this._button2;
      case "get out":
        return this._button3;
      case "pose":
        return this._button4;
      case "insecure":
        return this._button5;
      case "julie and the phantoms":
        return this._button6;
      case "hidden figures":
        return this._button7;
      case "BlacKkKlansman":
        return this._button8;
      case "moonlight":
        return this._button9;
      case "the boy who harnessed the wind":
        return this._button10;
      case "his house":
        return this._button11;
      case "creed":
        return this._button12;
      case "black panther":
        return this._button13;
      case "ma rainey's black bottom":
        return this._button14;
      case "Spider-Man: Into the Spider-Verse":
        return this._button15;
      case "tim maia":
        return this._button16;
      case "black-ish":
        return this._button17;
      case "everybody hates chris":
        return this._button18;
      case "empire":
        return this._button19;
      case "scandal":
        return this._button20;
      case "how to get away with murder":
        return this._button21;
      case "my wife and kids":
        return this._button22;
      default:
        break;
    }
  }

  createEvent() {
    this._backButton.addEventListener("click", () => {
      this._mainSearch.classList.remove("invisible");
      this._mainInfo.classList.add("invisible");
      window.location.href = "#";
    });
    this._watchButton.addEventListener("click", () => {
      this._mainInfo.classList.add("invisible");
      this._mainTrailer.classList.remove("invisible");
    });
    this._backButtonTrailer.addEventListener("click", () => {
      this._mainSearch.classList.remove("invisible");
      this._mainInfo.classList.add("invisible");
      this._mainTrailer.classList.add("invisible");
      window.location.href = "#";
    });
    this._button1.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("atlanta");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/sqFJ7Dh39QI";
      window.location.href = "#";
    });
    this._button2.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("us");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/hNCmb-4oXJA";
      window.location.href = "#";
    });
    this._button3.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("get out");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/DzfpyUB60YY";
      window.location.href = "#";
    });
    this._button4.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("pose");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/_t4YuPXdLZw";
      window.location.href = "#";
    });
    this._button5.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("insecure");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/k7JY7e07oGA";
      window.location.href = "#";
    });
    this._button6.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("julie and the phantoms");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/PsWVTN_xu5Y";
      window.location.href = "#";
    });
    this._button7.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("hidden figures");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/RK8xHq6dfAo";
      window.location.href = "#";
    });
    this._button8.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("BlacKkKlansman");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/bbOJwWSEUmo";
      window.location.href = "#";
    });
    this._button9.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("moonlight");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/cHy9GJ2TLNY";
      window.location.href = "#";
    });
    this._button10.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("the boy who harnessed the wind");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/nPkr9HmglG0";
      window.location.href = "#";
    });
    this._button11.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("his house");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/DYY0QJhlXjc";
      window.location.href = "#";
    });
    this._button12.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("creed");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/661sQScpXJc";
      window.location.href = "#";
    });
    this._button13.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("black panther");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/xjDjIWPwcPU";
      window.location.href = "#";
    });
    this._button14.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("ma rainey's black bottom");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/ord7gP151vk";
      window.location.href = "#";
    });
    this._button15.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("Spider-Man: Into the Spider-Verse");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/g4Hbz2jLxvQ";
      window.location.href = "#";
    });
    this._button16.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("tim maia");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/7G8FnHXgXQg";
      window.location.href = "#";
    });
    this._button17.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("black-ish");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/f2oHMze7RwY";
      window.location.href = "#";
    });
    this._button18.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("everybody hates chris");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/XNGuV0N1FpI";
      window.location.href = "#";
    });
    this._button19.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("empire");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/6EtcV5oUNX0";
      window.location.href = "#";
    });
    this._button20.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("scandal");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/MvpYIela7_o";
      window.location.href = "#";
    });
    this._button21.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("how to get away with murder");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/dkb-aBaxkVk";
      window.location.href = "#";
    });
    this._button22.addEventListener("click", () => {
      this._mainSearch.classList.add("invisible");
      this.infoSection.getAtts("my wife and kids");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/mRjAMQT9IHs";
      window.location.href = "#";
    });
  }
}

const search = new FindPieceController();
search.findPiece();
