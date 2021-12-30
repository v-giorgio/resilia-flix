import InfoView from "../views/InfoView.js";

class InfoController {
  constructor() {
    /* get InfoView */
    this.infoView = new InfoView();
  }

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
/* info.getAtts();
info.getAtts("us");
info.getAtts("get out");
info.getAtts("pose");
info.getAtts("insecure");
info.getAtts("julie and the phantoms");
info.getAtts("hidden figures");
info.getAtts("BlacKkKlansman");
info.getAtts("moonlight");
info.getAtts("the boy who harnessed the wind");
info.getAtts("his house");
info.getAtts("creed");
info.getAtts("black panther");
info.getAtts("ma rainey's black bottom");
info.getAtts("Spider-Man: Into the Spider-Verse");
info.getAtts("tim maia");
info.getAtts("black-ish");
info.getAtts("everybody hates chris");
info.getAtts("empire");
info.getAtts("scandal");
info.getAtts("how to get away with murder");
info.getAtts("my wife and kids"); */
