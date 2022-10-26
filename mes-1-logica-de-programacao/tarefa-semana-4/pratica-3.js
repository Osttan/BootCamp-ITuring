const seriados = [
  'Breaking Bad',
  'Game of Thrones',
  'Stranger Things',
  'Chernobyl',
  'Dexter',
  'The Last Dance',
  'This is Us',
];

function buscaTermoPesq(series, termo) {
  const resposta = series.filter(serie => {
    return serie.includes(termo);
  });

  return resposta.length ? resposta : 'O termo pesquisado não foi encontrado';
}

console.log(buscaTermoPesq(seriados, 'Th'));
console.log(buscaTermoPesq(seriados, 'ing'));
console.log(buscaTermoPesq(seriados, 'er'));
console.log(buscaTermoPesq(seriados, 'what'));
