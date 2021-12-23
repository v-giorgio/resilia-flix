class ItemInfoService {
  /* API OMDB request */
  findByTitle(title) {
    $.ajax({
      method: "GET",
      url: `http://www.omdbapi.com/?apikey=c6f76f28&t=${title}`,
      success: (response) => {
        try {
          this.createItem(response);
        } catch (err) {
          console.log(err);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
  /* Create movie/series with attributes */
  createItem(response) {
    this._itemTitle = response.Title;
    this._itemType = response.Type;
    this._itemYear = response.Year;
    this._itemDuration = response.Runtime;
    this._itemDescription = response.Plot;
    this._itemPoster = response.Poster;
    this._itemDirector = response.Director;
    this._itemImdbRating = response.imdbRating;
    this._itemCast = response.Actors;
    this._itemGenre = response.Genre;
    /*     console.log(
      this.itemTitle,
      this.itemType,
      this.itemYear,
      this.itemDuration,
      this.itemDescription,
      this.itemPoster,
      this.itemDirector,
      this.itemImdbRating,
      this.itemCast,
      this.itemGenre
    ); */
  }
}
//test:
var item = new ItemInfoService();
