const quantDesconto = function (valorProduto, porcDesconto) {
  return (valorProduto -= valorProduto * (porcDesconto / 100));
};

console.log(
  "O valor do produto com o desconto aplicado é de R$" + quantDesconto(200, 10)
);
