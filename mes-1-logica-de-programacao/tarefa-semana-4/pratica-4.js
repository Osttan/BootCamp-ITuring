function raizQuadrada(listaEntrada) {
  return listaEntrada.map(Math.sqrt);
}

const numeros = [4, 9, 16, 25, 36, 49];

console.log(raizQuadrada(numeros));
