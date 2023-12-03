document.getElementById("verMais").style.display = "none";
document.getElementById("verMenos").style.display = "none";

// ACROBATA

function mudaHabilidadeAcrobata() {

    document.getElementById("habilidade-acrobata").style.border = "2px solid white";
    document.getElementById("titulo-habilidade").innerHTML = "Acrobata urbano";
    document.getElementById("resumo-habilidade").innerHTML = "Habilidade exclusiva voltada para mobilidade e destreza. Suas capacidades incluem a criação de hologramas de distração, implantes cibernéticos que permitem saltos acrobáticos, garras magnéticas para escalada e deslizadores urbanos nas solas dos sapatos. ";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/acrobata.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }

}


//ATIRADORA DE ELITE


function mudaHabilidadeAtiradoraElite() {
    document.getElementById("habilidade-atirador").style.border = "2px solid white";
    document.getElementById("titulo-habilidade").innerHTML = "Atiradora de elite";
    document.getElementById("resumo-habilidade").innerHTML = "A Atiradora de Elite, em um cenário futurista, traz consigo habilidades únicas que a destacam no campo de batalha. Sua perícia excepcional com armas de longo alcance e habilidades táticas tornam-na uma força crucial para estratégias de equipe e confrontos à distância.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/atiradora-elite.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }

}

// ENGENHEIRA DE DRONE

function mudaHabilidadeEngenheiraDrone() {

    document.getElementById("habilidade-engenheiro").style.border = "2px solid white";
    document.getElementById("titulo-habilidade").innerHTML = "Engenheira de drone";
    document.getElementById("resumo-habilidade").innerHTML = "A Engenheira de Drone é uma especialista técnica em um mundo futurista, cujas habilidades giram em torno do controle de drones avançados. Seu papel essencial no campo de batalha envolve a utilização estratégica de tecnologia para fornecer suporte, reconhecimento e controle tático à equipe.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/engenheira-drone.png";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }

}



//HACKER

function mudaHabilidadeHacker() {

    document.getElementById("habilidade-hacker").style.border = "2px solid white";
    document.getElementById("titulo-habilidade").innerHTML = "Hacker";
    document.getElementById("resumo-habilidade").innerHTML = "O Hacker, um especialista em manipulação digital no cenário futurista, destaca-se por três habilidades distintas que o tornam um ativo valioso para a equipe. Sua perícia em invasão cibernética, interferência eletrônica e manipulação de drones inimigos o posiciona como um estrategista tático incomparável. ";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/hacker.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }

}

//MESTRA COMBATE

function mudaHabilidadeMestreCombate() {
    document.getElementById("habilidade-mestre").style.border = "2px solid white";
    document.getElementById("titulo-habilidade").innerHTML = "Mestre em combate";
    document.getElementById("resumo-habilidade").innerHTML = "A Mestre em Combate é uma guerreira habilidosa em um cenário futurista, destacando-se por suas proezas físicas e expertise em diversas formas de combate. Sua presença no campo de batalha é marcada por uma combinação única de força bruta, agilidade impressionante e táticas de combate estratégicas.";
    document.getElementById("img-personagem-home").src = "/static/img/personagens/mestra-combate.jpg";
    if (document.getElementById("verMais1").innerHTML === "") {
        document.getElementById("verMais").style.display = "block";

    }

}


function verMais() {

    if (document.getElementById("titulo-habilidade").innerHTML === "Atiradora de elite") {
        document.getElementById("verMais1").innerHTML = "Precisão cirúrgica: Atiradora de Elite possui uma habilidade única que lhe confere precisão extraordinária. Seus disparos são cirúrgicos, capazes de atingir alvos específicos com extrema exatidão."
        document.getElementById("verMais2").innerHTML = "Munição especializada:Capacidade de utilizar munições especializadas, como projéteis rastreadores, perfurantes de armadura, ou até mesmo dispositivos de interferência eletrônica. Isso proporciona versatilidade no enfrentamento de diferentes tipos de adversários."
        document.getElementById("verMais3").innerHTML = "Refúgio estratégico: A Atiradora pode implantar rapidamente um abrigo temporário, oferecendo proteção contra ataques inimigos enquanto mantém uma linha de visão clara. Essa habilidade é vital para controlar áreas-chave do campo de batalha."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";
    } else if (document.getElementById("titulo-habilidade").innerHTML === "Acrobata urbano") {
        document.getElementById("verMais1").innerHTML = "Holograma de Distração: O Acrobata Urbano pode criar hologramas realistas de si mesmo, confundindo os inimigos e desviando a atenção."
        document.getElementById("verMais2").innerHTML = "Implantes cibernéticos nas pernas: Permitem saltos extraordinários e movimentos acrobáticos. Essa habilidade pode ser útil para alcançar áreas elevadas, escapar rapidamente de confrontos ou até mesmo realizar ataques aéreos."
        document.getElementById("verMais3").innerHTML = "Garras Magnéticas: Implantes nas mãos que permitem aderir a superfícies metálicas, possibilitando escaladas verticais rápidas ou a capacidade de se pendurar em tetos."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("titulo-habilidade").innerHTML === "Engenheira de drone") {
        document.getElementById("verMais1").innerHTML = "Controle remoto de drone: A Engenheira de Drone possui a capacidade de controlar remotamente drones especializados. Esses drones podem ser usados para reconhecimento, mapeamento do terreno e, em alguns casos, para fornecer apoio ofensivo ou defensivo."
        document.getElementById("verMais2").innerHTML = "Reparo técnico: Habilidade de enviar drones de reparo para curar aliados feridos ou consertar equipamentos danificados. Esta habilidade é crucial para manter a equipe em plena forma durante combates prolongados."
        document.getElementById("verMais3").innerHTML = "A Engenheira pode usar seus drones para criar interferência eletrônica no campo de batalha, prejudicando comunicações inimigas, desativando dispositivos eletrônicos e até mesmo cegando temporariamente drones adversários."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("titulo-habilidade").innerHTML === "Hacker") {
        document.getElementById("verMais1").innerHTML = "Invação cibernética: O Hacker possui a habilidade de invadir sistemas digitais, incluindo dispositivos de segurança, câmeras e outros equipamentos eletrônicos. Isso permite que ele obtenha informações cruciais e desative armadilhas."
        document.getElementById("verMais2").innerHTML = "Interferência eletrônica: Capacidade de criar interferência nos sistemas eletrônicos ao seu redor. Essa habilidade pode desativar temporariamente comunicações inimigas, bloquear sensores e criar oportunidades táticas para a equipe."
        document.getElementById("verMais3").innerHTML = "Capacidade de roubar temporariamente a identidade de um inimigo, fornecendo acesso a informações específicas desse alvo. Isso pode revelar posições, planos estratégicos e vulnerabilidades."
        document.getElementById("verMais").style.display = "none";
        document.getElementById("verMenos").style.display = "block";

    }
    else if (document.getElementById("titulo-habilidade").innerHTML === "Mestre combate") {
        document.getElementById("verMais1").innerHTML = "Golpes especiais aprimorados: Desenvolvimento de golpes especiais aprimorados, incluindo ataques energizados ou técnicas de desarme avançadas. Essas habilidades únicas proporcionam à Mestre em Combate uma vantagem adicional durante os confrontos."
        document.getElementById("verMais2").innerHTML = "Técnicas de combate corpo a corpo: Expertise em técnicas avançadas de combate corpo a corpo, incluindo artes marciais futuristas e manobras acrobáticas. A Mestre em Combate pode enfrentar inimigos em proximidade com eficiência e estilo."
        document.getElementById("verMais3").innerHTML = "Reação rápida: Refletores neuromusculares e treinamento especializado concedem à Mestre em Combate uma notável reação rápida, permitindo esquivas ágeis e respostas instantâneas a ameaças."
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
