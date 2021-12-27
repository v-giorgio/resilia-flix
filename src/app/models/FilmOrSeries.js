class FilmOrSeries {
  constructor(
    id,
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
    this._id = id;
    this._title = title;
    this._type = type;
    this._year = year;
    this._duration = duration;
    this._description = description;
    this._posterURL = posterURL;
    this._director = director;
    this._rating = rating;
    this._cast = cast;
    this._gender = gender;
  }

  getId() {
    return this._id;
  }
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
