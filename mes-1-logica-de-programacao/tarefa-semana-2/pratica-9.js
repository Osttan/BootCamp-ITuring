function maiorDosDois(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`O número ${numero1} é o maior`);
  } else if (numero1 === numero2) {
    console.log(`Os números inseridos (${numero2}) são iguais`);
  } else {
    console.log(`O número ${numero2} é o maior`);
  }
}

maiorDosDois(6, 5);
