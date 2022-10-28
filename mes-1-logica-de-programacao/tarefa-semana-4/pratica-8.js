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
];

function exibeFilmes(filmes) {
  filmes.forEach(filme => {
    if (filme.genero.length > 1) {
      let ultimosGeneros = filme.genero.slice(-2);

      filme.genero.splice(-2);
      filme.genero = filme.genero.join(', ');

      ultimosGeneros = ultimosGeneros.join(' e ');

      filme.genero
        ? (filme.genero += ', ' + ultimosGeneros)
        : (filme.genero = ultimosGeneros);
    }

    console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})
    • Duração: ${filme.duracao} minutos
    • Ano de publicação: ${filme.anoPublicacao}
    • Gênero: ${filme.genero}\n`);
  });
}

exibeFilmes(listaFilmes);
