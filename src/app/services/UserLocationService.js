import CustomErrors from "../models/CustomErrors.js";

class UserLocationService {
  errorsCheck = new CustomErrors();
  /* API CEP request */
  findByCEP(cep, user) {
    $.ajax({
      method: "GET",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: (response) => {
        try {
          console.log(response);
          this.setUserLocation(response, user);
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }

  setUserLocation(response, user) {
    console.log(response.uf);
    user.setLocation(
      response.uf,
      response.localidade,
      response.bairro,
      response.logradouro,
      response.complemento
    );
  }
}

export default UserLocationService;
