function saldoFinal(movimentacoes) {
  let saldo = 0;

  for (let transacao of movimentacoes) {
    saldo += transacao;
  }

  saldo > 0
    ? console.log(
        `O saldo final de sua conta foi positivo no valor de R$${saldo}`
      )
    : console.log(
        `O saldo final de sua conta foi negativo no valor de -R$${Math.abs(
          saldo
        )}`
      );
}

const transacoes = [100, -20, -30, 10, -7, -21, -5];
const transacoesNeg = [100, -20, -50, -30, -40, -20];

saldoFinal(transacoes);
saldoFinal(transacoesNeg);
