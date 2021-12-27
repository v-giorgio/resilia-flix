class UserLocationService {
  /* API CEP request */
  findByCEP(cep, user) {
    $.ajax({
      method: "GET",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: (response) => {
        try {
          console.log(response);
          user.setLocation(
            response.uf,
            response.localidade,
            response.bairro,
            response.logradouro
          );
        } catch (err) {
          console.log(err);
        }
      },
      error: (xhr, thrownError) => {
        console.log(xhr, thrownError);
      },
    });
  }
}

export default UserLocationService;
