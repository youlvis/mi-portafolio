function closeNav() {
    const menuToggle = document.getElementById('navbarSupportedContent')
        .className = "navbar-collapse collapse"
}

function effectSkills() {
    var skills = document.getElementById("skills");
    var distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanceSkills >= 300) {
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("htmlcss");
        skills[1].classList.add("javascript");
        skills[2].classList.add("typescript");
        skills[3].classList.add("java");
        skills[4].classList.add("angular");
        skills[5].classList.add("springboot");
        skills[6].classList.add("nodejs");
        skills[7].classList.add("comunicacion");
        skills[8].classList.add("trabajoEquipo");
        skills[9].classList.add("proactivo");
        skills[10].classList.add("creatividad");
        skills[11].classList.add("autodidacto");
    }
}

window.onscroll = function () {
    effectSkills();
}

function mostrarAlerta() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}