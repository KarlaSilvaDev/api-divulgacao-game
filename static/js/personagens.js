document.addEventListener("DOMContentLoaded", function () {
    var botoesVerMais = document.querySelectorAll('.button-ver-mais');

    botoesVerMais.forEach(function (botao) {
      botao.addEventListener("click", function () {
        var card = botao.closest(".card");
        var textoResumido = card.querySelector(".resumo-texto");
        var textoCompleto = card.querySelector(".completo-texto");

        if (textoResumido.style.display === "none" || textoResumido.style.display === "") {
          // Se o texto resumido está oculto, exibe e muda o texto do botão
          textoResumido.style.display = "block";
          textoCompleto.style.display = "none";
          botao.textContent = "Ver Mais";
        } else {
          // Se o texto resumido está visível, oculta e muda o texto do botão
          textoResumido.style.display = "none";
          textoCompleto.style.display = "block";
          botao.textContent = "Ver Menos";
        }
      });
    });
});
  
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}