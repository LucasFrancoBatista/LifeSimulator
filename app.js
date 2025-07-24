/////////////////////////////
// INFORMAÇÕES BASE DA VIDA
/////////////////////////////

let felicidade = 60;
let idade;
let autocontrole = 70;
let temParceira = false;

const beleza = Math.floor(Math.random() * 10) + 1;
let inteligencia = Math.floor(Math.random() * 70) + 1;
const testeBerçoDeOuro = Math.floor(Math.random() * 1000) + 1;
const engraçadinho = Math.floor(Math.random() * 100) + 1;
let berçoDeOuro = testeBerçoDeOuro === 999 ? true : false;

function numeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let alturaCriança = numeroAleatorioEntre(140, 160);

/////////////////////////////
// MODIFICAÇÃO DE VARIÁVEIS
/////////////////////////////

let neutro = 0;
let leveMais = 3;
let baixoMais = 5;
let medioMais = 7;
let graveMais = 10;

/////////////////////////////
// DINHEIRO E PRODUTOS
/////////////////////////////

let dinheiro = 80;
let salario = 20;
let barbie = 50;
let hotwheels = 20;
let fidgetSpinners = 30;
let videogame = 700;

/////////////////////////////
// CRIAÇÃO DO PERSONAGEM
/////////////////////////////

const nome_char = prompt("Qual nome você deseja dar ao seu personagem?");
idade = 8;

alert(`Atualmente, ${nome_char} está na infância, com ${idade} anos. Suas características são: beleza ${beleza}/10, altura ${alturaCriança}cm, inteligência ${inteligencia}/150, engraçado ${engraçadinho}/100. ${nome_char} tem R$${dinheiro} guardados em um cofrinho.`);

/////////////////////////////
// EVENTO INFÂNCIA 1
/////////////////////////////

let respostaValida = false;

while (!respostaValida) {
  const escolhaInfancia = prompt("Que pena! Seu priminho estava brincando com você quando quebrou o seu brinquedo favorito. Você quer 'bater' nele ou 'desculpar'?").toLowerCase().trim();

  if (escolhaInfancia === "bater") {
    felicidade -= graveMais;
    autocontrole -= baixoMais;
    dinheiro -= 20;
    alert(`Sua felicidade agora diminuiu por causa do peso na consciência. Agora você está com ${felicidade} pontos de felicidade. Seu autocontrole também caiu, agora está em ${autocontrole}%. Por causa da sua atitude, sua mãe pegou R$20 do seu cofrinho. Agora você está com R$${dinheiro}.`);
    respostaValida = true;

  } else if (escolhaInfancia === "desculpar") {
    autocontrole += baixoMais;
    dinheiro += salario;
    alert(`Sua felicidade abaixou um pouco, agora está com ${felicidade} pontos. Mas seu autocontrole aumentou para ${autocontrole}%. Pelo seu ato de maturidade, sua mãe decide te dar R$${salario} de presente. Agora você tem R$${dinheiro}.`);
    respostaValida = true;

  } else {
    alert("Resposta inválida. Por favor, escolha 'bater' ou 'desculpar'.");
  }
}

/////////////////////////////
// EVENTO INFÂNCIA 2 OU 3
/////////////////////////////

const numeroRandom = numeroAleatorioEntre(1, 2);
const numeroAposta = numeroAleatorioEntre(1, 1000);

if (numeroRandom === 1) {
  let respostaInfancia2Valida = false;

  while (!respostaInfancia2Valida) {
    const escolhaInfancia2 = prompt("No 6º ano, você estava em uma conversa com dois colegas. Um deles falou que ganhou muito dinheiro apostando no MAC e o outro disse que investiu no tesouro SELIC. Você realmente precisava de grana para comprar um videogame. Você irá 'apostar' ou 'investir'?").toLowerCase().trim();

    if (escolhaInfancia2 === "apostar") {
      if (numeroAposta === 666) {
        alert("Você teve muita sorte e ganhou bilhões (o dinheiro do Elon Musk), mas você decidiu tentar a sorte novamente e perdeu tudo. Recomece!");
        respostaInfancia2Valida = true;
        setTimeout(() => window.location.reload(), 100);
      } else {
        autocontrole -= 20;
        alert(`Você perdeu a aposta. Seu autocontrole caiu para ${autocontrole}%.`);
        respostaInfancia2Valida = true;
      }

    } else if (escolhaInfancia2 === "investir") {
      let investiuQuanto = Number(prompt(`Quanto você deseja investir? Lembrando que você tem R$${dinheiro}.`));
      let temDinheiroInvestir = false;

      while (!temDinheiroInvestir) {
        if (investiuQuanto > dinheiro || isNaN(investiuQuanto) || investiuQuanto <= 0) {
          alert("Resposta inválida. Digite um valor que você possua e que seja maior que zero.");
          investiuQuanto = Number(prompt(`Digite um valor válido. Você tem R$${dinheiro}.`));
        } else {
          dinheiro -= investiuQuanto;
          investiuQuanto *= 10;
          dinheiro += investiuQuanto;
          alert(`No início do 3º ano do ensino médio, você terá R$${dinheiro}.`);
          temDinheiroInvestir = true;
          respostaInfancia2Valida = true;
        }
      }

    } else {
      alert("Resposta inválida. Digite 'apostar' ou 'investir'.");
    }
  }

} else {
  let respostaInfancia3Valida = false;

  while (!respostaInfancia3Valida) {
    const escolhaInfancia3 = prompt(`Novos brinquedos estão na moda: a 'barbie' (R$${barbie}), 'hotwheels' (R$${hotwheels}), 'fidgetspinners' (R$${fidgetSpinners}). Ou você pode criar uma 'poupança' para comprar algo mais necessário ou caro no futuro. O que você irá fazer? Você tem R$${dinheiro}.`).toLowerCase().trim();

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

    } else if (escolhaInfancia3 === "fidgetspinners") {
      dinheiro -= fidgetSpinners;
      felicidade += baixoMais;
      alert(`Você comprou seu Fidget Spinner com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
      respostaInfancia3Valida = true;

    } else if (escolhaInfancia3 === "poupança") {
      let pouparQuanto = Number(prompt(`Quanto você deseja poupar? Você tem R$${dinheiro}.`));
      let temDinheiroPoupar = false;

      while (!temDinheiroPoupar) {
        if (pouparQuanto > dinheiro || isNaN(pouparQuanto) || pouparQuanto <= 0) {
          alert("Resposta inválida. Digite um valor que você possua e que seja maior que zero.");
          pouparQuanto = Number(prompt(`Digite um valor válido. Você tem R$${dinheiro}.`));
        } else {
          dinheiro -= pouparQuanto;
          pouparQuanto *= 7;
          dinheiro += pouparQuanto;
          alert(`No início do 3º ano do ensino médio, sua poupança rendeu e você tem R$${dinheiro}.`);
          temDinheiroPoupar = true;
          respostaInfancia3Valida = true;
        }
      }

    } else {
      alert("Resposta inválida. Digite 'barbie', 'hotwheels', 'fidgetspinners' ou 'poupança'.");
    }
  }
}

/////////////////////////////
// EVENTO TERCEIRÃO
/////////////////////////////

const numeroRandom2 = numeroAleatorioEntre(1, 2);

if (numeroRandom2 === 1) {
  let escolhaTerceiraoValida = false;

  while (!escolhaTerceiraoValida) {
    const escolhaTerceirao = prompt(`O último sextou de novembro chegou! Nesta Black Friday, o videogame que você quer há tanto tempo está em promoção, apenas R$${videogame}. ${nome_char} decide 'comprar' ou 'não comprar'?`).toLowerCase().trim();

    if (escolhaTerceirao === "comprar") {
      if (dinheiro < videogame) {
        alert("Você não tem dinheiro suficiente.");
      } else {
        felicidade += graveMais;
        dinheiro -= videogame;
        alert(`Parabéns pela sua aquisição! Agora você está com ${felicidade} pontos de felicidade e R$${dinheiro}.`);
      }
      escolhaTerceiraoValida = true;

    } else if (escolhaTerceirao === "não comprar") {
      alert(`${nome_char} decidiu que não era a hora certa.`);
      escolhaTerceiraoValida = true;

    } else {
      alert("Resposta inválida. Digite 'comprar' ou 'não comprar'.");
    }
  }

} else {
  let escolhaTerceiraoValida2 = false;

  while (!escolhaTerceiraoValida2) {
    alert("O provão final do terceirão chegou e você está à beira de reprovar! Seus amigos te convidaram para ir à lanchonete.");

    const escolhaTerceirao2 = prompt("O que você irá fazer? 'estudar' ou 'ir à lanchonete'?").toLowerCase().trim();

    if (escolhaTerceirao2 === "estudar") {
      let estudarQntoValida = false;

      while (!estudarQntoValida) {
        const estudarQnto = prompt("Você quer estudar por quanto tempo? 'uma hora', 'duas horas' ou 'três horas'?").toLowerCase().trim();

        if (estudarQnto === "uma hora") {
          inteligencia += 15;
        } else if (estudarQnto === "duas horas") {
          inteligencia += 20;
        } else if (estudarQnto === "três horas") {
          inteligencia += 25;
        } else {
          alert("Resposta inválida. Escolha 'uma hora', 'duas horas' ou 'três horas'.");
          continue;
        }

        let nota = inteligencia / 10;
        if (nota > 10) nota = 10;

        if (nota < 7) {
          felicidade -= 10;
          alert(`${nome_char} tirou ${nota} na prova final, reprovando. Sua mãe ficou decepcionada e sua felicidade caiu para ${felicidade}.`);
          if (berçoDeOuro) alert("Mas, como sua família é milionária, você não precisará trabalhar mesmo...");
        } else if (nota >= 7 && nota < 10) {
          felicidade += 10;
          alert(`Você passou com ${nota} na prova final! Sua felicidade aumentou para ${felicidade}. Mas sua mãe disse que não fez mais que sua obrigação.`);
        } else if (nota >= 10) {
          felicidade += 20;
          dinheiro += 200;
          alert(`Você tirou nota ${nota} máxima! Sua mãe te deu R$200 de presente. Agora você tem R$${dinheiro} e ${felicidade} pontos de felicidade.`);
        }

        estudarQntoValida = true;
        escolhaTerceiraoValida2 = true;
      }

    } else if (escolhaTerceirao2 === "ir à lanchonete") {
      let respostaBarzin = false;

      while (!respostaBarzin) {
        const pessoaAtraente = prompt("No meio da noite, você encontra uma pessoa atraente. Você quer 'conversar' ou 'deixar para lá'?").toLowerCase().trim();

        if (pessoaAtraente === "conversar") {
          let conquistador = beleza + engraçadinho;
          if (conquistador < 67) {
            felicidade += graveMais;
            dinheiro -= 60;
            alert(`Vocês viraram mais que amigos. Agora você tem um(a) parceiro(a)! Sua felicidade é ${felicidade}. Mas gastou R$60 no jantar, sobrando R$${dinheiro}.`);
            temParceira = true;
          } else {
            felicidade -= 3;
            dinheiro -= 40;
            alert(`A pessoa não queria nada sério. Sua felicidade caiu para ${felicidade}. Você ainda teve que pagar R$40 do jantar. Agora tem R$${dinheiro}.`);
            temParceira = false;
          }
          respostaBarzin = true;
          escolhaTerceiraoValida2 = true;

        } else if (pessoaAtraente === "deixar para lá") {
          alert("Você decidiu não conversar.");
          respostaBarzin = true;
          escolhaTerceiraoValida2 = true;

        } else {
          alert("Resposta inválida. Digite 'conversar' ou 'deixar para lá'.");
        }
      }

    } else {
      alert("Resposta inválida. Digite 'estudar' ou 'ir à lanchonete'.");
    }
  }
}

/////////////////////////////
// VIDA ADULTA
/////////////////////////////

idade = 25;
alert(`${nome_char} agora entrou na fase adulta, com ${idade} anos.`);
let numeroRandom3 = numeroAleatorioEntre(1, 3);

if (numeroRandom3 === 1) {
  let respostaValida = false;

  while (!respostaValida) {
    let resposta = prompt("Você recebeu uma promoção no trabalho, mas exigirá mais horas e menos tempo livre. Aceita? 'sim' ou 'não'").toLowerCase().trim();

    if (resposta === "sim") {
      inteligencia += 10;
      felicidade -= 5;
      autocontrole += 5;
      alert(`Sua inteligência subiu para ${inteligencia}, mas sua felicidade caiu para ${felicidade}. Seu autocontrole agora é ${autocontrole}.`);
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
      alert(`Você manteve o foco nos estudos/trabalho. Seu autocontrole agora é ${autocontrole}.`);
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
      alert(`Você está mais bonito(a) e saudável! Sua beleza agora é ${beleza}, autocontrole ${autocontrole} e felicidade ${felicidade}.`);
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
      alert(`Mudança difícil mas rentável! Seu dinheiro agora é R$${dinheiro}, mas seu autocontrole caiu para ${autocontrole}.`);
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
      alert(`Você decidiu economizar. Seu autocontrole agora é ${autocontrole}.`);
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
      alert(`Você desistiu facilmente. Seu autocontrole agora é ${autocontrole}.`);
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