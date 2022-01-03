import InfoView from "../views/InfoView.js";

class InfoController {
  constructor() {
    /* get InfoView */
    this.infoView = new InfoView();
  }

  /* find the movie/series by key - the title - on the localstorage and get every piece of info from it */
  getAtts(title) {
    this.itemAtts = localStorage.getItem(title).split("|");
    this.fillInfo(
      this.itemAtts[0],
      this.itemAtts[1],
      this.itemAtts[2],
      this.itemAtts[3],
      this.itemAtts[4],
      this.itemAtts[5],
      this.itemAtts[6],
      this.itemAtts[7],
      this.itemAtts[8],
      this.itemAtts[9]
    );
  }

  /* method that calls the view to fill the info page */
  fillInfo(
    title,
    type,
    year,
    duration,
    description,
    posterURL,
    director,
    rating,
    cast,
    gender
  ) {
    this.infoView.setInfo(
      title,
      type,
      year,
      duration,
      description,
      posterURL,
      director,
      rating,
      cast,
      gender
    );
  }
}

export default InfoController;
