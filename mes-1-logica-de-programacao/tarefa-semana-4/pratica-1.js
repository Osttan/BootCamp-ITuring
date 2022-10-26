const seriados = [
  'Breaking Bad',
  'Game of Thrones',
  'Stranger Things',
  'Chernobyl',
  'Dexter',
  'The Last Dance',
  'This is Us',
];

function exibeSeriadosIndices(series) {
  series.forEach((serie, i) => {
    console.log(`[${i}] ` + serie);
  });
}

exibeSeriadosIndices(seriados);
