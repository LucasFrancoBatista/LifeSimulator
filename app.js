/////////////////////////////
// INFORMAÇÕES BASE / VIDA
/////////////////////////////

let felicidade = 60;
let idade;
let autocontrole = 70;
let temParceira = false;

const beleza = Math.floor(Math.random() * 10) + 1;
let inteligencia = Math.floor(Math.random() * 70) + 1;
const testeBerçoDeOuro = Math.floor(Math.random() * 1000) + 1;
const engraçadinho = Math.floor(Math.random() * 100) + 1;
let berçoDeOuro = testeBerçoDeOuro === 999;

function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let alturaCrianca = numeroAleatorioEntre(140, 160);

/////////////////////////////
// AUMENTO / DIMINUIÇÃO DE VARIÁVEIS
/////////////////////////////

let neutro = 0;
let leveMais = 3;
let baixoMais = 5;
let medioMais = 7;
let graveMais = 10;

/////////////////////////////
// ITENS E VALORES
/////////////////////////////

let dinheiro = 80;
let salario = 20;
let barbie = 50;
let hotwheels = 20;
let fidgetSpinners = 30;
let videogame = 700;

/////////////////////////////
// INÍCIO DO JOGO
/////////////////////////////

const nome_char = prompt("Qual nome você deseja que seu personagem tenha?");

idade = 8;

alert(`Atualmente, ${nome_char} está na infância, com ${idade} anos.
Suas características são:
- Beleza: ${beleza}/10
- Altura: ${alturaCrianca} cm
- Inteligência: ${inteligencia}/150
- Engraçado: ${engraçadinho}/100
${nome_char} tem R$${dinheiro} guardados em um cofrinho.`);

/////////////////////////////
// EVENTO INFÂNCIA 1
/////////////////////////////

let respostaValida = false;

while (!respostaValida) {
  const escolhaInfancia = prompt("Que pena! Seu priminho estava brincando com você quando quebrou seu brinquedo favorito. Você quer 'bater' nele ou 'desculpar'?").toLowerCase().trim();

  if (escolhaInfancia === "bater") {
    felicidade -= graveMais;
    autocontrole -= baixoMais;
    dinheiro -= 20;
    alert(`Sua felicidade diminuiu pelo peso na consciência. Agora você tem ${felicidade} pontos de felicidade. Seu autocontrole também diminuiu, agora está em ${autocontrole}%. Por causa da sua atitude, sua mãe pegou R$20 do seu cofrinho. Agora você tem R$${dinheiro}.`);
    respostaValida = true;

  } else if (escolhaInfancia === "desculpar") {
    autocontrole += baixoMais;
    dinheiro += salario;
    alert(`Sua felicidade abaixou um pouco, agora está com ${felicidade} pontos. Mas seu autocontrole aumentou para ${autocontrole}%. Pelo seu ato, sua mãe decidiu te dar R$${salario} de presente. Agora você tem R$${dinheiro}.`);
    respostaValida = true;

  } else {
    alert("Resposta inválida. Digite 'bater' ou 'desculpar'.");
  }
}

/////////////////////////////
// EVENTO INFÂNCIA 2 OU 3 (ALEATÓRIO)
/////////////////////////////

const numeroRandom = numeroAleatorioEntre(1, 2);
const numeroAposta = numeroAleatorioEntre(1, 1000);

if (numeroRandom === 1) {
  // EVENTO INFÂNCIA 2 – APOSTAR OU INVESTIR
  let respostaInfancia2Valida = false;

  while (!respostaInfancia2Valida) {
    const escolhaInfancia2 = prompt("No 6º ano, você estava conversando com dois colegas. Um disse que ganhou muito dinheiro apostando no MAC, o outro falou que investiu no tesouro SELIC. Você precisa de dinheiro para comprar um videogame. Você irá 'apostar' ou 'investir'?").toLowerCase().trim();

    if (escolhaInfancia2 === "apostar") {
      if (numeroAposta === 666) {
        alert("Você teve muita sorte e ganhou 2.141.566.418.580 (o dinheiro do Elon Musk), mas decidiu tentar a sorte novamente e perdeu tudo. Recomece!");
        window.location.reload();
      } else {
        autocontrole -= 20;
        alert(`Você perdeu a aposta. Seu autocontrole caiu para ${autocontrole}%.`);
      }
      respostaInfancia2Valida = true;

    } else if (escolhaInfancia2 === "investir") {
      let investiuQuanto = Number(prompt(`Quanto você deseja investir? Lembrando que você tem R$${dinheiro}.`));
      while (true) {
        if (investiuQuanto > dinheiro || isNaN(investiuQuanto) || investiuQuanto <= 0) {
          alert("Valor inválido ou você não tem tanto dinheiro.");
          investiuQuanto = Number(prompt(`Digite um valor válido. Você tem R$${dinheiro}.`));
        } else {
          dinheiro -= investiuQuanto;
          investiuQuanto *= 10;
          dinheiro += investiuQuanto;
          alert(`No início do 3º ano do ensino médio você terá R$${dinheiro}!`);
          break;
        }
      }
      respostaInfancia2Valida = true;

    } else {
      alert("Resposta inválida. Digite 'apostar' ou 'investir'.");
    }
  }

} else {
  // EVENTO INFÂNCIA 3 – COMPRAR BRINQUEDOS OU POUPAR
  let respostaInfancia3Valida = false;

  while (!respostaInfancia3Valida) {
    const escolhaInfancia3 = prompt(`Novos brinquedos estão na moda:
- 'barbie' R$${barbie}
- 'hotwheels' R$${hotwheels}
- 'fidgetSpinners' R$${fidgetSpinners}
Ou você pode criar uma 'poupança' para algo mais necessário ou caro no futuro. O que irá fazer? Você tem R$${dinheiro}.`).toLowerCase().trim();

    if (escolhaInfancia3 === "barbie") {
      dinheiro -= barbie;
      felicidade += medioMais;
      alert(`Você comprou sua Barbie com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
      respostaInfancia3Valida = true;

    } else if (escolhaInfancia3 === "hotwheels") {
      dinheiro -= hotwheels;
      felicidade += leveMais;
      alert(`Você comprou seu Hot Wheels com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
      respostaInfancia3Valida = true;

    } else if (escolhaInfancia3 === "fidgetSpinners") {
      dinheiro -= fidgetSpinners;
      felicidade += baixoMais;
      alert(`Você comprou seu Fidget Spinner com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
      respostaInfancia3Valida = true;

    } else if (escolhaInfancia3 === "poupança") {
      let pouparQuanto = Number(prompt(`Quanto você deseja poupar? Você tem R$${dinheiro}.`));
      while (true) {
        if (pouparQuanto > dinheiro || isNaN(pouparQuanto) || pouparQuanto <= 0) {
          alert("Valor inválido ou você não tem tanto dinheiro.");
          pouparQuanto = Number(prompt(`Digite um valor válido. Você tem R$${dinheiro}.`));
        } else {
          dinheiro -= pouparQuanto;
          pouparQuanto *= 7;
          dinheiro += pouparQuanto;
          alert(`No início do 3º ano do ensino médio você terá R$${dinheiro}!`);
          break;
        }
      }
      respostaInfancia3Valida = true;

    } else {
      alert("Resposta inválida. Digite 'barbie', 'hotwheels', 'fidgetSpinners' ou 'poupança'.");
    }
  }
}

/////////////////////////////
// ADOLESCÊNCIA (TERCEIRÃO)
/////////////////////////////

idade = 17;
alert(`Agora ${nome_char} está no terceirão, com ${idade} anos.`);

let numeroRandom2 = numeroAleatorioEntre(1, 3);

if (numeroRandom2 === 1) {
  let respostaTerceiraoValida = false;

  while (!respostaTerceiraoValida) {
    const escolhaTerceirao = prompt(`O último sextou de novembro chegou! Nesta Black Friday o videogame que você quer há tanto tempo está na promoção, apenas R$${videogame}. Você irá 'comprar' ou 'guardar' o dinheiro?`).toLowerCase().trim();

    if (escolhaTerceirao === "comprar") {
      if (dinheiro >= videogame) {
        dinheiro -= videogame;
        felicidade += graveMais;
        alert(`Você comprou o videogame dos sonhos! Sua felicidade agora é ${felicidade}.`);
      } else {
        alert("Você não tem dinheiro suficiente para comprar esse videogame.");
      }
      respostaTerceiraoValida = true;

    } else if (escolhaTerceirao === "guardar") {
      autocontrole += medioMais;
      alert(`Você preferiu guardar seu dinheiro, parabéns pelo autocontrole! Agora seu autocontrole é ${autocontrole}%.`);
      respostaTerceiraoValida = true;

    } else {
      alert("Resposta inválida. Digite 'comprar' ou 'guardar'.");
    }
  }

} else if (numeroRandom2 === 2) {
  let respostaValida = false;

  while (!respostaValida) {
    let escolha = prompt("Você descobriu que pode fazer ENEM com treineiro esse ano. Deseja tentar para treinar ou prefere focar nos estudos do colégio? Responda 'tentar' ou 'focar'.").toLowerCase().trim();

    if (escolha === "tentar") {
      inteligencia += medioMais;
      alert(`Você teve uma experiência valiosa. Sua inteligência agora é ${inteligencia}.`);
      respostaValida = true;

    } else if (escolha === "focar") {
      autocontrole += baixoMais;
      alert(`Você ganhou mais disciplina para as provas escolares. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'tentar' ou 'focar'.");
    }
  }

} else if (numeroRandom2 === 3) {
  let respostaValida = false;

  while (!respostaValida) {
    let escolha = prompt("Você foi convidado(a) para uma festa de formatura incrível, mas precisa escolher entre gastar dinheiro na festa ou guardar para o futuro. Escolha 'festa' ou 'guardar'.").toLowerCase().trim();

    if (escolha === "festa") {
      dinheiro -= 300;
      felicidade += graveMais;
      alert(`Você aproveitou muito a festa! Sua felicidade agora é ${felicidade}, mas seu dinheiro caiu para R$${dinheiro}.`);
      respostaValida = true;

    } else if (escolha === "guardar") {
      autocontrole += medioMais;
      alert(`Você guardou o dinheiro. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'festa' ou 'guardar'.");
    }
  }
}

/////////////////////////////
// VIDA ADULTA (25 anos)
/////////////////////////////

idade = 25;
alert(`${nome_char} agora está na vida adulta, com ${idade} anos.`);

let numeroRandom3 = numeroAleatorioEntre(1, 3);

if (numeroRandom3 === 1) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você recebeu uma promoção no trabalho, mas exigirá mais horas e menos tempo livre. Aceita? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      inteligencia += 10;
      felicidade -= 5;
      autocontrole += 5;
      alert(`Sua inteligência subiu para ${inteligencia}, mas sua felicidade caiu para ${felicidade}. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else if (resposta === "não") {
      felicidade += 5;
      alert(`Você ganhou mais tempo livre! Sua felicidade agora é ${felicidade}.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }

} else if (numeroRandom3 === 2) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você foi convidado(a) para ser modelo de uma marca local. Aceita? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      beleza += 2;
      dinheiro += 200;
      felicidade += 5;
      alert(`Você arrasou! Sua beleza agora é ${beleza}, ganhou R$200 e sua felicidade subiu para ${felicidade}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      autocontrole += 3;
      alert(`Você manteve o foco nos estudos/trabalho. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }

} else if (numeroRandom3 === 3) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você está se sentindo ansioso(a) ultimamente. Quer iniciar terapia? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      autocontrole += 10;
      dinheiro -= 150;
      alert(`Sua mente agradece! Seu autocontrole agora é ${autocontrole}, mas seu dinheiro caiu para R$${dinheiro}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      autocontrole -= 10;
      felicidade -= 5;
      alert(`Sua ansiedade aumentou. Seu autocontrole agora é ${autocontrole} e sua felicidade caiu para ${felicidade}.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }
}

/////////////////////////////
// MEIA IDADE (40 anos)
/////////////////////////////

idade = 40;
alert(`${nome_char} agora está na meia idade, com ${idade} anos.`);

let numeroRandom4 = numeroAleatorioEntre(1, 2);

if (numeroRandom4 === 1) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você decidiu começar academia para melhorar sua saúde e autoestima. Vai seguir com isso? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      beleza += 2;
      autocontrole += 5;
      felicidade += 5;
      alert(`Você está mais bonito(a) e saudável! Sua beleza agora é ${beleza}, autocontrole ${autocontrole}% e felicidade ${felicidade}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      beleza -= 1;
      felicidade -= 3;
      alert(`Você se sentiu mal por não ter iniciado. Sua beleza agora é ${beleza} e felicidade ${felicidade}.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }

} else if (numeroRandom4 === 2) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você recebeu proposta para trabalhar em outra cidade com salário maior, mas longe da família e amigos. Aceita? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      dinheiro += 1000;
      autocontrole -= 5;
      alert(`Mudança difícil mas rentável! Seu dinheiro agora é R$${dinheiro}, mas seu autocontrole caiu para ${autocontrole}%.`);
      respostaValida = true;

    } else if (resposta === "não") {
      felicidade += 5;
      alert(`Você preferiu estabilidade perto de quem ama. Sua felicidade agora é ${felicidade}.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }
}

/////////////////////////////
// TERCEIRA IDADE (65 anos)
/////////////////////////////

idade = 65;
alert(`${nome_char} agora está na terceira idade, com ${idade} anos.`);

let numeroRandom5 = numeroAleatorioEntre(1, 3);

if (numeroRandom5 === 1) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Te convidaram para viajar pelo mundo com amigos. Vai? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      felicidade += 20;
      dinheiro -= 1000;
      alert(`Viagem inesquecível! Sua felicidade subiu para ${felicidade}, mas seu dinheiro caiu para R$${dinheiro}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      autocontrole += 5;
      alert(`Você decidiu economizar. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }

} else if (numeroRandom5 === 2) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você começou a ter problemas de memória. Vai ao médico? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      inteligencia += 5;
      dinheiro -= 500;
      alert(`O tratamento ajudou! Sua inteligência agora é ${inteligencia} e seu dinheiro é R$${dinheiro}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      inteligencia -= 10;
      felicidade -= 5;
      alert(`Sua memória piorou. Sua inteligência agora é ${inteligencia} e felicidade ${felicidade}.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }

} else if (numeroRandom5 === 3) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você quer escrever um livro de memórias contando tudo que viveu? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      inteligencia += 10;
      felicidade += 10;
      alert(`Que incrível! Sua inteligência agora é ${inteligencia} e felicidade ${felicidade}.`);
      respostaValida = true;

    } else if (resposta === "não") {
      autocontrole -= 5;
      alert(`Você desistiu facilmente. Seu autocontrole agora é ${autocontrole}%.`);
      respostaValida = true;

    } else {
      alert("Resposta inválida. Digite 'sim' ou 'não'.");
    }
  }
}

/////////////////////////////
// AVALIAÇÕES FINAIS
/////////////////////////////

if (inteligencia > 150) inteligencia = 150;
if (beleza > 20) beleza = 20;
if (autocontrole > 100) autocontrole = 100;
if (engraçadinho > 100) engraçadinho = 100;

function avaliar(variavel, nome, max) {
  let mensagem = "";
  let limiteBaixo = max * 0.5;
  let limiteMedio = max * 0.75;

  if (variavel < limiteBaixo) {
    mensagem = `❌ Seu/Sua ${nome} está baixo(a): ${variavel}/${max}`;
  } else if (variavel < limiteMedio) {
    mensagem = `⚠️ Seu/Sua ${nome} está mediano(a): ${variavel}/${max}`;
  } else {
    mensagem = `✅ Seu/Sua ${nome} está excelente: ${variavel}/${max}`;
  }
  alert(mensagem);
}

avaliar(felicidade, "felicidade", 100);
avaliar(inteligencia, "inteligência", 150);
avaliar(beleza, "beleza", 20);
avaliar(autocontrole, "autocontrole", 100);
avaliar(dinheiro, "dinheiro", 3000);

alert("🎉 Fim do seu jogo. Obrigado por jogar!");
console.log("Script finalizado.");