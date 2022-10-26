const seriados = [
  'Breaking Bad',
  'Game of Thrones',
  'Stranger Things',
  'Chernobyl',
  'Dexter',
  'The Last Dance',
  'This is Us',
];

function buscaSeriado(series, especial) {
  let indice;
  series.forEach((serie, i) => {
    if (serie === especial) {
      indice = i;
    }
  });
  return indice ? indice : undefined;
}

console.log(buscaSeriado(seriados, 'Dexter'));
console.log(buscaSeriado(seriados, 'The Last Dance'));
console.log(buscaSeriado(seriados, 'Friends'));
