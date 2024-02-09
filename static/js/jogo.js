const scrollingTextElement = document.getElementById('scrolling-text');
const text = "Em um futuro distópico, mergulhe em um jogo futurista onde a realidade virtual se entrelaça com o mundo físico. No ano de 2150, a Metrópole 23 está à beira do colapso.As megacorporações expandiram seu domínio, explorando a linha tênue entre o real e o virtual.O controle exercido pelas empresas é opressivo, e a população vive sob constante vigilância. A Neuromatrix, uma rede onipresente que conecta todos os aspectos da vida, tornou-se a ferramenta definitiva de controle. Você é um hacker renegado, conhecido como Cipher, cuja missão é romper os grilhões da Neuromatrix e libertar a Metrópole 23 da opressão corporativa. "; // Adicione seu texto
let index = 0;

function updateScrollingText() {
    if (index < text.length) {
        scrollingTextElement.textContent += text[index];
        index++;
    }
}

setInterval(updateScrollingText, 50); // Ajuste a velocidade conforme necessário
