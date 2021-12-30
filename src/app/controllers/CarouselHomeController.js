import ItemInfoService from "../services/ItemInfoService.js";
import InfoController from "./InfoController.js";

class CarouselHomeController {
  constructor() {
    /* get API request result */
    this.apiInfoResults = new ItemInfoService();

    /* get poster Ids from Home */
    let $ = document.querySelector.bind(document);

    /* get main section ids */
    this._mainHome = $(".main-home");
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
    this._button23 = $("#info-23");
    this._button24 = $("#info-24");

    this._backButton = $(".info-back-button");
    this._watchButton = $("#watch");
    this._backButtonTrailer = $(".info-back-button-trailer");
    this._iframe = $("#iframeSection");

    /* Tops */
    this._posterTop1 = $("#poster-top-1");
    this._posterTop2 = $("#poster-top-2");
    this._posterTop3 = $("#poster-top-3");
    this._posterTop4 = $("#poster-top-4");
    this._posterTop5 = $("#poster-top-5");
    this._posterTop6 = $("#poster-top-6");
    this._posterTop7 = $("#poster-top-7");
    this._posterTop8 = $("#poster-top-8");

    this.postersTop = [
      this._posterTop1,
      this._posterTop2,
      this._posterTop3,
      this._posterTop4,
      this._posterTop5,
      this._posterTop6,
      this._posterTop7,
      this._posterTop8,
    ];

    /* Movies */
    this._posterMovies1 = $("#poster-movies-1");
    this._posterMovies2 = $("#poster-movies-2");
    this._posterMovies3 = $("#poster-movies-3");
    this._posterMovies4 = $("#poster-movies-4");
    this._posterMovies5 = $("#poster-movies-5");
    this._posterMovies6 = $("#poster-movies-6");
    this._posterMovies7 = $("#poster-movies-7");
    this._posterMovies8 = $("#poster-movies-8");

    this.postersMovies = [
      this._posterMovies1,
      this._posterMovies2,
      this._posterMovies3,
      this._posterMovies4,
      this._posterMovies5,
      this._posterMovies6,
      this._posterMovies7,
      this._posterMovies8,
    ];

    /* Series */
    this._posterSeries1 = $("#poster-series-1");
    this._posterSeries2 = $("#poster-series-2");
    this._posterSeries3 = $("#poster-series-3");
    this._posterSeries4 = $("#poster-series-4");
    this._posterSeries5 = $("#poster-series-5");
    this._posterSeries6 = $("#poster-series-6");
    this._posterSeries7 = $("#poster-series-7");
    this._posterSeries8 = $("#poster-series-8");

    this.postersSeries = [
      this._posterSeries1,
      this._posterSeries2,
      this._posterSeries3,
      this._posterSeries4,
      this._posterSeries5,
      this._posterSeries6,
      this._posterSeries7,
      this._posterSeries8,
    ];

    this.infoSection = new InfoController();
  }

  createItem(title, i, type) {
    this.apiInfoResults.findByTitle(
      title,
      this.postersTop,
      this.postersMovies,
      this.postersSeries,
      i,
      type
    );
  }

  createItemTop(title, i) {
    this.createItem(title, i, "top");
  }

  createItemMovies(title, i) {
    this.createItem(title, i, "movie");
  }

  createItemSeries(title, i) {
    this.createItem(title, i, "series");
  }

  showItems() {
    return this._arrayFilms[0];
  }

  getInfo() {
    this._backButton.addEventListener("click", () => {
      this._mainHome.classList.remove("invisible");
      this._mainInfo.classList.add("invisible");
      window.location.href = "#";
    });
    this._watchButton.addEventListener("click", () => {
      this._mainInfo.classList.add("invisible");
      this._mainTrailer.classList.remove("invisible");
    });
    this._backButtonTrailer.addEventListener("click", () => {
      this._mainHome.classList.remove("invisible");
      this._mainInfo.classList.add("invisible");
      this._mainTrailer.classList.add("invisible");
      window.location.href = "#";
    });
    this._button1.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("atlanta");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/sqFJ7Dh39QI";
      window.location.href = "#";
    });
    this._button2.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("us");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/hNCmb-4oXJA";
      window.location.href = "#";
    });
    this._button3.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("get out");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/DzfpyUB60YY";
      window.location.href = "#";
    });
    this._button4.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("pose");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/_t4YuPXdLZw";
      window.location.href = "#";
    });
    this._button5.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("insecure");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/k7JY7e07oGA";
      window.location.href = "#";
    });
    this._button6.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("julie and the phantoms");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/PsWVTN_xu5Y";
      window.location.href = "#";
    });
    this._button7.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("hidden figures");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/RK8xHq6dfAo";
      window.location.href = "#";
    });
    this._button8.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("BlacKkKlansman");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/bbOJwWSEUmo";
      window.location.href = "#";
    });
    this._button9.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("moonlight");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/cHy9GJ2TLNY";
      window.location.href = "#";
    });
    this._button10.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("the boy who harnessed the wind");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/nPkr9HmglG0";
      window.location.href = "#";
    });
    this._button11.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("his house");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/DYY0QJhlXjc";
      window.location.href = "#";
    });
    this._button12.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("creed");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/661sQScpXJc";
      window.location.href = "#";
    });
    this._button13.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("black panther");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/xjDjIWPwcPU";
      window.location.href = "#";
    });
    this._button14.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("ma rainey's black bottom");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/ord7gP151vk";
      window.location.href = "#";
    });
    this._button15.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("Spider-Man: Into the Spider-Verse");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/g4Hbz2jLxvQ";
      window.location.href = "#";
    });
    this._button16.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("tim maia");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/7G8FnHXgXQg";
      window.location.href = "#";
    });
    this._button17.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("black-ish");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/f2oHMze7RwY";
      window.location.href = "#";
    });
    this._button18.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("everybody hates chris");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/XNGuV0N1FpI";
      window.location.href = "#";
    });
    this._button19.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("empire");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/6EtcV5oUNX0";
      window.location.href = "#";
    });
    this._button20.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("scandal");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/MvpYIela7_o";
      window.location.href = "#";
    });
    this._button21.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("how to get away with murder");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/dkb-aBaxkVk";
      window.location.href = "#";
    });
    this._button22.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("julie and the phantoms");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/PsWVTN_xu5Y";
      window.location.href = "#";
    });
    this._button23.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("my wife and kids");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/mRjAMQT9IHs";
      window.location.href = "#";
    });
    this._button24.addEventListener("click", () => {
      this._mainHome.classList.add("invisible");
      this.infoSection.getAtts("insecure");
      this._mainInfo.classList.remove("invisible");
      this._iframe.src = "https://www.youtube.com/embed/kqCwxtEdJWk";
      window.location.href = "#";
    });
  }
}

const carousel = new CarouselHomeController();
carousel.createItemTop("atlanta", 0);
carousel.createItemTop("us", 1);
carousel.createItemTop("get out", 2);
carousel.createItemTop("pose", 3);
carousel.createItemTop("insecure", 4);
carousel.createItemTop("julie and the phantoms", 5);
carousel.createItemTop("hidden figures", 6);
carousel.createItemTop("BlacKkKlansman", 7);

carousel.createItemMovies("moonlight", 0);
carousel.createItemMovies("the boy who harnessed the wind", 1);
carousel.createItemMovies("his house", 2);
carousel.createItemMovies("creed", 3);
carousel.createItemMovies("black panther", 4);
carousel.createItemMovies("ma rainey's black bottom", 5);
carousel.createItemMovies("Spider-Man: Into the Spider-Verse", 6);
carousel.createItemMovies("tim maia", 7);

carousel.createItemSeries("black-ish", 0);
carousel.createItemSeries("everybody hates chris", 1);
carousel.createItemSeries("empire", 2);
carousel.createItemSeries("scandal", 3);
carousel.createItemSeries("how to get away with murder", 4);
carousel.createItemSeries("julie and the phantoms", 5);
carousel.createItemSeries("my wife and kids", 6);
carousel.createItemSeries("insecure", 7);

carousel.getInfo();
