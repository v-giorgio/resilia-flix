class User {
  constructor(name, email, password, rg, cep, number, supp) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._rg = rg;
    this._cep = cep;
    this._number = number;
    this._supp = supp;
  }

  setLocation(state, city, neighborhood, street) {
    this._state = state;
    this._city = city;
    this._neighborhood = neighborhood;
    this._street = street;
  }

  getState() {
    return this._state;
  }

  getCity() {
    return this._city;
  }

  getNeighborhood() {
    return this._neighborhood;
  }

  getStreet() {
    return this._street;
  }
}

export default User;
