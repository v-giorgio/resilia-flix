import ItemInfoService from "../services/ItemInfoService.js";

class CarouselHomeController {
  constructor() {
    /* get API request result */
    this.apiInfoResults = new ItemInfoService();

    /* get poster Ids from Home */
    let $ = document.querySelector.bind(document);
    this._seeInfoBtn = $(".infoBtn");

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
  }

  createItem(title, i, type) {
    this.apiInfoResults.findByTitle(
      title,
      this.postersTop,
      this.postersMovies,
      this.postersSeries,
      i,
      type,
      this._seeInfoBtn
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

  getItemTitle() {
    let itemSearched = this._arrayFilms[0];
    return itemSearched.getType();
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
