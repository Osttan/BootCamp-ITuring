const seriados = [
  "Breaking Bad",
  "Game of Thrones",
  "Stranger Things",
  "Chernobyl",
  "Dexter",
  "The Last Dance",
  "This is Us",
];

function buscaTermoPesq(series, termo) {
  const resposta = [];

  for (let i = 0; i < series.length; i++) {
    if (series[i].includes(termo)) {
      resposta.push(series[i]);
    }
  }
  return resposta.length ? resposta : "O termo pesquisado não foi encontrado";
}

console.log(buscaTermoPesq(seriados, "Th"));
console.log(buscaTermoPesq(seriados, "ing"));
console.log(buscaTermoPesq(seriados, "er"));
console.log(buscaTermoPesq(seriados, "what"));
