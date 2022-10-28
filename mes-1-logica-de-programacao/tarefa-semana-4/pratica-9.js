const listaFilmes = [
  {
    titulo: 'Um Sonho de Liberdade',
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: 'Drama',
  },
  {
    titulo: 'Clube da Luta',
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: 'Drama',
  },
  {
    titulo: 'Toy Story 3',
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: 'Animação',
  },
];

function melhorAvaliado(filmes) {
  filmes.sort((a, b) => {
    if (a === b) {
      return 0;
    } else {
      return a - b;
    }
  });

  console.log(
    `O filme de melhor avaliação com nota ${filmes[0].notaAvaliacao} é: ${
      filmes[0].titulo
    }.\nJá o pior avaliado é o ${
      filmes[filmes.length - 1].titulo
    }, com a nota de ${filmes[filmes.length - 1].notaAvaliacao}`
  );
}

melhorAvaliado(listaFilmes);
