function exibeImpares(num) {
  if (num <= 0) {
    console.log("Insira um número maior que zero");
  } else {
    let i = 1;

    while (i <= num) {
      console.log(i);
      i = i + 2;
    }
  }
  console.log("\n");
}

exibeImpares(0);
exibeImpares(1);
exibeImpares(7);
exibeImpares(20);
exibeImpares(37);
