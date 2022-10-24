function insertionSort(lista) {
  const listaCopiada = [...lista];

  for (let i = 1; i < listaCopiada.length; i++) {
    const valorAtual = listaCopiada[i];
    let j = i - 1;

    while (j >= 0 && listaCopiada[j] > valorAtual) {
      listaCopiada[j + 1] = listaCopiada[j];
      j -= 1;
    }
    listaCopiada[j + 1] = valorAtual;
  }

  return listaCopiada;
}

const listaNumeros = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824];
console.log(insertionSort(listaNumeros));
