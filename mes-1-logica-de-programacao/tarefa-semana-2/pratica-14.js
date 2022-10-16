function calculoImc(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    return `Abaixo do Peso -> Altura ${altura}m e Peso ${peso}Kg, IMC ${imc.toFixed(
      2
    )}, abaixo de 18.5`;
  } else if (imc > 18.5 && imc < 25) {
    return `Peso Normal -> Altura ${altura}m e Peso ${peso}Kg, IMC ${imc.toFixed(
      2
    )}, entre 18.5 e 25`;
  } else if (imc > 25 && imc < 30) {
    return `Sobrepeso -> Altura ${altura}m e Peso ${peso}Kg, IMC ${imc.toFixed(
      2
    )}, entre 25 e 30`;
  } else {
    return `Obesidade -> Altura ${altura}m e Peso ${peso}Kg, IMC ${imc.toFixed(
      2
    )}, acima de 30`;
  }
}

console.log(calculoImc(50, 1.8));
console.log(calculoImc(60, 1.65));
console.log(calculoImc(95, 1.9));
console.log(calculoImc(110, 1.7));
