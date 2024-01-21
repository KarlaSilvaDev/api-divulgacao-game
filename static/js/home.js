document.getElementById("verMais").style.display = "none";
document.getElementById("verMenos").style.display = "none";


// acrobat

function changeAbilityAcrobat() {
    document.getElementById('ability-sniper').style.border = 'none';
    document.getElementById('ability-master').style.border = 'none';
    document.getElementById('ability-hacker').style.border = 'none';
    document.getElementById('ability-engineer').style.border = 'none';

    document.getElementById("ability-acrobat").style.border = "2px solid #05D9E8";
    document.getElementById("title-ability").innerHTML = "acrobat urbano";
    document.getElementById("summary-ability").innerHTML = "Abilidade exclusiva voltada para mobilidade e destreza. Suas capacidades incluem a criação de hologramas de distração, implantes cibernéticos que permitem saltos acrobáticos, garras magnéticas para escalada e deslizadores urbanos nas solas dos sapatos. ";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/acrobat.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";
       

    }
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMais").style.display = "block";

}


//sniper


function changeAbilitySniper() {
    document.getElementById('ability-acrobat').style.border = 'none';
    document.getElementById('ability-master').style.border = 'none';
    document.getElementById('ability-hacker').style.border = 'none';
    document.getElementById('ability-engineer').style.border = 'none';
    document.getElementById("ability-sniper").style.border = "2px solid #05D9E8";
    document.getElementById("title-ability").innerHTML = "sniper";
    document.getElementById("summary-ability").innerHTML = "A Atiradora de elite, em um cenário futurista, traz consigo abilitys únicas que a destacam no campo de batalha. Sua perícia excepcional com armas de longo alcance e abilitys táticas tornam-na uma força crucial para estratégias de equipe e confrontos à distância.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/snipera-elite.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }
    
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMais").style.display = "block";
}

// ENGENHEIRA DE DRONE

function changeAbilityEngineer() {
    document.getElementById('ability-acrobat').style.border = 'none';
    document.getElementById('ability-sniper').style.border = 'none';
    document.getElementById('ability-master').style.border = 'none';
    document.getElementById('ability-hacker').style.border = 'none';

    document.getElementById("ability-engineer").style.border = "2px solid #05D9E8";
    document.getElementById("title-ability").innerHTML = "Engenheira de drone";
    document.getElementById("summary-ability").innerHTML = "A Engenheira de Drone é uma especialista técnica em um mundo futurista, cujas abilitys giram em torno do controle de drones avançados. Seu papel essencial no campo de batalha envolve a utilização estratégica de tecnologia para fornecer suporte, reconhecimento e controle tático à equipe.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/engenheira-drone.png";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMais").style.display = "block";
}



//HACKER

function changeAbilityHacker() {
    document.getElementById('ability-acrobat').style.border = 'none';
    document.getElementById('ability-sniper').style.border = 'none';
    document.getElementById('ability-master').style.border = 'none';
    document.getElementById('ability-engineer').style.border = 'none';

    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""

    document.getElementById("ability-hacker").style.border = "2px solid #05D9E8";
    document.getElementById("title-ability").innerHTML = "Hacker";
    document.getElementById("summary-ability").innerHTML = "O Hacker, um especialista em manipulação digital no cenário futurista, destaca-se por três abilitys distintas que o tornam um ativo valioso para a equipe. Sua perícia em invasão cibernética, interferência eletrônica e manipulação de drones inimigos o posiciona como um estrategista tático incomparável. ";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/hacker.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMais").style.display = "block";
   

}

//MESTRA COMBATE

function changeAbilitymaster() {
    document.getElementById('ability-acrobat').style.border = 'none';
    document.getElementById('ability-sniper').style.border = 'none';
    document.getElementById('ability-hacker').style.border = 'none';
    document.getElementById('ability-engineer').style.border = 'none';
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("ability-master").style.border = "2px solid #05D9E8";
    document.getElementById("title-ability").innerHTML = "master em combate";
    document.getElementById("summary-ability").innerHTML = "A master em Combate é uma guerreira habilidosa em um cenário futurista, destacando-se por suas proezas físicas e expertise em diversas formas de combate. Sua presença no campo de batalha é marcada por uma combinação única de força bruta, agilidade impressionante e táticas de combate estratégicas.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/mestra_combate.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }
   
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMais").style.display = "block";
}


function verMais() {

    if (document.getElementById("title-ability").innerHTML === "sniper") {
        document.getElementById("verMais1").innerHTML = "Precisão cirúrgica: sniper possui uma ability única que lhe confere precisão extraordinária. Seus disparos são cirúrgicos, capazes de atingir alvos específicos com extrema exatidão."
        document.getElementById("verMais2").innerHTML = "Munição especializada:Capacidade de utilizar munições especializadas, como projéteis rastreadores, perfurantes de armadura, ou até mesmo dispositivos de interferência eletrônica. Isso proporciona versatilidade no enfrentamento de diferentes tipos de adversários."
        document.getElementById("verMais3").innerHTML = "Refúgio estratégico: A snipera pode implantar rapidamente um abrigo temporário, oferecendo proteção contra ataques inimigos enquanto mantém uma linha de visão clara. Essa ability é vital para controlar áreas-chave do campo de batalha."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";
    } else if (document.getElementById("title-ability").innerHTML === "acrobat urbano") {
        document.getElementById("verMais1").innerHTML = "Holograma de Distração: O acrobat Urbano pode criar hologramas realistas de si mesmo, confundindo os inimigos e desviando a atenção."
        document.getElementById("verMais2").innerHTML = "Implantes cibernéticos nas pernas: Permitem saltos extraordinários e movimentos acrobáticos. Essa ability pode ser útil para alcançar áreas elevadas, escapar rapidamente de confrontos ou até mesmo realizar ataques aéreos."
        document.getElementById("verMais3").innerHTML = "Garras Magnéticas: Implantes nas mãos que permitem aderir a superfícies metálicas, possibilitando escaladas verticais rápidas ou a capacidade de se pendurar em tetos."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("title-ability").innerHTML === "Engenheira de drone") {
        document.getElementById("verMais1").innerHTML = "Controle remoto de drone: A Engenheira de Drone possui a capacidade de controlar remotamente drones especializados. Esses drones podem ser usados para reconhecimento, mapeamento do terreno e, em alguns casos, para fornecer apoio ofensivo ou defensivo."
        document.getElementById("verMais2").innerHTML = "Reparo técnico: ability de enviar drones de reparo para curar aliados feridos ou consertar equipamentos danificados. Esta ability é crucial para manter a equipe em plena forma durante combates prolongados."
        document.getElementById("verMais3").innerHTML = "A Engenheira pode usar seus drones para criar interferência eletrônica no campo de batalha, prejudicando comunicações inimigas, desativando dispositivos eletrônicos e até mesmo cegando temporariamente drones adversários."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("title-ability").innerHTML === "Hacker") {
        document.getElementById("verMais1").innerHTML = "Invação cibernética: O Hacker possui a ability de invadir sistemas digitais, incluindo dispositivos de segurança, câmeras e outros equipamentos eletrônicos. Isso permite que ele obtenha informações cruciais e desative armadilhas."
        document.getElementById("verMais2").innerHTML = "Interferência eletrônica: Capacidade de criar interferência nos sistemas eletrônicos ao seu redor. Essa ability pode desativar temporariamente comunicações inimigas, bloquear sensores e criar oportunidades táticas para a equipe."
        document.getElementById("verMais3").innerHTML = "Capacidade de roubar temporariamente a identidade de um inimigo, fornecendo acesso a informações específicas desse alvo. Isso pode revelar posições, planos estratégicos e vulnerabilidades."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("title-ability").innerHTML === "master em combate") {
        document.getElementById("verMais1").innerHTML = "Golpes especiais aprimorados: Desenvolvimento de golpes especiais aprimorados, incluindo ataques energizados ou técnicas de desarme avançadas. Essas abilitys únicas proporcionam à master em Combate uma vantagem adicional durante os confrontos."
        document.getElementById("verMais2").innerHTML = "Técnicas de combate corpo a corpo: Expertise em técnicas avançadas de combate corpo a corpo, incluindo artes marciais futuristas e manobras acrobáticas. A master em Combate pode enfrentar inimigos em proximidade com eficiência e estilo."
        document.getElementById("verMais3").innerHTML = "Reação rápida: Refletores neuromusculares e treinamento especializado concedem à master em Combate uma notável reação rápida, permitindo esquivas ágeis e respostas instantâneas a ameaças."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
}

// VER MENOS
function verMenos() {
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("verMais").style.display = "block";
    document.getElementById("verMenos").style.display = "none";
}

const imagens = [
    "/static/img/home/carrossel2.jpg",
    "/static/img/home/carrossel3.jpg",
    "/static/img/home/carrossel4.jpg"
];

const imagemElement = document.querySelector('.banner-image');
let indiceAtual = 0;

function alterarImagem() {
    // Remova a linha abaixo
    // imagemElement.style.opacity = 0;

    // Remova o setTimeout, pois queremos que a transição ocorra automaticamente com o tempo definido no CSS
    imagemElement.src = imagens[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagens.length;

    // Adicione um pequeno atraso antes de ajustar a opacidade para garantir que a transição ocorra após a imagem ser carregada
    setTimeout(() => {
        imagemElement.style.opacity = 1;
    }, 50);
}

alterarImagem();
setInterval(alterarImagem, 5000);
const textoCompleto = "\nDesvende segredos e escolhas cruciais em Neon Shadows, onde a realidade virtual e distopia se entrelaçam. Você está pronto para esta jornada?";
const textoElement = document.getElementById('typing-text-home');
let indice = 0;

// Função para exibir texto com efeito de digitação
function exibirTexto() {
    textoElement.textContent += textoCompleto[indice];
    indice++;
    if (indice < textoCompleto.length) {
        setTimeout(exibirTexto, 50); // Ajuste o tempo conforme necessário
    }
}

// Chama a função de exibição de texto inicialmente
exibirTexto();

// Autoplay do vídeo História
var video = document.getElementById("videoHome");

// Reproduzir o vídeo quando a página é carregada
window.onload = function () {
    video.play();
};