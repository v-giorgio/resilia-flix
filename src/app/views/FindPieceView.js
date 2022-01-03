class FindPieceView {
  /* create the poster containing basic info upon the search method */
  addItems(itemImg, div, title, rating) {
    div.innerHTML = `
    <img src=${itemImg}>
    <div style="display: flex; flex-direction: column; margin: 7% 3% 0 3%; text-align: center;">
      <h5>${title}</h5>
      <h6>${rating}
      <i class="far fa-star"></i>
      </h6>
    </div>`;
  }

  clearDivs(...btns) {
    btns.forEach((value) => {
      value.innerHTML = "";
    });
  }
}

export default FindPieceView;
