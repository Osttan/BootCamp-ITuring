const seriados = [
  "Breaking Bad",
  "Game of Thrones",
  "Stranger Things",
  "Chernobyl",
  "Dexter",
  "The Last Dance",
  "This is Us",
];

function buscaSeriado(series, especial) {
  for (let i = 0; i < series.length; i++) {
    if (series[i] === especial) {
      return i;
    }
  }
  return undefined;
}

console.log(buscaSeriado(seriados, "Dexter"));
console.log(buscaSeriado(seriados, "The Last Dance"));
console.log(buscaSeriado(seriados, "Friends"));
