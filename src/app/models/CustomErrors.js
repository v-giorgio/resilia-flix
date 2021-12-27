class CustomErrors {
  emptyInput = "Campo obrigatório";
  onlyString = "Use apenas letras nesse campo";
  invalidEmail = "E-mail com formato inválido";
  invalidPassword =
    "Formato inválido. A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 símbolo e 1 número";
  cepLength = "O CEP deve conter apenas 8 números";
  RGLength = "O RG deve conter apenas 9 números";
  matchingPassword = "As senhas não coincidem";
  userAlreadyDefined = "Usuário já existe";
  userNotDefined = "Usuário não existe";
  emailSuccess =
    "O e-mail foi enviado com sucesso. Verifique sua caixa de entrada";
}

export default CustomErrors;
