import FilmOrSeries from "../models/FilmOrSeries.js";
import CarouselHomeView from "../views/CarouselHomeView.js";

class ItemInfoService {
  /* API OMDB request */
  findByTitle(title, postersTop, postersMovies, postersSeries, i, type) {
    $.ajax({
      method: "GET",
      url: `http://www.omdbapi.com/?apikey=c6f76f28&t=${title}`,
      success: function (response) {
        try {
          this.item = new FilmOrSeries(title);
          this.carouselView = new CarouselHomeView();
          this.item.setData(
            response.Type,
            response.Year,
            response.Runtime,
            response.Plot,
            response.Poster,
            response.Director,
            response.imdbRating,
            response.Actors,
            response.Genre
          );
          switch (type) {
            case "top":
              this.carouselView.changeSrc(
                postersTop[i],
                this.item.getPosterURL()
              );
              break;
            case "movie":
              this.carouselView.changeSrc(
                postersMovies[i],
                this.item.getPosterURL()
              );
              break;
            case "series":
              this.carouselView.changeSrc(
                postersSeries[i],
                this.item.getPosterURL()
              );
              break;
            default:
              break;
          }
        } catch (err) {
          console.log(err);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
}

export default ItemInfoService;
