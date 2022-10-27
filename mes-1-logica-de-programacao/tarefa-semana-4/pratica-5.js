const dadosEntrada = [4, 9, 7, 1, 8, 12];

function ordenacao(listaEntrada) {
  return listaEntrada.sort((a, b) => {
    return a - b;
  });
}

console.log(ordenacao(dadosEntrada));
