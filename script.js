function closeNav() {
    const menuToggle = document.getElementById('navbarSupportedContent')
        .className = "navbar-collapse collapse"
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("typescript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("angular");
        habilidades[5].classList.add("springboot");
        habilidades[6].classList.add("nodejs");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoEquipo");
        habilidades[9].classList.add("proactivo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("autodidacto");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
} 