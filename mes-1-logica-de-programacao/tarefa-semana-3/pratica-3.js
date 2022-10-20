function ehPrimo(num) {
  if (num <= 0) {
    console.log("Insira um número maior que zero");
  } else {
    let i = 2;

    while (i < num) {
      if (num % i == 0) {
        return false;
      } else {
        i++;
      }
    }
    return true;
  }
}

console.log(ehPrimo(17));
console.log(ehPrimo(2));
console.log(ehPrimo(7));
console.log(ehPrimo(8));
console.log(ehPrimo(5));
console.log(ehPrimo(23));
console.log(ehPrimo(15));
console.log(ehPrimo(1500450271));
