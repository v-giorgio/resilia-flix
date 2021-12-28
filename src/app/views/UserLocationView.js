class UserLocationView {
  fillInputs(
    inputState,
    inputCity,
    inputNeighborhood,
    inputStreet,
    inputSupp,
    state,
    city,
    neighborhood,
    street,
    supp
  ) {
    inputState.value = state;
    inputCity.value = city;
    inputNeighborhood.value = neighborhood;
    inputStreet.value = street;
    inputSupp.value = supp;
  }
}

export default UserLocationView;
