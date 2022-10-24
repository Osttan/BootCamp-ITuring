function contagemVotos(totalVotos) {
  let listaVotos = [0, 0, 0, 0],
    campeao;

  for (let voto of totalVotos) {
    switch (voto) {
      case 1:
        listaVotos[0]++;
        break;
      case 2:
        listaVotos[1]++;
        break;
      case 3:
        listaVotos[2]++;
        break;
      case 4:
        listaVotos[3]++;
        break;
    }
  }

  switch (listaVotos.indexOf(votosDoCampeao(listaVotos))) {
    case 0:
      campeao = 'Brasil';
      break;
    case 1:
      campeao = 'Argentina';
      break;
    case 2:
      campeao = 'Espanha';
      break;
    case 3:
      campeao = 'Portugal';
      break;
  }

  console.log(
    `Brasil: ${listaVotos[0]} voto(s) \nArgentina: ${listaVotos[1]} voto(s) \nEspanha: ${listaVotos[2]} voto(s) \nPortugal: ${listaVotos[3]} voto(s). \n\nResultado: \n${campeao} é o preferido para ganhar a Copa do Mundo!\n`
  );
}

function votosDoCampeao(votosTotais) {
  let maisVotado = 0;

  for (let voto of votosTotais) {
    if (voto > maisVotado) {
      maisVotado = voto;
    }
  }

  return maisVotado;
}

const votacao = [1, 1, 1, 4, 4, 2, 3, 2];
const votacaoArg = [1, 1, 2, 4, 4, 2, 3, 2];
const votacaoEsp = [1, 1, 3, 4, 3, 2, 3, 2];
const votacaoPor = [1, 4, 4, 4, 3, 2, 3, 2];

contagemVotos(votacao);
contagemVotos(votacaoArg);
contagemVotos(votacaoEsp);
contagemVotos(votacaoPor);
