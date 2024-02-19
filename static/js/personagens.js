document.addEventListener("DOMContentLoaded", function () {
    var botoesVerMais = document.querySelectorAll('.btn-ver-mais');
    var modal = document.getElementById("modal");
    var textoCompletoElement = document.getElementById("texto-completo");

    botoesVerMais.forEach(function (botao) {
        botao.addEventListener("click", function () {
            var card = botao.closest(".card");
            var textoCompleto = card.querySelector(".completo-texto").textContent;

            // Preenche o conteúdo da modal com o texto completo
            textoCompletoElement.textContent = textoCompleto;

            // Exibe a modal
            modal.style.display = "flex";
            modal.style.flexDirection = "column"
        });
    });

    // Fecha a modal quando o usuário clica no botão de fechar
    var closeButton = document.getElementsByClassName("btn-close")[0];
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha a modal quando o usuário clica fora dela
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
