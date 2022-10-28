const listaFilmes = [
  {
    titulo: 'Estrelas Além do Tempo',
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ['Biografia', 'Drama', 'História'],
  },
  {
    titulo: 'Top Gun Maverick',
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ['Ação', 'Drama'],
  },
  {
    titulo: 'O Jogo da Imitação',
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ['Biografia', 'Drama', 'Suspense', 'Guerra'],
  },

  {
    titulo: 'Poeira em Alto Mar',
    notaAvaliacao: 0.0,
    duracao: 240,
    anoPublicacao: 2013,
    genero: [
      'Biografia',
      'Drama',
      'Suspense',
      'Guerra',
      'Comédia',
      'Aventura',
      'Terror',
    ],
  },

  {
    titulo: 'As tranças do Rei Careca',
    notaAvaliacao: 10.0,
    duracao: 105,
    anoPublicacao: 1932,
    genero: ['Drama'],
  },
];

function exibeFilmes(filmes) {
  filmes.forEach(filme => {
    let generos = filme.genero;

    if (generos.length > 1) {
      let ultimosGeneros = generos.slice(-2);

      generos.splice(-2);
      generos = generos.join(', ');

      ultimosGeneros = ultimosGeneros.join(' e ');

      generos ? (generos += ', ' + ultimosGeneros) : (generos = ultimosGeneros);
    }

    console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})
    • Duração: ${filme.duracao} minutos
    • Ano de publicação: ${filme.anoPublicacao}
    • Gênero: ${generos}\n`);
  });
}

exibeFilmes(listaFilmes);
