import InfoView from "../views/InfoView.js";

class InfoController {
  constructor() {
    /* get InfoView */
    this.infoView = new InfoView(document);
  }

  getAtts(title) {
    let itemAtts = localStorage.getItem(title).split("|");
    this.fillInfo(
      itemAtts[0],
      itemAtts[1],
      itemAtts[2],
      itemAtts[3],
      itemAtts[4],
      itemAtts[5],
      itemAtts[6],
      itemAtts[7],
      itemAtts[8],
      itemAtts[9]
    );
    //console.log(itemAtts);
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

const info = new InfoController();
info.getAtts("atlanta");
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
info.getAtts("my wife and kids");
