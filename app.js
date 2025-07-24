///////////////////////////// 

// informações base/da vida 

///////////////////////////// 

 

let felicidade = 60; 

let idade; 

let autocontrole = 70; 

let temParceira = false; 

 

const beleza = Math.floor(Math.random() * 10) + 1; 

let inteligencia = Math.floor(Math.random() * 70) + 1; 

const testeBerçoDeOuro = Math.floor(Math.random() * 1000) + 1; 

const engraçadinho = Math.floor(Math.random() * 100) + 1; 

let berçoDeOuro = testeBerçoDeOuro == 999 ? true : false; 

 

function numeroAleatorioEntre(min, max) { 

  return Math.floor(Math.random() * (max - min + 1)) + min; 

} 

 

 

let alturaCriança = numeroAleatorioEntre(140, 160); 

 

///////////////////////////// 

// criando aumento/diminuição de variáveis 

///////////////////////////// 

 

let neutro = 0; 

let leveMais = 3; 

let baixoMais = 5; 

let medioMais = 7; 

let graveMais = 10; 

 

///////////////////// 

// comprinhaixxx 

///////////////////// 

 

let dinheiro = 80; 

let salario = 20; 

let barbie = 50; 

let hotwheels = 20; 

let fidgetSpinners = 30; 

let videogame = 700; 

 

///////////////////////////// 

// criando 1º evento 

///////////////////////////// 

 

const nome_char = prompt('Qual nome você deseja que seja o seu personagem tenha? '); 

 

idade = 8; 

 

alert(`Atualmente, ${nome_char} está na infância, ${idade} anos. Suas características são, beleza: ${beleza}/10. Altura ${alturaCriança}cm. Inteligência: ${inteligencia}/150. Engraçado: ${engraçadinho}/100. ${nome_char} tem ${dinheiro} reais guardados em um cofrinho`); 

 

let respostaValida = false; 

 

while (!respostaValida) { 

  const escolhaInfancia = prompt("Que pena! Seu priminho estava brincando com você, quando ele quebrou o seu brinquedo favorito. Você quer 'bater' nele ou 'desculpar'?"); 

 

  if (escolhaInfancia === "bater") { 

    felicidade -= graveMais; 

    autocontrole -= baixoMais; 

    dinheiro -= 20; 

    alert(`Sua felicidade agora diminuiu por causa do peso na consciência. Agora você está com ${felicidade} pontos de felicidade. Seu comportamento também diminuiu, agora está em ${autocontrole}%. Por causa da sua atitude, sua mãe pega 20 reais de seu cofrinho. Agora você está com ${dinheiro}`); 

    respostaValida = true; 

  } else if (escolhaInfancia === "desculpar") { 

    autocontrole += baixoMais; 

    dinheiro += salario; 

    alert(`Sua felicidade abaixou um pouco, agora com ${felicidade} pontos. Seu autocontrole aumentou para ${autocontrole}%. Pelo seu ato, sua mãe decide te dar ${salario} reais de presente, agora você tem ${dinheiro} reais.`); 

    respostaValida = true; 

  } else { 

    alert("Opção inválida. Por favor, escolha 'bater' ou 'desculpar'."); 

  } 

} 

 

///////////////////////////// 

// caminhos aleatórios 

///////////////////////////// 

 

const numeroRandom = Math.floor(Math.random() * 2) + 1; 

const numeroAposta = Math.floor(Math.random() * 1000) + 1; 

const numeroRandom2 = Math.floor(Math.random() * 2) + 1; 

 

///////////////////////////// 

// eventu aleatóri1 

///////////////////////////// 

 

let respostaInfancia2Valida = false; 

 

if (numeroRandom === 1) { 

  while (!respostaInfancia2Valida) { 

    const escolhaInfancia2 = prompt("No 6º ano, você estava em uma conversa com dois colegas, um deles falou que ganhou muito dinheiro apostando no MAC e o outro falou que investiu no tesouro SELIC. Você realmente precisava de uma grana para comprar um videogame. Você irá 'apostar' ou 'investir'?"); 

 

    if (escolhaInfancia2 == "apostar") { 

      if (numeroAposta == 666) { 

        alert('Você teve muita sorte e ganhou 2.141.566.418.580 (o dinheiro do Elon musk), mas você decidiu tentar a sorte novamente e perdeu todo o seu dinheiro. Recomeçe!'); 

        respostaInfancia2Valida = true; 

        setTimeout(function () { 

          window.location.reload(); 

        }, 100); 

      } else { 

        autocontrole -= 20; 

        alert(`Você perdeu a aposta. Agora está com menos autocontrole, ${autocontrole}%. E repensa nos seus atos.`); 

        respostaInfancia2Valida = true; 

      } 

    } else if (escolhaInfancia2 == "investir") { 

      let investiuQuanto = Number(prompt(`Quanto você deseja investir? Lembrando que você tem ${dinheiro}`)); 

      let temDinheiroInvestir = false; 

 

      while (!temDinheiroInvestir) { 

        if (investiuQuanto > dinheiro || isNaN(investiuQuanto) || investiuQuanto <= 0) { 

          alert('Você não tem tanto dinheiro ou digitou um valor inválido!'); 

          investiuQuanto = Number(prompt(`Digite um valor válido. Você tem ${dinheiro}.`)); 

        } else { 

          dinheiro = dinheiro - investiuQuanto; 

          investiuQuanto = investiuQuanto * 10; 

          dinheiro += investiuQuanto; 

          alert(`No início do 3º ano do ensino médio você terá ${dinheiro}!`); 

          temDinheiroInvestir = true; 

          respostaInfancia2Valida = true; 

        } 

      } 

    } else { 

      alert('resposta inválida!'); 

    } 

  } 

} else if (numeroRandom == 2) { 

  let respostaInfancia3Valida = false; 

 

  while (!respostaInfancia3Valida) { 

    const escolhaInfancia3 = prompt(`Novos brinquedos estão na moda, a 'barbie' que custa apenas R$${barbie}, os 'hotwheels' por uma bagatela de R$${hotwheels} e os 'fidgetSpinners', de: 45 reais por: R$${fidgetSpinners}. Ou você pode criar uma 'poupança' para comprar algo mais necessário ou caro no futuro, o que você irá fazer? Lembrando que você tem ${dinheiro} reais!`); 

 

    if (escolhaInfancia3 == 'barbie') { 

      dinheiro -= barbie; 

      felicidade += medioMais; 

      alert(`Você comprou seu brinquedo com sucesso! agora o(a) ${nome_char} está com ${felicidade} pontos de felicidade!`); 

      respostaInfancia3Valida = true; 

    } else if (escolhaInfancia3 == 'hotwheels') { 

      dinheiro -= hotwheels; 

      felicidade += leveMais; 

      alert(`Você comprou seu brinquedo com sucesso! agora o(a) ${nome_char} está com ${felicidade} pontos de felicidade!`); 

      respostaInfancia3Valida = true; 

    } else if (escolhaInfancia3 == 'fidgetSpinners') { 

      dinheiro -= fidgetSpinners; 

      felicidade += baixoMais; 

      alert(`Você comprou seu brinquedo com sucesso! agora o(a) ${nome_char} está com ${felicidade} pontos de felicidade!`); 

      respostaInfancia3Valida = true; 

    } else if (escolhaInfancia3 == 'poupança') { 

      let pouparQuanto = Number(prompt(`Quanto você deseja poupar? Lembrando que você tem ${dinheiro}`)); 

      let temDinheiroPoupar = false; 

 

      while (!temDinheiroPoupar) { 

        if (pouparQuanto > dinheiro || isNaN(pouparQuanto) || pouparQuanto <= 0) { 

          alert('Você não tem tanto dinheiro ou digitou um valor inválido!'); 

          pouparQuanto = Number(prompt(`Digite um valor válido. Você tem ${dinheiro}.`)); 

        } else { 

          dinheiro = dinheiro - pouparQuanto; 

          pouparQuanto = pouparQuanto * 7; 

          dinheiro += pouparQuanto; 

          alert(`No início do 3º ano do ensino médio você terá ${dinheiro}!`); 

          temDinheiroPoupar = true; 

          respostaInfancia3Valida = true; 

        } 

      } 

    } else { 

      alert("Você digitou uma opção inexistente!"); 

    } 

  } 

} 

 

inteligencia += 25; 

 

///////////////////////////// 

// eventos terceirão 

///////////////////////////// 

 

if (numeroRandom2 == 1) { 

  let escolhaTerceiraoValida = false; 

 

  while (!escolhaTerceiraoValida) { 

    const escolhaTerceirao = prompt(`O último sextou de novembro chegou! Nesta Black Friday o videogame que você quer há tanto tempo também está na promoção, apenas ${videogame} reais! O(A) ${nome_char} decide 'comprar'? ou 'não comprar'?`).toLowerCase().trim(); 

 

    if (escolhaTerceirao === 'comprar') { 

      if (dinheiro < videogame) { 

        alert('Você não tem tanto dinheiro!'); 

      } else { 

        felicidade += graveMais; 

        dinheiro -= videogame; 

        alert(`Parabéns pela sua aquisição! Agora você está com ${felicidade} pontos de felicidade e R$${dinheiro} reais.`); 

      } 

      escolhaTerceiraoValida = true; 

    } else if (escolhaTerceirao === 'não comprar') { 

      alert(`${nome_char} decidiu que não era a hora certa.`); 

      escolhaTerceiraoValida = true; 

    } else { 

      alert("Você digitou uma opção inexistente! Por favor, digite 'comprar' ou 'não comprar'."); 

    } 

  } 

} 

 

if (numeroRandom2 == 2) { 

  let escolhaTerceiraoValida2 = false; 

 

  while (!escolhaTerceiraoValida2) { 

    alert('O provão final do terceirão chegou e você está à beira de reprovar! E os seus amigos estão te convidando para ir à lanchonete.'); 

 

    const escolhaTerceirao2 = prompt(`O que você irá fazer? 'estudar' ou 'ir a lanchonete'?`); 

 

    if (escolhaTerceirao2 == 'estudar') { 

      let estudarQntoValida = false; 

 

      while (!estudarQntoValida) { 

        const estudarQnto = prompt("Você quer estudar quantas horas, 'uma hora', 'duas horas' ou 'três horas?' "); 

 

        if (estudarQnto == "uma hora") { 

          inteligencia += 15; 

        } else if (estudarQnto == "duas horas") { 

          inteligencia += 20; 

        } else if (estudarQnto == "três horas") { 

          inteligencia += 25; 

        } else { 

          alert("Escolha inválida."); 

          continue; 

        } 

 

        

 

        const nota = inteligencia / 10; 
        if (nota > 10) {nota = 10;}
 

        if (nota <= 7) { 

          felicidade -= 10; 

          alert(`O(A) ${nome_char} tirou ${nota}, reprovando na prova final. Talvez fosse melhor estudar mais? Sua mãe brigou com você, agora você está com ${felicidade} pontos de felicidade.`); 

          alert("Agora, com seu desempenho, poucas empresas estarão interessadas no seu potencial profissional/acadêmico."); 

          if (berçoDeOuro === true) { 

            alert("Ah, mas você nem precisará trabalhar, já que a sua família é milionária!"); 

          } 

        } else if (nota >= 7 && nota <= 9.99) { 

          felicidade += 10; 

          alert(`Você passou com ${nota} de nota final! E ficou MUITO feliz, ${felicidade} pontos agora. Porém, quando contou isso para sua mãe, ela disse que não fez mais que sua obrigação.`); 

        } else if (nota >= 10) { 

          felicidade += 20; 

          dinheiro += 200; 

          alert(`Você passou com ${nota} de nota final! E ficou MUITO feliz, ${felicidade} pontos agora. E como recompensa, sua mãe lhe deu 200 reais, agora você está com R$${dinheiro}. Empresas agora estão mais prováveis em notar seu desempenho acadêmico!`); 

        } 

 

        estudarQntoValida = true; 

        escolhaTerceiraoValida2 = true; 

      } 

    } else if (escolhaTerceirao2 === 'ir a lanchonete') { 

      let respostaBarzin = false; 

      let conquistador = 0; 

 

      while (!respostaBarzin) { 

        const pessoaAtraente = prompt("No meio da noite, você encontra uma pessoa atraente, você vai tentar 'conversar' ou 'deixar para lá'?"); 

 

        if (pessoaAtraente === 'conversar') { 

          conquistador = beleza + engraçadinho; 

          if (conquistador < 67) { 

            felicidade += graveMais; 

            dinheiro -= 60; 

            alert(`Depois de um tempo conversando, vocês viraram mais do que amigos. Agora você tem um(a) namorado(a)! Sua felicidade aumentou bastante, agora com ${felicidade} pontos. Você pagou o jantar, agora ${nome_char} está com ${dinheiro} reais.`); 

            temParceira = true; 

          } else { 

            felicidade -= 3; 

            dinheiro -= 40; 

            alert(`A pessoa falou que não estava querendo nada sério por enquanto. Você está um pouco triste e teve que pagar o jantar já que ele(a) estava sem carteira! ${nome_char} está com ${dinheiro} reais e ${felicidade} pontos de felicidade.`); 

            temParceira = false; 

          } 

          respostaBarzin = true; 

          escolhaTerceiraoValida2 = true; 

        } else if (pessoaAtraente === 'deixar para lá') { 

          alert("Você decidiu não conversar."); 

          respostaBarzin = true; 

          escolhaTerceiraoValida2 = true; 

        } else { 

          alert("Escolha inválida."); 

        } 

      } 

    } else { 

      alert("Escolha inválida."); 

    } 

  } 

} 

/////////////////////////////
// INÍCIO DA VIDA ADULTA
/////////////////////////////

idade = 25;
alert(`${nome_char} agora entrou na fase adulta, com ${idade} anos.`);

let numeroRandom3 = Math.floor(Math.random() * 3) + 1;

if (numeroRandom3 === 1) {
  // Evento exemplo 1
  let resposta = prompt("Você recebeu uma promoção no trabalho, mas exigirá mais horas. Aceita? 'sim' ou 'não'");
  if (resposta == 'sim') {
    inteligencia += 10;
    felicidade -= 5;
    autocontrole += 5;
    alert(`Sua inteligência subiu para ${inteligencia}, mas felicidade caiu para ${felicidade}. Autocontrole agora é ${autocontrole}.`);
  } else {
    felicidade += 5;
    beleza += 1;
    alert(`Você ganhou mais tempo livre! Felicidade agora é ${felicidade}, beleza subiu para ${beleza}.`);
  }

} else if (numeroRandom3 === 2) {
  // Evento exemplo 2
  let resposta = prompt("Você foi convidado para ser modelo de uma marca local. Aceita? 'sim' ou 'não'");
  if (resposta == 'sim') {
    beleza += 2;
    dinheiro += 200;
    felicidade += 5;
    alert(`Você arrasou! Beleza agora é ${beleza}, ganhou R$${200}, felicidade subiu para ${felicidade}.`);
  } else {
    autocontrole += 3;
    alert(`Você manteve o foco nos estudos/trabalho. Autocontrole agora é ${autocontrole}.`);
  }

} else if (numeroRandom3 === 3) {
  // Evento exemplo 3
  let resposta = prompt("Você está se sentindo ansioso ultimamente. Quer iniciar terapia? 'sim' ou 'não'");
  if (resposta == 'sim') {
    autocontrole += 10;
    dinheiro -= 150;
    alert(`Sua mente agradece! Autocontrole agora é ${autocontrole}, mas seu dinheiro caiu para ${dinheiro}.`);
  } else {
    autocontrole -= 10;
    felicidade -= 5;
    alert(`Sua ansiedade aumentou. Autocontrole agora é ${autocontrole}, felicidade caiu para ${felicidade}.`);
  }
}

/////////////////////////////
// MEIA IDADE (40 anos)
/////////////////////////////

idade = 40;
alert(`${nome_char} agora tem ${idade} anos.`);

let numeroRandom4 = Math.floor(Math.random() * 3) + 1;

if (numeroRandom4 === 1) {
  let resposta = prompt("Você decidiu começar academia. Vai seguir? 'sim' ou 'não'");
  if (resposta == 'sim') {
    beleza += 2;
    autocontrole += 5;
    felicidade += 5;
    alert(`Você está mais bonito(a)! Beleza agora é ${beleza}, autocontrole ${autocontrole}, felicidade ${felicidade}.`);
  } else {
    beleza -= 1;
    felicidade -= 3;
    alert(`Você se sentiu mal por não iniciar. Beleza agora é ${beleza}, felicidade ${felicidade}.`);
  }

} else if (numeroRandom4 === 2) {
  let resposta = prompt("Recebeu proposta de mudança para outra cidade. Aceita? 'sim' ou 'não'");
  if (resposta == 'sim') {
    dinheiro += 1000;
    autocontrole -= 5;
    alert(`Mudança difícil mas rentável! Dinheiro agora é ${dinheiro}, autocontrole caiu para ${autocontrole}.`);
  } else {
    felicidade += 5;
    alert(`Você preferiu estabilidade. Felicidade agora é ${felicidade}.`);
  }

} else if (numeroRandom4 === 3) {
  let resposta = prompt("Te ofereceram participação em um reality show. Aceita? 'sim' ou 'não'");
  if (resposta == 'sim') {
    beleza += 3;
    felicidade += 10;
    autocontrole -= 5;
    alert(`Você ficou famoso(a)! Beleza ${beleza}, felicidade ${felicidade}, autocontrole caiu para ${autocontrole}.`);
  } else {
    autocontrole += 5;
    alert(`Você recusou a fama. Autocontrole agora é ${autocontrole}.`);
  }
}

/////////////////////////////
// TERCEIRA IDADE (65 anos)
/////////////////////////////

function terceiraIdade() {
  idade = 65;
  alert(`${nome_char} agora está na terceira idade, com ${idade} anos.`);

  let numeroRandom5 = Math.floor(Math.random() * 3) + 1;

  if (numeroRandom5 === 1) {
    let resposta = prompt("Te chamaram para viajar pelo mundo. Vai? 'sim' ou 'não'");
    if (resposta == 'sim') {
      felicidade += 20;
      dinheiro -= 1000;
      alert(`Viagem inesquecível! Felicidade ${felicidade}, dinheiro agora é ${dinheiro}.`);
    } else {
      autocontrole += 5;
      alert(`Você decidiu economizar. Autocontrole agora é ${autocontrole}.`);
    }

  } else if (numeroRandom5 === 2) {
    let resposta = prompt("Você começou a ter problemas de memória. Vai ao médico? 'sim' ou 'não'");
    if (resposta == 'sim') {
      inteligencia += 5;
      dinheiro -= 500;
      alert(`Tratamento ajudou! Inteligência agora é ${inteligencia}, dinheiro ${dinheiro}.`);
    } else {
      inteligencia -= 10;
      felicidade -= 5;
      alert(`Sua memória piorou. Inteligência ${inteligencia}, felicidade ${felicidade}.`);
    }

  } else if (numeroRandom5 === 3) {
    let resposta = prompt("Você quer escrever um livro de memórias? 'sim' ou 'não'");
    if (resposta == 'sim') {
      inteligencia += 10;
      felicidade += 10;
      alert(`Obra finalizada! Inteligência ${inteligencia}, felicidade ${felicidade}.`);
    } else {
      autocontrole -= 5;
      alert(`Você desistiu facilmente. Autocontrole agora é ${autocontrole}.`);
    }
  }

  
}

terceiraIdade();

/////////////////////////////
// FINAL DAS ESTATÍSTICAS
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
      mensagem = `❌ Seu(Sua) ${nome} está baixo: ${variavel}/${max}`;
    } else if (variavel < limiteMedio) {
      mensagem = `⚠️ Seu(Sua) ${nome} está mediano: ${variavel}/${max}`;
    } else {
      mensagem = `✅ Seu(Sua) ${nome} está excelente: ${variavel}/${max}`;
    }
    alert(mensagem);
  }

  avaliar(felicidade, "felicidade", 100);
  avaliar(inteligencia, "inteligência", 100);
  avaliar(beleza, "beleza", 20);
  avaliar(autocontrole, "autocontrole", 100);
  avaliar(engraçadinho, "engraçado", 100);
  avaliar(dinheiro, "dinheiro", 3000);

  alert("🎉 Fim do seu jogo. Obrigado por jogar!");
  console.log("Script finalizado.");
 
