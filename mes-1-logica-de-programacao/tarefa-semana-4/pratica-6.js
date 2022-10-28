const movie = {
  titulo: 'The Warriors',
  notaDeAvaliacao: 7.5,
  duracao: 93,
  anoDePublicacao: 1979,
  categoria: 'Ação',
};

function exibeFilme(filme) {
  console.log(
    `O filme ${filme.titulo} estreou em ${filme.anoDePublicacao} e tem avaliação de ${filme.notaDeAvaliacao} pelo IMDb.`
  );
}

exibeFilme(movie);
