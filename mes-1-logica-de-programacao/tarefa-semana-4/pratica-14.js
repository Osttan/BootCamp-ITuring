const avaliacoesClientes = {
  restaurante: 'Turing Gourmet',
  tipo: 'Comida britânica',
  avaliacoes: [
    {
      cliente: 'Thais S.',
      nota: 9.8,
    },
    {
      cliente: 'Thales Gonçalves',
      nota: 8.9,
    },
    {
      cliente: 'José Lopes',
      nota: 9.9,
    },
    {
      cliente: 'Cristina Souza',
      nota: 9.3,
    },
    {
      cliente: 'Leo Garcia',
      nota: 8.5,
    },
  ],
};

function mediaAvaliacoes(clientes) {
  let media = 0;

  clientes.avaliacoes.forEach(cliente => {
    media += cliente.nota;
  });

  console.log(
    `A média de avaliações do restaurante Turing Gourmet foi de ${(
      media / clientes.avaliacoes.length
    ).toFixed(2)}.`
  );
}

mediaAvaliacoes(avaliacoesClientes);
