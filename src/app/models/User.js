/* Model containing every info about the user created */

class User {
  /* initializes every value upon instance */
  constructor() {
    this._name = "";
    this._email = "";
    this._password = "";
    this._rg = "";
    this._cep = "";
    this._state = "";
    this._city = "";
    this._neighborhood = "";
    this._street = "";
    this._supp = "";
    this._num = "";
  }

  /* method called by the service api to set the location data */
  setLocation(state, city, neighborhood, street, supp) {
    this._state = state;
    this._city = city;
    this._neighborhood = neighborhood;
    this._street = street;
    this._supp = supp;
  }

  /* set the rest of information that does not come from the api */
  setData(name, email, password, rg, cep) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._rg = rg;
    this._cep = cep;
  }

  /* set num info - it comes after the api service (avoid conflict) */
  setNum(number) {
    this._number = number;
  }

  /* getters */

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
