function diaDaSemana(diaSemana) {
  switch (diaSemana) {
    case 1:
      return "01: Segunda";
      break;
    case 2:
      return "02: Terça";
      break;
    case 3:
      return "03: Quarta";
      break;
    case 4:
      return "04: Quinta";
      break;
    case 5:
      return "05: Sexta";
      break;
    case 6:
      return "06: Sábado";
      break;
    case 7:
      return "07: Domingo";
      break;
    default:
      return `O número ${diaSemana} não é válido para dia da semana`;
  }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(3));
console.log(diaDaSemana(4));
console.log(diaDaSemana(5));
console.log(diaDaSemana(6));
console.log(diaDaSemana(7));
console.log(diaDaSemana(100));
