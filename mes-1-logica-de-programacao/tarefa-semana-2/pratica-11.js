function exibirCores(cor) {
  switch (cor) {
    case "vermelha":
      return "rgb(255,0,0)";
      break;
    case "laranja":
      return "rgb(255,128,0)";
      break;
    case "amarela":
      return "rgb(255,255,0)";
      break;
    case "verde":
      return "rgb(,255,)";
      break;
    case "azul claro":
      return "rgb(0,255,255)";
      break;
    case "azul marinho":
      return "rgb(0,0,255)";
      break;
    case "rosa":
      return "rgb(255,0,255)";
      break;
    default:
      return "rgb(255,255,255)";
  }
}

console.log("Vermelho " + exibirCores("vermelha"));
console.log("Laranja " + exibirCores("laranja"));
console.log("Amarelo " + exibirCores("amarela"));
console.log("Verde " + exibirCores("verde"));
console.log("Azul Claro " + exibirCores("azul claro"));
console.log("Azul Marinho " + exibirCores("azul marinho"));
console.log("Rosa " + exibirCores("rosa"));
console.log("Sem match " + exibirCores("preto"));
console.log("Sem argumento " + exibirCores());
