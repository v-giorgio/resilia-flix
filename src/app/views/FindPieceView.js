class FindPieceView {
  addItems(itemImg, div, title, rating) {
    div.innerHTML += `<div class="box-movie">
    <img src=${itemImg}>
    <div style="display: flex; flex-direction: column; margin: 7% 3% 0 3%; text-align: center;">
    <h5>${title}</h5>
    <h6>${rating}
    <i class="far fa-star"></i>
    </h6>
    </div>
    </div>`;
  }
}

export default FindPieceView;
