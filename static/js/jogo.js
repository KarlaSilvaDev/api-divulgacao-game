const scrollingTextElement = document.getElementById('scrolling-text');
const text = "Em um futuro distópico, mergulhe em um jogo futurista onde a realidade virtual se entrelaça com o mundo físico. No ano de 2150, a Metrópole 23 está à beira do colapso.As megacorporações expandiram seu domínio, explorando a linha tênue entre o real e o virtual.O controle exercido pelas empresas é opressivo, e a população vive sob constante vigilância. A Neuromatrix, uma rede onipresente que conecta todos os aspectos da vida, tornou-se a ferramenta definitiva de controle. Você é um hacker renegado, conhecido como Cipher, cuja missão é romper os grilhões da Neuromatrix e libertar a Metrópole 23 da opressão corporativa. Ao longo do jogo, você desvendará segredos sombrios, enfrentará inimigos implacáveis e mergulhará em mundos virtuais perigosos para desafiar a ordem estabelecida. Navegue pelos distritos sombrios da Metrópole 23, repletos de arranha-céus futuristas, becos escuros e segredos ocultos. A cidade é um playground vasto, oferecendo missões secundárias, encontros com personagens intrigantes e oportunidades para desvendar a verdade por trás das corporações."; // Adicione seu texto
let index = 0;

function updateScrollingText() {
    if (index < text.length) {
        scrollingTextElement.textContent += text[index];
        index++;
    }
}

setInterval(updateScrollingText, 50); // Ajuste a velocidade conforme necessário
