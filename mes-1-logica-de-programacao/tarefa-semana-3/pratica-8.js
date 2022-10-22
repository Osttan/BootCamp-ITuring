function saldoFinal(movimentacoes) {
  let saldoPositivo = 0,
    saldoNegativo = 0;

  for (let transacao of movimentacoes) {
    transacao > 0 ? (saldoPositivo += transacao) : (saldoNegativo += transacao);
  }

  console.log(
    `O valor total depositado foi de: R$${saldoPositivo} \nO valor total retirado foi de: R$${-saldoNegativo}`
  );

  saldoPositivo > -saldoNegativo
    ? console.log(
        `O saldo final de sua conta foi positivo no valor de R$${
          saldoPositivo + saldoNegativo
        }\n`
      )
    : console.log(
        `O saldo final de sua conta foi negativo no valor de -R$${
          -saldoPositivo - saldoNegativo
        }\n`
      );
}

const transacoes = [100, -20, -30, 10, -7, -21, -5];
const transacoesNeg = [100, -20, -50, -30, -40, -20];

saldoFinal(transacoes);
saldoFinal(transacoesNeg);
