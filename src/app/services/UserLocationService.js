class UserLocationService {
  /* API CEP request */
  findByCEP(cep) {
    $.ajax({
      method: "GET",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: (response) => {
        try {
          this.createLocation(response);
        } catch (err) {
          console.log(err);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
  /* Create user location with attributes */
  createLocation(response) {
    this._cep = response.cep;
    this._state = response.uf;
    this._city = response.localidade;
    this._neighborhood = response.bairro;
    this._street = response.logradouro;
    /*     console.log(
      this.cep,
      this.state,
      this.city,
      this.neighborhood,
      this.street
    ); */
  }
}
//test:
var place = new UserLocationService();
