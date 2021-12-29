import ItemInfoService from "../services/ItemInfoService.js";

class FilmOrSeries {
  constructor(title) {
    this._title = title;
    this.apiService = new ItemInfoService();
    this.callApi(this._title);
  }

  callApi(title) {
    this.apiService.findByTitle(title, this);
  }

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

  goToInfo(title, btn) {}

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
