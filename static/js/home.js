document.getElementById("verMais").style.display = "none";
document.getElementById("verMenos").style.display = "none";

function mudaHabilidadeAcrobata() {
    
    document.getElementById("titulo-habilidade").innerHTML = "Acrobata Urbano";
    document.getElementById("resumo-habilidade").innerHTML = "Habilidade exclusiva voltada para mobilidade e destreza. Suas capacidades incluem a criação de hologramas de distração, implantes cibernéticos que permitem saltos acrobáticos, garras magnéticas para escalada e deslizadores urbanos nas solas dos sapatos. ";
    document.getElementById("verMais").style.display = "block";
    document.getElementById("verMenos").style.display = "none";

}
function verMaisAcrobata() {  

    document.getElementById("verMais1").innerHTML = "Holograma de Distração: O Acrobata Urbano pode criar hologramas realistas de si mesmo, confundindo os inimigos e desviando a atenção."
    document.getElementById("verMais2").innerHTML = "Implantes cibernéticos nas pernas: Permitem saltos extraordinários e movimentos acrobáticos. Essa habilidade pode ser útil para alcançar áreas elevadas, escapar rapidamente de confrontos ou até mesmo realizar ataques aéreos."
    document.getElementById("verMais3").innerHTML = "Garras Magnéticas: Implantes nas mãos que permitem aderir a superfícies metálicas, possibilitando escaladas verticais rápidas ou a capacidade de se pendurar em tetos."
    document.getElementById("verMais4").innerHTML = "Deslizadores Urbanos: Pequenos propulsores nas solas dos sapatos que permitem ao personagem deslizar suavemente por superfícies urbanas, incluindo paredes e telhados."
    
}
function verMenos() {
    document.getElementById("verMais1").innerHTML = ""
    document.getElementById("verMais2").innerHTML = ""
    document.getElementById("verMais3").innerHTML = ""
    document.getElementById("verMais4").innerHTML = ""
    document.getElementById("verMais").style.display = "block";
    document.getElementById("verMenos").style.display = "none";
}
