const seriados = [
  "Breaking Bad",
  "Game of Thrones",
  "Stranger Things",
  "Chernobyl",
  "Dexter",
  "The Last Dance",
  "This is Us",
];

function exibeSeriadosIndices(series) {
  for (let i = 0; i < series.length; i++) {
    console.log(`[${i}] ` + series[i]);
  }
}

exibeSeriadosIndices(seriados);
