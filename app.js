/////////////////////////////
// INFORMAÇÕES BASE / VIDA
/////////////////////////////

let felicidade = 60;
let idade;
let autocontrole = 70;
let temParceira = false;

// CORREÇÃO: Mudou de const para let para permitir modificações
let beleza = Math.floor(Math.random() * 10) + 1;
let inteligencia = Math.floor(Math.random() * 70) + 1;
const testeBerçoDeOuro = Math.floor(Math.random() * 1000) + 1;
const engraçadinho = Math.floor(Math.random() * 100) + 1;
let berçoDeOuro = testeBerçoDeOuro === 999;

// NOVA VARIÁVEL: Conhecimento financeiro
let conhecimentoFinanceiro = 10;

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

// NOVOS ITENS PARA EDUCAÇÃO FINANCEIRA
let livroFinancas = 25;
let cursoOnline = 100;
let consultoriaFinanceira = 300;

/////////////////////////////
// FUNÇÕES AUXILIARES
/////////////////////////////

// NOVA FUNÇÃO: Validação de prompts para evitar erros com null
function obterResposta(mensagem, opcoes = []) {
  let resposta = null;
  let tentativas = 0;
  const maxTentativas = 5;
  
  while (tentativas < maxTentativas) {
    try {
      resposta = prompt(mensagem);
      
      // Se o usuário cancelou o prompt
      if (resposta === null) {
        const confirmar = confirm("Você cancelou a entrada. Deseja sair do jogo?");
        if (confirmar) {
          alert("Jogo encerrado pelo usuário.");
          return null;
        } else {
          tentativas++;
          continue;
        }
      }
      
      // Normalizar resposta
      resposta = resposta.toLowerCase().trim();
      
      // Se não há opções específicas, aceitar qualquer resposta não vazia
      if (opcoes.length === 0) {
        if (resposta !== "") {
          return resposta;
        }
      } else {
        // Verificar se a resposta está nas opções válidas
        if (opcoes.includes(resposta)) {
          return resposta;
        }
      }
      
      alert(`Resposta inválida. Opções válidas: ${opcoes.join(', ')}`);
      tentativas++;
      
    } catch (error) {
      console.error("Erro ao obter resposta:", error);
      tentativas++;
    }
  }
  
  alert("Muitas tentativas inválidas. Usando resposta padrão.");
  return opcoes.length > 0 ? opcoes[0] : "padrão";
}

// NOVA FUNÇÃO: Validação de números
function obterNumero(mensagem, min = 0, max = Infinity) {
  let numero = null;
  let tentativas = 0;
  const maxTentativas = 5;
  
  while (tentativas < maxTentativas) {
    try {
      const resposta = prompt(mensagem);
      
      if (resposta === null) {
        const confirmar = confirm("Você cancelou a entrada. Deseja sair do jogo?");
        if (confirmar) {
          alert("Jogo encerrado pelo usuário.");
          return null;
        } else {
          tentativas++;
          continue;
        }
      }
      
      numero = Number(resposta.trim());
      
      if (!isNaN(numero) && numero >= min && numero <= max) {
        return numero;
      }
      
      alert(`Valor inválido. Digite um número entre ${min} e ${max}.`);
      tentativas++;
      
    } catch (error) {
      console.error("Erro ao obter número:", error);
      tentativas++;
    }
  }
  
  alert("Muitas tentativas inválidas. Usando valor padrão.");
  return min;
}

// NOVA FUNÇÃO: Aplicar limites às variáveis
function aplicarLimites() {
  // Limites mínimos para evitar valores muito negativos
  if (felicidade < -50) felicidade = -50;
  if (autocontrole < 0) autocontrole = 0;
  if (dinheiro < -1000) dinheiro = -1000;
  if (inteligencia < 1) inteligencia = 1;
  if (beleza < 1) beleza = 1;
  if (conhecimentoFinanceiro < 0) conhecimentoFinanceiro = 0;
  
  // Limites máximos
  if (inteligencia > 150) inteligencia = 150;
  if (beleza > 20) beleza = 20;
  if (autocontrole > 100) autocontrole = 100;
  if (felicidade > 100) felicidade = 100;
  if (conhecimentoFinanceiro > 100) conhecimentoFinanceiro = 100;
}

// NOVA FUNÇÃO: Log de debug
function logDebug(fase, variaveis) {
  console.log(`=== ${fase} ===`);
  console.log(`Felicidade: ${variaveis.felicidade}`);
  console.log(`Inteligência: ${variaveis.inteligencia}`);
  console.log(`Beleza: ${variaveis.beleza}`);
  console.log(`Autocontrole: ${variaveis.autocontrole}`);
  console.log(`Dinheiro: ${variaveis.dinheiro}`);
  console.log(`Conhecimento Financeiro: ${variaveis.conhecimentoFinanceiro}`);
  console.log(`Idade: ${variaveis.idade}`);
  console.log("================");
}

/////////////////////////////
// INÍCIO DO JOGO
/////////////////////////////

try {
  const nome_char = obterResposta("Qual nome você deseja que seu personagem tenha?");
  
  if (nome_char === null) {
    throw new Error("Jogo cancelado pelo usuário");
  }
  
  idade = 8;
  
  alert(`Atualmente, ${nome_char} está na infância, com ${idade} anos.
Suas características são:
- Beleza: ${beleza}/10
- Altura: ${alturaCrianca} cm
- Inteligência: ${inteligencia}/150
- Engraçado: ${engraçadinho}/100
- Conhecimento Financeiro: ${conhecimentoFinanceiro}/100
${nome_char} tem R$${dinheiro} guardados em um cofrinho.`);
  
  logDebug("Início do Jogo", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // EVENTO INFÂNCIA 1
  /////////////////////////////
  
  const escolhaInfancia = obterResposta(
    "Que pena! Seu priminho estava brincando com você quando quebrou seu brinquedo favorito. Você quer 'bater' nele ou 'desculpar'?",
    ["bater", "desculpar"]
  );
  
  if (escolhaInfancia === null) throw new Error("Jogo cancelado");
  
  if (escolhaInfancia === "bater") {
    felicidade -= graveMais;
    autocontrole -= baixoMais;
    dinheiro -= 20;
    alert(`Sua felicidade diminuiu pelo peso na consciência. Agora você tem ${felicidade} pontos de felicidade. Seu autocontrole também diminuiu, agora está em ${autocontrole}%. Por causa da sua atitude, sua mãe pegou R$20 do seu cofrinho. Agora você tem R$${dinheiro}.`);
  } else {
    autocontrole += baixoMais;
    dinheiro += salario;
    alert(`Sua felicidade abaixou um pouco, agora está com ${felicidade} pontos. Mas seu autocontrole aumentou para ${autocontrole}%. Pelo seu ato, sua mãe decidiu te dar R$${salario} de presente. Agora você tem R$${dinheiro}.`);
  }
  
  aplicarLimites();
  logDebug("Após Evento Infância 1", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // EVENTOS INFÂNCIA (ALEATÓRIOS) - AGORA COM 6 OPÇÕES
  /////////////////////////////
  
  const numeroRandom = numeroAleatorioEntre(1, 6);
  
  if (numeroRandom === 1) {
    // EVENTO INFÂNCIA 2 – APOSTAR OU INVESTIR
    const escolhaInfancia2 = obterResposta(
      "No 6º ano, você estava conversando com dois colegas. Um disse que ganhou muito dinheiro apostando no MAC, o outro falou que investiu no tesouro SELIC. Você precisa de dinheiro para comprar um videogame. Você irá 'apostar' ou 'investir'?",
      ["apostar", "investir"]
    );
    
    if (escolhaInfancia2 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia2 === "apostar") {
      const numeroAposta = numeroAleatorioEntre(1, 1000);
      if (numeroAposta === 666) {
        alert("Você teve muita sorte e ganhou muito dinheiro, mas decidiu tentar a sorte novamente e perdeu tudo. Lição aprendida sobre os riscos das apostas!");
        dinheiro = 10;
        conhecimentoFinanceiro += baixoMais;
      } else {
        autocontrole -= 20;
        dinheiro -= 30;
        alert(`Você perdeu a aposta e R$30. Seu autocontrole caiu para ${autocontrole}%. Dinheiro: R$${dinheiro}`);
      }
    } else {
      const investiuQuanto = obterNumero(`Quanto você deseja investir? Lembrando que você tem R$${dinheiro}.`, 1, dinheiro);
      
      if (investiuQuanto === null) throw new Error("Jogo cancelado");
      
      dinheiro -= investiuQuanto;
      const retorno = investiuQuanto * 1.5; // Retorno mais realista
      dinheiro += retorno;
      conhecimentoFinanceiro += medioMais;
      alert(`Boa escolha! Você aprendeu sobre investimentos. No 3º ano do ensino médio você terá R$${dinheiro}! Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    }
    
  } else if (numeroRandom === 2) {
    // EVENTO INFÂNCIA 3 – COMPRAR BRINQUEDOS OU POUPAR
    const escolhaInfancia3 = obterResposta(
      `Novos brinquedos estão na moda:
- 'barbie' R$${barbie}
- 'hotwheels' R$${hotwheels}
- 'fidgetSpinners' R$${fidgetSpinners}
Ou você pode criar uma 'poupança' para algo mais necessário ou caro no futuro. O que irá fazer? Você tem R$${dinheiro}.`,
      ["barbie", "hotwheels", "fidgetspinners", "poupança"]
    );
    
    if (escolhaInfancia3 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia3 === "barbie" && dinheiro >= barbie) {
      dinheiro -= barbie;
      felicidade += medioMais;
      alert(`Você comprou sua Barbie com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
    } else if (escolhaInfancia3 === "hotwheels" && dinheiro >= hotwheels) {
      dinheiro -= hotwheels;
      felicidade += leveMais;
      alert(`Você comprou seu Hot Wheels com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
    } else if (escolhaInfancia3 === "fidgetspinners" && dinheiro >= fidgetSpinners) {
      dinheiro -= fidgetSpinners;
      felicidade += baixoMais;
      alert(`Você comprou seu Fidget Spinner com sucesso! Agora ${nome_char} está com ${felicidade} pontos de felicidade.`);
    } else if (escolhaInfancia3 === "poupança") {
      const pouparQuanto = obterNumero(`Quanto você deseja poupar? Você tem R$${dinheiro}.`, 1, dinheiro);
      
      if (pouparQuanto === null) throw new Error("Jogo cancelado");
      
      dinheiro -= pouparQuanto;
      const retorno = pouparQuanto * 2;
      dinheiro += retorno;
      conhecimentoFinanceiro += graveMais;
      alert(`Excelente! Você aprendeu sobre poupança. No 3º ano do ensino médio você terá R$${dinheiro}! Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    } else {
      alert("Você não tem dinheiro suficiente para essa opção ou escolheu uma opção inválida.");
    }
    
  } else if (numeroRandom === 3) {
    // NOVO EVENTO 4 – MESADA E ORÇAMENTO
    const escolhaInfancia4 = obterResposta(
      `Seus pais decidiram te dar uma mesada de R$15 por semana, mas com uma condição: você deve aprender a fazer um orçamento. Você aceita 'aprender' sobre orçamento ou prefere 'recusar' e continuar pedindo dinheiro quando precisar?`,
      ["aprender", "recusar"]
    );
    
    if (escolhaInfancia4 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia4 === "aprender") {
      dinheiro += 60; // 4 semanas de mesada
      conhecimentoFinanceiro += graveMais;
      autocontrole += baixoMais;
      alert(`Parabéns! Você aprendeu a fazer orçamento e ganhou R$60 de mesada. Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}`);
    } else {
      felicidade += leveMais;
      alert(`Você preferiu a liberdade, mas perdeu a chance de aprender sobre dinheiro. Felicidade: ${felicidade}`);
    }
    
  } else if (numeroRandom === 4) {
    // NOVO EVENTO 5 – VENDA DE LIMONADA
    const escolhaInfancia5 = obterResposta(
      `Você teve a ideia de montar uma barraquinha de limonada para ganhar dinheiro. Precisa de R$20 para comprar os materiais. Você vai 'pedir' dinheiro emprestado aos pais ou 'trabalhar' fazendo tarefas domésticas para conseguir o dinheiro?`,
      ["pedir", "trabalhar"]
    );
    
    if (escolhaInfancia5 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia5 === "pedir") {
      if (dinheiro >= 20) {
        dinheiro -= 20;
        const lucro = numeroAleatorioEntre(30, 50);
        dinheiro += lucro;
        alert(`Você montou a barraquinha e ganhou R$${lucro}! Mas aprendeu que pedir emprestado tem responsabilidades. Dinheiro: R$${dinheiro}`);
      } else {
        alert("Seus pais disseram que você não tem dinheiro suficiente para emprestar. Que tal trabalhar para conseguir?");
      }
    } else {
      autocontrole += medioMais;
      conhecimentoFinanceiro += baixoMais;
      const lucro = numeroAleatorioEntre(40, 60);
      dinheiro += lucro;
      alert(`Você trabalhou duro, aprendeu sobre esforço e ganhou R$${lucro} com a limonada! Autocontrole: ${autocontrole}, Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    }
    
  } else if (numeroRandom === 5) {
    // NOVO EVENTO 6 – COMPARAÇÃO DE PREÇOS
    const escolhaInfancia6 = obterResposta(
      `Você quer comprar um jogo que custa R$40. Sua mãe te ensinou a pesquisar preços. Você encontrou o mesmo jogo por R$30 em outra loja, mas fica mais longe. Você vai 'economizar' indo na loja mais longe ou 'comprar' na loja mais perto por R$40?`,
      ["economizar", "comprar"]
    );
    
    if (escolhaInfancia6 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia6 === "economizar") {
      if (dinheiro >= 30) {
        dinheiro -= 30;
        conhecimentoFinanceiro += medioMais;
        felicidade += baixoMais;
        alert(`Parabéns! Você economizou R$10 e aprendeu sobre pesquisa de preços. Conhecimento financeiro: ${conhecimentoFinanceiro}, Dinheiro: R$${dinheiro}`);
      } else {
        alert("Você não tem dinheiro suficiente nem para a opção mais barata!");
      }
    } else {
      if (dinheiro >= 40) {
        dinheiro -= 40;
        felicidade += leveMais;
        alert(`Você comprou o jogo mais rápido, mas perdeu a chance de economizar R$10. Dinheiro: R$${dinheiro}`);
      } else {
        alert("Você não tem dinheiro suficiente para comprar o jogo!");
      }
    }
    
  } else {
    // NOVO EVENTO 7 – COFRINHO VS GASTOS
    const escolhaInfancia7 = obterResposta(
      `Você juntou R$50 no seu cofrinho! Seus amigos querem que você gaste tudo em doces e brinquedos hoje. Você vai 'gastar' tudo com eles ou 'guardar' para algo maior no futuro?`,
      ["gastar", "guardar"]
    );
    
    if (escolhaInfancia7 === null) throw new Error("Jogo cancelado");
    
    if (escolhaInfancia7 === "gastar") {
      dinheiro -= 50;
      felicidade += graveMais;
      alert(`Você se divertiu muito com os amigos, mas seu cofrinho ficou vazio. Às vezes é bom aproveitar o momento! Felicidade: ${felicidade}, Dinheiro: R$${dinheiro}`);
    } else {
      conhecimentoFinanceiro += graveMais;
      autocontrole += medioMais;
      // Bônus por guardar
      dinheiro += 10;
      alert(`Seus pais ficaram orgulhosos da sua disciplina e te deram R$10 de bônus! Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}, Dinheiro: R$${dinheiro}`);
    }
  }
  
  aplicarLimites();
  logDebug("Após Eventos Infância", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // ADOLESCÊNCIA (TERCEIRÃO) - AGORA COM 6 OPÇÕES
  /////////////////////////////
  
  idade = 17;
  alert(`Agora ${nome_char} está no terceirão, com ${idade} anos.`);
  
  let numeroRandom2 = numeroAleatorioEntre(1, 6);
  
  if (numeroRandom2 === 1) {
    const escolhaTerceirao = obterResposta(
      `O último sextou de novembro chegou! Nesta Black Friday o videogame que você quer há tanto tempo está na promoção, apenas R$${videogame}. Você irá 'comprar' ou 'guardar' o dinheiro?`,
      ["comprar", "guardar"]
    );
    
    if (escolhaTerceirao === null) throw new Error("Jogo cancelado");
    
    if (escolhaTerceirao === "comprar") {
      if (dinheiro >= videogame) {
        dinheiro -= videogame;
        felicidade += graveMais;
        alert(`Você comprou o videogame dos sonhos! Sua felicidade agora é ${felicidade}.`);
      } else {
        alert("Você não tem dinheiro suficiente para comprar esse videogame.");
      }
    } else {
      autocontrole += medioMais;
      conhecimentoFinanceiro += baixoMais;
      alert(`Você preferiu guardar seu dinheiro, parabéns pelo autocontrole! Agora seu autocontrole é ${autocontrole}% e conhecimento financeiro ${conhecimentoFinanceiro}.`);
    }
    
  } else if (numeroRandom2 === 2) {
    const escolha = obterResposta(
      "Você descobriu que pode fazer ENEM com treineiro esse ano. Deseja tentar para treinar ou prefere focar nos estudos do colégio? Responda 'tentar' ou 'focar'.",
      ["tentar", "focar"]
    );
    
    if (escolha === null) throw new Error("Jogo cancelado");
    
    if (escolha === "tentar") {
      inteligencia += medioMais;
      alert(`Você teve uma experiência valiosa. Sua inteligência agora é ${inteligencia}.`);
    } else {
      autocontrole += baixoMais;
      alert(`Você ganhou mais disciplina para as provas escolares. Seu autocontrole agora é ${autocontrole}%.`);
    }
    
  } else if (numeroRandom2 === 3) {
    const escolha = obterResposta(
      "Você foi convidado(a) para uma festa de formatura incrível, mas precisa escolher entre gastar dinheiro na festa ou guardar para o futuro. Escolha 'festa' ou 'guardar'.",
      ["festa", "guardar"]
    );
    
    if (escolha === null) throw new Error("Jogo cancelado");
    
    if (escolha === "festa") {
      dinheiro -= 300;
      felicidade += graveMais;
      alert(`Você aproveitou muito a festa! Sua felicidade agora é ${felicidade}, mas seu dinheiro caiu para R$${dinheiro}.`);
    } else {
      autocontrole += medioMais;
      conhecimentoFinanceiro += baixoMais;
      alert(`Você guardou o dinheiro. Seu autocontrole agora é ${autocontrole}% e conhecimento financeiro ${conhecimentoFinanceiro}.`);
    }
    
  } else if (numeroRandom2 === 4) {
    // NOVO EVENTO ADOLESCÊNCIA 1 – PRIMEIRO EMPREGO
    const escolhaAdolescencia1 = obterResposta(
      `Você conseguiu seu primeiro emprego de meio período ganhando R$400 por mês. Seus pais sugerem que você guarde 50% e gaste 50%. Você vai 'seguir' o conselho ou 'gastar' tudo porque é seu primeiro salário?`,
      ["seguir", "gastar"]
    );
    
    if (escolhaAdolescencia1 === null) throw new Error("Jogo cancelado");
    
    if (escolhaAdolescencia1 === "seguir") {
      dinheiro += 200; // Guardou 50%
      conhecimentoFinanceiro += graveMais;
      autocontrole += medioMais;
      alert(`Excelente decisão! Você guardou R$200 e aprendeu sobre disciplina financeira. Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}`);
    } else {
      felicidade += medioMais;
      alert(`Você aproveitou seu primeiro salário, mas perdeu a chance de criar o hábito de poupar. Felicidade: ${felicidade}`);
    }
    
  } else if (numeroRandom2 === 5) {
    // NOVO EVENTO ADOLESCÊNCIA 2 – CARTÃO DE CRÉDITO
    const escolhaAdolescencia2 = obterResposta(
      `O banco ofereceu seu primeiro cartão de crédito com limite de R$500. Seus pais alertaram sobre os perigos. Você vai 'aceitar' o cartão ou 'recusar' por enquanto?`,
      ["aceitar", "recusar"]
    );
    
    if (escolhaAdolescencia2 === null) throw new Error("Jogo cancelado");
    
    if (escolhaAdolescencia2 === "aceitar") {
      const usoCartao = obterResposta(
        "Você tem o cartão! Como vai usar? 'Conscientemente' (só emergências) ou 'livremente' (comprar o que quiser)?",
        ["conscientemente", "livremente"]
      );
      
      if (usoCartao === "conscientemente") {
        conhecimentoFinanceiro += graveMais;
        autocontrole += medioMais;
        alert(`Ótima escolha! Você aprendeu a usar crédito com responsabilidade. Conhecimento financeiro: ${conhecimentoFinanceiro}`);
      } else {
        dinheiro -= 300; // Dívida no cartão
        autocontrole -= medioMais;
        alert(`Você se endividou! Aprendeu na prática sobre os perigos do cartão de crédito. Dinheiro: R$${dinheiro}, Autocontrole: ${autocontrole}`);
      }
    } else {
      conhecimentoFinanceiro += baixoMais;
      autocontrole += baixoMais;
      alert(`Decisão sábia! Você preferiu esperar até entender melhor sobre crédito. Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    }
    
  } else {
    // NOVO EVENTO ADOLESCÊNCIA 3 – CURSO DE EDUCAÇÃO FINANCEIRA
    const escolhaAdolescencia3 = obterResposta(
      `Sua escola oferece um curso gratuito de educação financeira, mas é no sábado de manhã. Você prefere 'participar' do curso ou 'dormir' até mais tarde no fim de semana?`,
      ["participar", "dormir"]
    );
    
    if (escolhaAdolescencia3 === null) throw new Error("Jogo cancelado");
    
    if (escolhaAdolescencia3 === "participar") {
      conhecimentoFinanceiro += graveMais + baixoMais; // 15 pontos
      inteligencia += baixoMais;
      alert(`Parabéns! Você aprendeu muito sobre dinheiro, investimentos e planejamento. Conhecimento financeiro: ${conhecimentoFinanceiro}, Inteligência: ${inteligencia}`);
    } else {
      felicidade += leveMais;
      alert(`Você descansou bem, mas perdeu uma oportunidade valiosa de aprender sobre finanças. Felicidade: ${felicidade}`);
    }
  }
  
  aplicarLimites();
  logDebug("Após Adolescência", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // VIDA ADULTA (25 anos) - AGORA COM 6 OPÇÕES
  /////////////////////////////
  
  idade = 25;
  alert(`${nome_char} agora está na vida adulta, com ${idade} anos.`);
  
  let numeroRandom3 = numeroAleatorioEntre(1, 6);
  
  if (numeroRandom3 === 1) {
    const resposta = obterResposta(
      "Você recebeu uma promoção no trabalho, mas exigirá mais horas e menos tempo livre. Aceita? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      inteligencia += 10;
      felicidade -= 5;
      autocontrole += 5;
      dinheiro += 500; // Aumento salarial
      alert(`Sua inteligência subiu para ${inteligencia}, mas sua felicidade caiu para ${felicidade}. Seu autocontrole agora é ${autocontrole}% e você ganhou R$500 de aumento.`);
    } else {
      felicidade += 5;
      alert(`Você ganhou mais tempo livre! Sua felicidade agora é ${felicidade}.`);
    }
    
  } else if (numeroRandom3 === 2) {
    const resposta = obterResposta(
      "Você foi convidado(a) para ser modelo de uma marca local. Aceita? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      beleza += 2;
      dinheiro += 200;
      felicidade += 5;
      alert(`Você arrasou! Sua beleza agora é ${beleza}, ganhou R$200 e sua felicidade subiu para ${felicidade}.`);
    } else {
      autocontrole += 3;
      alert(`Você manteve o foco nos estudos/trabalho. Seu autocontrole agora é ${autocontrole}%.`);
    }
    
  } else if (numeroRandom3 === 3) {
    const resposta = obterResposta(
      "Você está se sentindo ansioso(a) ultimamente. Quer iniciar terapia? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      autocontrole += 10;
      dinheiro -= 150;
      alert(`Sua mente agradece! Seu autocontrole agora é ${autocontrole}, mas seu dinheiro caiu para R$${dinheiro}.`);
    } else {
      autocontrole -= 10;
      felicidade -= 5;
      alert(`Sua ansiedade aumentou. Seu autocontrole agora é ${autocontrole} e sua felicidade caiu para ${felicidade}.`);
    }
    
  } else if (numeroRandom3 === 4) {
    // NOVO EVENTO VIDA ADULTA 1 – FINANCIAMENTO DA CASA
    const escolhaVidaAdulta1 = obterResposta(
      `Você quer comprar sua primeira casa! O banco oferece financiamento, mas você pode 'esperar' e juntar mais dinheiro para dar uma entrada maior, ou 'financiar' agora com entrada menor mas juros maiores?`,
      ["esperar", "financiar"]
    );
    
    if (escolhaVidaAdulta1 === null) throw new Error("Jogo cancelado");
    
    if (escolhaVidaAdulta1 === "esperar") {
      autocontrole += graveMais;
      conhecimentoFinanceiro += medioMais;
      dinheiro += 300; // Economizou nos juros
      alert(`Decisão inteligente! Você economizou R$300 em juros e aprendeu sobre planejamento. Autocontrole: ${autocontrole}, Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    } else {
      felicidade += medioMais;
      dinheiro -= 200; // Pagou mais juros
      alert(`Você realizou o sonho da casa própria! Mas pagou R$200 a mais em juros. Felicidade: ${felicidade}, Dinheiro: R$${dinheiro}`);
    }
    
  } else if (numeroRandom3 === 5) {
    // NOVO EVENTO VIDA ADULTA 2 – INVESTIMENTOS EM AÇÕES
    const escolhaVidaAdulta2 = obterResposta(
      `Um amigo te convenceu a investir em ações de uma empresa "promissora". Você vai 'investir' R$500 ou 'estudar' primeiro sobre o mercado de ações?`,
      ["investir", "estudar"]
    );
    
    if (escolhaVidaAdulta2 === null) throw new Error("Jogo cancelado");
    
    if (escolhaVidaAdulta2 === "investir") {
      const sorte = numeroAleatorioEntre(1, 10);
      if (sorte <= 3) { // 30% chance de ganhar
        dinheiro += 300;
        alert(`Você teve sorte! Ganhou R$300, mas aprendeu que investir sem conhecimento é arriscado. Dinheiro: R$${dinheiro}`);
      } else {
        dinheiro -= 500;
        alert(`Você perdeu R$500! Lição aprendida: nunca invista sem estudar primeiro. Dinheiro: R$${dinheiro}`);
      }
    } else {
      conhecimentoFinanceiro += graveMais + baixoMais; // 15 pontos
      inteligencia += baixoMais;
      alert(`Excelente! Você estudou sobre ações, diversificação e análise de risco. Conhecimento financeiro: ${conhecimentoFinanceiro}, Inteligência: ${inteligencia}`);
    }
    
  } else {
    // NOVO EVENTO VIDA ADULTA 3 – RESERVA DE EMERGÊNCIA
    const escolhaVidaAdulta3 = obterResposta(
      `Você leu sobre a importância de ter uma reserva de emergência de 6 meses de gastos. Você vai 'criar' essa reserva ou 'gastar' o dinheiro em coisas que quer agora?`,
      ["criar", "gastar"]
    );
    
    if (escolhaVidaAdulta3 === null) throw new Error("Jogo cancelado");
    
    if (escolhaVidaAdulta3 === "criar") {
      const valorReserva = obterNumero(`Quanto você quer guardar para emergência? Você tem R$${dinheiro}.`, 100, dinheiro);
      
      if (valorReserva === null) throw new Error("Jogo cancelado");
      
      dinheiro -= valorReserva;
      conhecimentoFinanceiro += graveMais;
      autocontrole += graveMais;
      // Simula que a reserva rendeu um pouco
      dinheiro += Math.floor(valorReserva * 0.1);
      alert(`Parabéns! Você criou sua reserva de emergência e ela rendeu um pouco. Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}, Dinheiro: R$${dinheiro}`);
    } else {
      felicidade += medioMais;
      alert(`Você aproveitou o momento presente, mas ficou sem proteção financeira. Felicidade: ${felicidade}`);
    }
  }
  
  aplicarLimites();
  logDebug("Após Vida Adulta", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // MEIA IDADE (40 anos) - AGORA COM 6 OPÇÕES
  /////////////////////////////
  
  idade = 40;
  alert(`${nome_char} agora está na meia idade, com ${idade} anos.`);
  
  let numeroRandom4 = numeroAleatorioEntre(1, 6);
  
  if (numeroRandom4 === 1) {
    const resposta = obterResposta(
      "Você decidiu começar academia para melhorar sua saúde e autoestima. Vai seguir com isso? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      beleza += 2;
      autocontrole += 5;
      felicidade += 5;
      alert(`Você está mais bonito(a) e saudável! Sua beleza agora é ${beleza}, autocontrole ${autocontrole}% e felicidade ${felicidade}.`);
    } else {
      beleza -= 1;
      felicidade -= 3;
      alert(`Você se sentiu mal por não ter iniciado. Sua beleza agora é ${beleza} e felicidade ${felicidade}.`);
    }
    
  } else if (numeroRandom4 === 2) {
    const resposta = obterResposta(
      "Você recebeu proposta para trabalhar em outra cidade com salário maior, mas longe da família e amigos. Aceita? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      dinheiro += 1000;
      autocontrole -= 5;
      alert(`Mudança difícil mas rentável! Seu dinheiro agora é R$${dinheiro}, mas seu autocontrole caiu para ${autocontrole}%.`);
    } else {
      felicidade += 5;
      alert(`Você preferiu estabilidade perto de quem ama. Sua felicidade agora é ${felicidade}.`);
    }
    
  } else if (numeroRandom4 === 3) {
    // NOVO EVENTO MEIA IDADE 1 – PREVIDÊNCIA PRIVADA
    const escolhaMediaIdade1 = obterResposta(
      `Você está pensando na aposentadoria. Um consultor oferece um plano de previdência privada. Você vai 'contratar' o plano ou 'pesquisar' outras opções primeiro?`,
      ["contratar", "pesquisar"]
    );
    
    if (escolhaMediaIdade1 === null) throw new Error("Jogo cancelado");
    
    if (escolhaMediaIdade1 === "contratar") {
      dinheiro -= 200; // Taxa do consultor
      alert(`Você contratou o plano, mas pagou R$200 de taxa. Sempre pesquise antes de contratar! Dinheiro: R$${dinheiro}`);
    } else {
      conhecimentoFinanceiro += graveMais;
      dinheiro += 100; // Encontrou opção melhor
      alert(`Você pesquisou e encontrou uma opção melhor, economizando R$100! Conhecimento financeiro: ${conhecimentoFinanceiro}, Dinheiro: R$${dinheiro}`);
    }
    
  } else if (numeroRandom4 === 4) {
    // NOVO EVENTO MEIA IDADE 2 – EDUCAÇÃO FINANCEIRA DOS FILHOS
    const escolhaMediaIdade2 = obterResposta(
      `Seus filhos estão pedindo um aumento na mesada. Você vai 'aumentar' sem condições ou 'ensinar' sobre dinheiro em troca do aumento?`,
      ["aumentar", "ensinar"]
    );
    
    if (escolhaMediaIdade2 === null) throw new Error("Jogo cancelado");
    
    if (escolhaMediaIdade2 === "aumentar") {
      dinheiro -= 100;
      felicidade += baixoMais;
      alert(`Seus filhos ficaram felizes, mas perderam a chance de aprender sobre dinheiro. Dinheiro: R$${dinheiro}, Felicidade: ${felicidade}`);
    } else {
      conhecimentoFinanceiro += medioMais;
      autocontrole += baixoMais;
      alert(`Você ensinou seus filhos sobre orçamento e responsabilidade financeira. Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}`);
    }
    
  } else if (numeroRandom4 === 5) {
    // NOVO EVENTO MEIA IDADE 3 – INVESTIMENTO EM NEGÓCIO PRÓPRIO
    const escolhaMediaIdade3 = obterResposta(
      `Você tem a oportunidade de abrir seu próprio negócio, mas precisa investir R$800. Você vai 'investir' suas economias ou 'manter' a segurança do emprego?`,
      ["investir", "manter"]
    );
    
    if (escolhaMediaIdade3 === null) throw new Error("Jogo cancelado");
    
    if (escolhaMediaIdade3 === "investir") {
      if (dinheiro >= 800) {
        dinheiro -= 800;
        const sucesso = numeroAleatorioEntre(1, 10);
        if (sucesso <= 6) { // 60% chance de sucesso
          dinheiro += 1200;
          felicidade += graveMais;
          alert(`Seu negócio deu certo! Você ganhou R$1200. Felicidade: ${felicidade}, Dinheiro: R$${dinheiro}`);
        } else {
          alert(`O negócio não deu certo, mas você aprendeu muito sobre empreendedorismo. Dinheiro: R$${dinheiro}`);
        }
      } else {
        alert("Você não tem dinheiro suficiente para investir no negócio.");
      }
    } else {
      autocontrole += medioMais;
      alert(`Você preferiu a segurança. Às vezes é a melhor escolha. Autocontrole: ${autocontrole}`);
    }
    
  } else {
    // NOVO EVENTO MEIA IDADE 4 – PLANEJAMENTO SUCESSÓRIO
    const escolhaMediaIdade4 = obterResposta(
      `Você está pensando em fazer um testamento e planejar a herança. Vai 'contratar' um advogado especializado ou 'deixar' para depois?`,
      ["contratar", "deixar"]
    );
    
    if (escolhaMediaIdade4 === null) throw new Error("Jogo cancelado");
    
    if (escolhaMediaIdade4 === "contratar") {
      dinheiro -= 300;
      conhecimentoFinanceiro += medioMais;
      autocontrole += medioMais;
      alert(`Você organizou sua vida financeira e protegeu sua família. Conhecimento financeiro: ${conhecimentoFinanceiro}, Autocontrole: ${autocontrole}, Dinheiro: R$${dinheiro}`);
    } else {
      alert(`Você adiou uma decisão importante. Planejamento sucessório é fundamental!`);
    }
  }
  
  aplicarLimites();
  logDebug("Após Meia Idade", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // TERCEIRA IDADE (65 anos) - AGORA COM 6 OPÇÕES
  /////////////////////////////
  
  idade = 65;
  alert(`${nome_char} agora está na terceira idade, com ${idade} anos.`);
  
  let numeroRandom5 = numeroAleatorioEntre(1, 6);
  
  if (numeroRandom5 === 1) {
    const resposta = obterResposta(
      "Te convidaram para viajar pelo mundo com amigos. Vai? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      felicidade += 20;
      dinheiro -= 1000;
      alert(`Viagem inesquecível! Sua felicidade subiu para ${felicidade}, mas seu dinheiro caiu para R$${dinheiro}.`);
    } else {
      autocontrole += 5;
      alert(`Você decidiu economizar. Seu autocontrole agora é ${autocontrole}%.`);
    }
    
  } else if (numeroRandom5 === 2) {
    const resposta = obterResposta(
      "Você começou a ter problemas de memória. Vai ao médico? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      inteligencia += 5;
      dinheiro -= 500;
      alert(`O tratamento ajudou! Sua inteligência agora é ${inteligencia} e seu dinheiro é R$${dinheiro}.`);
    } else {
      inteligencia -= 10;
      felicidade -= 5;
      alert(`Sua memória piorou. Sua inteligência agora é ${inteligencia} e felicidade ${felicidade}.`);
    }
    
  } else if (numeroRandom5 === 3) {
    const resposta = obterResposta(
      "Você quer escrever um livro de memórias contando tudo que viveu? 'sim' ou 'não'",
      ["sim", "não"]
    );
    
    if (resposta === null) throw new Error("Jogo cancelado");
    
    if (resposta === "sim") {
      inteligencia += 10;
      felicidade += 10;
      alert(`Que incrível! Sua inteligência agora é ${inteligencia} e felicidade ${felicidade}.`);
    } else {
      autocontrole -= 5;
      alert(`Você desistiu facilmente. Seu autocontrole agora é ${autocontrole}%.`);
    }
    
  } else if (numeroRandom5 === 4) {
    // NOVO EVENTO TERCEIRA IDADE 1 – APOSENTADORIA
    const escolhaTerceiraIdade1 = obterResposta(
      `Você se aposentou! Agora precisa decidir como usar seu tempo livre. Vai 'trabalhar' meio período para renda extra ou 'descansar' e aproveitar a aposentadoria?`,
      ["trabalhar", "descansar"]
    );
    
    if (escolhaTerceiraIdade1 === null) throw new Error("Jogo cancelado");
    
    if (escolhaTerceiraIdade1 === "trabalhar") {
      dinheiro += 400;
      autocontrole += baixoMais;
      alert(`Você ganhou R$400 extras e se manteve ativo. Autocontrole: ${autocontrole}, Dinheiro: R$${dinheiro}`);
    } else {
      felicidade += graveMais;
      alert(`Você aproveitou sua merecida aposentadoria! Felicidade: ${felicidade}`);
    }
    
  } else if (numeroRandom5 === 5) {
    // NOVO EVENTO TERCEIRA IDADE 2 – HERANÇA PARA OS FILHOS
    const escolhaTerceiraIdade2 = obterResposta(
      `Você quer deixar uma herança para seus filhos. Vai 'doar' parte do dinheiro agora ou 'guardar' tudo para depois que partir?`,
      ["doar", "guardar"]
    );
    
    if (escolhaTerceiraIdade2 === null) throw new Error("Jogo cancelado");
    
    if (escolhaTerceiraIdade2 === "doar") {
      const valorDoacao = obterNumero(`Quanto você quer doar agora? Você tem R$${dinheiro}.`, 100, Math.floor(dinheiro * 0.5));
      
      if (valorDoacao === null) throw new Error("Jogo cancelado");
      
      dinheiro -= valorDoacao;
      felicidade += graveMais;
      alert(`Você viu a alegria dos seus filhos recebendo a herança em vida! Felicidade: ${felicidade}, Dinheiro: R$${dinheiro}`);
    } else {
      conhecimentoFinanceiro += baixoMais;
      alert(`Você preferiu manter o planejamento original. Conhecimento financeiro: ${conhecimentoFinanceiro}`);
    }
    
  } else {
    // NOVO EVENTO TERCEIRA IDADE 3 – CONSULTORIA FINANCEIRA PARA NETOS
    const escolhaTerceiraIdade3 = obterResposta(
      `Seus netos pediram conselhos sobre dinheiro. Você vai 'ensinar' tudo que aprendeu ou 'deixar' eles aprenderem sozinhos?`,
      ["ensinar", "deixar"]
    );
    
    if (escolhaTerceiraIdade3 === null) throw new Error("Jogo cancelado");
    
    if (escolhaTerceiraIdade3 === "ensinar") {
      conhecimentoFinanceiro += medioMais;
      felicidade += graveMais;
      alert(`Você transmitiu sua sabedoria financeira para a próxima geração! Conhecimento financeiro: ${conhecimentoFinanceiro}, Felicidade: ${felicidade}`);
    } else {
      alert(`Você deixou eles aprenderem por conta própria. Às vezes é necessário errar para aprender.`);
    }
  }
  
  aplicarLimites();
  logDebug("Após Terceira Idade", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
  /////////////////////////////
  // AVALIAÇÕES FINAIS
  /////////////////////////////
  
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
  
  alert(`🎊 Parabéns ${nome_char}! Você completou sua jornada de vida!`);
  
  avaliar(felicidade, "felicidade", 100);
  avaliar(inteligencia, "inteligência", 150);
  avaliar(beleza, "beleza", 20);
  avaliar(autocontrole, "autocontrole", 100);
  avaliar(conhecimentoFinanceiro, "conhecimento financeiro", 40);
  avaliar(dinheiro, "dinheiro", 3000);
  
  alert("🎉 Fim do seu jogo. Obrigado por jogar!");
  console.log("Script finalizado com sucesso.");
  
  logDebug("Final do Jogo", {felicidade, inteligencia, beleza, autocontrole, dinheiro, conhecimentoFinanceiro, idade});
  
} catch (error) {
  console.error("Erro durante o jogo:", error);
  alert("Ocorreu um erro durante o jogo. Avise os alunos!");
}