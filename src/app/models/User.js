class User {
  constructor(name, email, password, rg, cep) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._rg = rg;
    this._cep = cep;
  }

  setLocation(state, city, neighborhood, street, supp) {
    this._state = state;
    this._city = city;
    this._neighborhood = neighborhood;
    this._street = street;
    this._supp = supp;
  }

  setNum(number) {
    this._number = number;
  }

  getName() {
    return this._name;
  }

  getEmail() {
    return this._email;
  }

  getPassword() {
    return this._password;
  }

  getRG() {
    return this._rg;
  }

  getCep() {
    return this._cep;
  }

  getNumber() {
    return this._number;
  }

  getSupp() {
    return this._supp;
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
