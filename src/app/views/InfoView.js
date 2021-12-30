class InfoView {
  constructor() {
    /* get info Ids from Info */
    let $ = document.querySelector.bind(document);
    this._posterUrl = $(".posterInfo");
    this._rating = $("#rating");
    this._year = $("#year");
    this._duration = $("#duration");
    this._description = $("#sinopseText");
    this._director = $("#director");
    this._cast = $("#cast");
    this._gender = $("#gender");
    this._title = $("#titleMovie");
    this._type = "";
  }

  setInfo(
    title,
    type,
    year,
    duration,
    description,
    posterUrl,
    director,
    rating,
    cast,
    gender
  ) {
    this._title.innerText = title.charAt(0).toUpperCase() + title.slice(1);
    this._posterUrl.src = posterUrl;
    this._rating.innerText = rating;
    this._year.innerText = year;
    this._duration.innerText = duration;
    this._description.innerText = description;
    this._director.innerText = director;
    this._cast.innerText = cast;
    this._gender.innerText = gender;
    this._type = type;
  }
}

export default InfoView;
