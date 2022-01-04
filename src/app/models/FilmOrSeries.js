import ItemInfoService from "../services/ItemInfoService.js";

/* Model for every movie or series requested from the api */

class FilmOrSeries {
  /* constructor receives the title and initializes the api to get other info */
  constructor(title) {
    this._title = title;
    this.apiService = new ItemInfoService();
    this.callApi(this._title);
  }

  /* call the method to request the api service */
  callApi(title) {
    this.apiService.findByTitle(title, this);
  }

  /* this method is called in the service api to set the other info about the piece */
  setData(
    type,
    year,
    duration,
    description,
    poster,
    director,
    rating,
    cast,
    gender
  ) {
    this._type = type;
    this._year = year;
    this._duration = duration;
    this._description = description;
    this._posterURL = poster;
    this._director = director;
    this._rating = rating;
    this._cast = cast;
    this._gender = gender;
  }

  /* getters for each info */

  getTitle() {
    return this._title;
  }
  getType() {
    return this._type;
  }
  getYear() {
    return this._year;
  }
  getDuration() {
    return this._duration;
  }
  getDescription() {
    return this._description;
  }
  getPosterURL() {
    return this._posterURL;
  }
  getDirector() {
    return this._director;
  }
  getRating() {
    return this._rating;
  }
  getCast() {
    return this._cast;
  }
  getGender() {
    return this._gender;
  }
}

export default FilmOrSeries;
