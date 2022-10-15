const quantDesconto = (valorProduto, porcDesconto) =>
  (valorProduto -= valorProduto * (porcDesconto / 100));

console.log(
  "O valor do produto com o desconto aplicado é de R$" + quantDesconto(300, 10)
);
