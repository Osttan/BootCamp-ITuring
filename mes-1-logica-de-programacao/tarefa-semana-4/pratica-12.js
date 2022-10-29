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
    qtdDepositos = 0,
    retiradas = 0,
    qtdRetiradas = 0,
    saldo;

  transacoes.map(transacao => {
    if (transacao.movimentacao === 'deposito') {
      depositos += transacao.valor;
      qtdDepositos++;
    } else {
      retiradas += transacao.valor;
      qtdRetiradas++;
    }
  });

  saldo = depositos - retiradas;

  console.log(
    `Total de depósitos: ${qtdDepositos}\nTotal de retiradas: ${qtdRetiradas}\nO valor total depositado foi de: R$${depositos}\nO valor total retirado foi de: R$${retiradas}`
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
