function saudacaoComprador(nome) {
  console.log(`Olá, ${nome}\n`);
}

function dadosRecebimento(nomeProduto, nomeRecebeu, endRecebimento) {
  console.log(
    `Fizemos a entrega do produto ${nomeProduto} no endereço ${endRecebimento}, com sucesso!\nO Seu produto foi recebido por: ${nomeRecebeu}\nEsperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.\n`
  );
}

function remetente(remetenteEmail) {
  console.log(`Atenciosamente,\n${remetenteEmail}`);
}

saudacaoComprador("Andre");
dadosRecebimento("Playstation 5", "Vania Itokazu", "Rua Sete de Setembro, 138");
remetente("Submarino");
