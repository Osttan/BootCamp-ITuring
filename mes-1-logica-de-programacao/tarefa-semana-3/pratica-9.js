function extratoCompleto(movimentacoes) {
  let depositos = 0,
    retiradas = 0,
    saldoPositivo = 0,
    saldoNegativo = 0;

  for (let transacao of movimentacoes) {
    if (transacao > 0) {
      saldoPositivo += transacao;
      depositos++;
    } else {
      saldoNegativo += transacao;
      retiradas++;
    }
  }
  console.log(
    `Total de depósitos: ${depositos} \nTotal de retiradas: ${retiradas} \nO valor total depositado foi de: R$${saldoPositivo} \nO valor total retirado foi de: R$${-saldoNegativo}`
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

extratoCompleto(transacoes);
extratoCompleto(transacoesNeg);
