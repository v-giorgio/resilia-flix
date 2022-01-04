import CustomErrors from "../models/CustomErrors.js";

class UserLocationService {
  errorsCheck = new CustomErrors();
  /* API CEP request */
  findByCEP(
    cep,
    user,
    location,
    inputState,
    inputCity,
    inputNeighborhood,
    inputStreet,
    inputSupp
  ) {
    $.ajax({
      method: "GET",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: (response) => {
        /*
          set the user location on the User class
          fill the inputs with the info received
        */
        try {
          //console.log(response);
          user.setLocation(
            response.uf,
            response.localidade,
            response.bairro,
            response.logradouro,
            response.complemento
          );
          location.fillInputs(
            inputState,
            inputCity,
            inputNeighborhood,
            inputStreet,
            inputSupp,
            user.getState(),
            user.getCity(),
            user.getNeighborhood(),
            user.getStreet(),
            user.getSupp()
          );
          return true;
        } catch (err) {
          throw new Error(err);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
}

export default UserLocationService;
