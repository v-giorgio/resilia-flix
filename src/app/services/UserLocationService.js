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
          //console.log(response);
          user.setLocation(
            response.uf,
            response.localidade,
            response.bairro,
            response.logradouro,
            response.complemento
          );
        } catch (err) {
          console.log(err);
          throw new Error(this.errorsCheck.apiError);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
}

export default UserLocationService;
