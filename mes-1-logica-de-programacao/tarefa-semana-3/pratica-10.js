function contagemVotos(totalVotos) {
  let brasil = 0,
    argentina = 0,
    espanha = 0,
    portugal = 0;

  for (let voto of totalVotos) {
    switch (voto) {
      case 1:
        brasil++;
        break;
      case 2:
        argentina++;
        break;
      case 3:
        espanha++;
        break;
      case 4:
        portugal++;
        break;
    }
  }

  if (brasil > argentina && brasil > espanha && brasil > portugal) {
    campeao = 'Brasil';
  } else if (argentina > espanha && argentina > portugal) {
    campeao = 'Argentina';
  } else if (espanha > portugal) {
    campeao = 'Espanha';
  } else {
    campeao = 'Portugal';
  }

  console.log(
    `Brasil: ${brasil} voto(s) \nArgentina: ${argentina} voto(s) \nEspanha: ${espanha} voto(s) \nPortugal: ${portugal} voto(s). \n\nResultado: \n${campeao} é o preferido para ganhar a Copa do Mundo!\n`
  );
}

const votacao = [1, 1, 1, 4, 4, 2, 3, 2];
const votacaoArg = [1, 1, 2, 4, 4, 2, 3, 2];
const votacaoEsp = [1, 1, 3, 4, 3, 2, 3, 2];
const votacaoPor = [1, 4, 4, 4, 3, 2, 3, 2];

contagemVotos(votacao);
contagemVotos(votacaoArg);
contagemVotos(votacaoEsp);
contagemVotos(votacaoPor);
