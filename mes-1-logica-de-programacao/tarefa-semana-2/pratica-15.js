function calculoImc(peso, altura) {
  const imc = peso / (altura * altura);
  return resultadoImc(imc);
}

function resultadoImc(imc) {
  if (imc < 18.5) {
    return `Abaixo do Peso -> IMC ${imc.toFixed(2)}, abaixo de 18.5`;
  } else if (imc > 18.5 && imc < 25) {
    return `Peso Normal -> IMC ${imc.toFixed(2)}, entre 18.5 e 25`;
  } else if (imc > 25 && imc < 30) {
    return `Sobrepeso -> IMC ${imc.toFixed(2)}, entre 25 e 30`;
  } else {
    return `Obesidade -> IMC ${imc.toFixed(2)}, acima de 30`;
  }
}

console.log(calculoImc(50, 1.8));
console.log(calculoImc(60, 1.65));
console.log(calculoImc(95, 1.9));
console.log(calculoImc(110, 1.7));
