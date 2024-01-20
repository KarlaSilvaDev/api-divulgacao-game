const textoElement = document.getElementById('typing-text-jogo');
const textoElement2 = document.getElementById('typing-text-jogo2');
const textoElement3 = document.getElementById('typing-text-jogo3');


function exibirTexto(texto, indice = 0) {
    if (indice < texto.length) {
        textoElement.textContent += texto[indice];
        setTimeout(() => {
            exibirTexto(texto, indice + 1);
        }, 30); // Ajuste o tempo conforme necessário
    }
}
function exibirTexto2(texto, indice = 0) {
    if (indice < texto.length) {
        textoElement2.textContent += texto[indice];
        setTimeout(() => {
            exibirTexto2(texto, indice + 1);
        }, 30); // Ajuste o tempo conforme necessário
    }
}

// Substitua 'Aqui você vai descobrir como jogar.' pelo texto desejado
const texto = 'No ano de 2150, a Metrópole 23 está à beira do colapso. As megacorporações expandiram seu domínio, explorando a linha tênue entre o real e o virtual. O controle exercido pelas empresas é opressivo, e a população vive sob constante vigilância. A Neuromatrix, uma rede onipresente que conecta todos os aspectos da vida, tornou-se a ferramenta definitiva de controle. Você é um hacker renegado, conhecido como "Cipher", cuja missão é romper os grilhões da Neuromatrix e libertar a Metrópole 23 da opressão corporativa. Ao longo do jogo, você desvendará segredos sombrios, enfrentará inimigos implacáveis e mergulhará em mundos virtuais perigosos para desafiar a ordem estabelecida.';
const texto2 = 'Navegue pelos distritos sombrios da Metrópole 23, repletos de arranha-céus futuristas, becos escuros e segredos ocultos. A cidade é um playground vasto, oferecendo missões secundárias, encontros com personagens intrigantes e oportunidades para desvendar a verdade por trás das corporações. Desenvolva as habilidades de hacking de Cipher para invadir sistemas de segurança, manipular dispositivos eletrônicos e desbloquear áreas restritas. Aprimore implantes cibernéticos para ganhar vantagens táticas sobre inimigos e acessar áreas secretas.'
const texto3 = 'Dedique tempo ao treinamento de habilidades de hacking em ambientes simulados. Aperfeiçoe suas técnicas de invasão, aprenda a contornar firewalls avançados e melhore a eficácia dos seus ataques virtuais. Explore o mercado negro de melhorias cibernéticas. Invista em novos implantes para desbloquear habilidades especiais, como visão noturna, reflexos aprimorados ou até mesmo a capacidade de acessar áreas restritas sem ser detectado.'
exibirTexto(texto);
exibirTexto2(texto2);
exibirTexto2(texto3);