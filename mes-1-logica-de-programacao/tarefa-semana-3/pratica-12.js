function divideGrupos(pessoas) {
  let novoArray = [],
    faltante;

  if (pessoas.length % 2 !== 0) {
    faltante = pessoas[pessoas.length - 1];
    pessoas.pop();
  }

  for (let i = 0; i < pessoas.length; i = i + 2) {
    novoArray.push(pessoas.slice(i, i + 2));
  }

  if (faltante) {
    novoArray[novoArray.length - 1].push(faltante);
  }

  for (let [i, grupo] of novoArray.entries()) {
    console.log(`Grupo ${i + 1}: ${grupo}`);
  }
}
const pessoas = [
  'Anderson Luz',
  'Fabio Vechia',
  'Claudia Lopes',
  'Rafael Alves',
  'Maria Mansano',
  'Jairo Ferreira',
  'Vitor Ribeiro',
];

divideGrupos(pessoas);
