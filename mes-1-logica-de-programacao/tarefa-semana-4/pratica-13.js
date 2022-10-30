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

function movimentacoesPorData(transacoes) {
  for (let transacao of transacoes) {
    transacao.dataMovimentacao = new Date(transacao.dataMovimentacao);
  }

  transacoes.sort((a, b) => {
    return b.dataMovimentacao - a.dataMovimentacao;
  });

  console.log(transacoes);
}

movimentacoesPorData(movimentacoes);
