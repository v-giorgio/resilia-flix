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
    this.itemTitle = response.Title;
    this.itemType = response.Type;
    this.itemYear = response.Year;
    this.itemDuration = response.Runtime;
    this.itemDescription = response.Plot;
    this.itemPoster = response.Poster;
    this.itemDirector = response.Director;
    this.itemImdbRating = response.imdbRating;
    this.itemCast = response.Actors;
    this.itemGenre = response.Genre;
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
