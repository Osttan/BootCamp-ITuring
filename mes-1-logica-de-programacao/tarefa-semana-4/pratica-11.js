const movimentacoes = [
  {
    valor: 100.0,
    movimentacao: 'deposito',
    dataMovimentacao: '2021-08-02T07:46:36.611Z',
  },
  {
    valor: 20.0,
    movimentacao: 'retirada',
    dataMovimentacao: '2021-09-17T09:46:36.611Z',
  },
  {
    valor: 30.0,
    movimentacao: 'retirada',
    dataMovimentacao: '2022-02-24T09:46:36.611Z',
  },
  {
    valor: 10.0,
    movimentacao: 'deposito',
    dataMovimentacao: '2022-03-02T09:46:36.611Z',
  },
  {
    valor: 7.0,
    movimentacao: 'retirada',
    dataMovimentacao: '2022-04-20T09:46:36.611Z',
  },
  {
    valor: 21.0,
    movimentacao: 'retirada',
    dataMovimentacao: '2022-03-20T09:46:36.611Z',
  },
  {
    valor: 5.0,
    movimentacao: 'retirada',
    dataMovimentacao: '2022-06-08T09:46:36.611Z',
  },
];

function saldoFinal(transacoes) {
  let depositos = 0,
    retiradas = 0,
    saldo;

  transacoes.forEach(transacao => {
    transacao.movimentacao === 'deposito'
      ? (depositos += transacao.valor)
      : (retiradas += transacao.valor);
  });

  saldo = depositos - retiradas;

  console.log(
    `O valor total depositado foi de: R$${depositos}\nO valor total retirado foi de: R$${retiradas}`
  );

  saldo >= 0
    ? console.log(
        `O saldo final de sua conta foi positivo no valor de R$${saldo}.`
      )
    : console.log(
        `O saldo final de sua conta foi negativo no valor de R$${Math.abs(
          saldo
        )}.`
      );
}

saldoFinal(movimentacoes);
