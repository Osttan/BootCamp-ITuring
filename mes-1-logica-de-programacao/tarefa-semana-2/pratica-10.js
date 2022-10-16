function maiorDosTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(
  "O maior dos três números inseridos foi " + maiorDosTres(10, 20, 30)
);

console.log(
  "O maior dos três números inseridos foi " + maiorDosTres(30, 10, 20)
);

console.log(
  "O maior dos três números inseridos foi " + maiorDosTres(20, 30, 10)
);

console.log(
  "O maior dos três números inseridos foi " + maiorDosTres(15, 15, 15)
);
