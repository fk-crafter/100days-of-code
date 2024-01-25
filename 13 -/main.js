function toggleMenu() {
    var menu = document.getElementById("hamburger-contents");
    menu.classList.toggle("show");
}

// Fermer le menu lorsque l'on clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('#hamburger-icon')) {
        var menu = document.getElementById("hamburger-contents");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
}

// Fermer le menu avec la touche Échap
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        var menu = document.getElementById("hamburger-contents");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
};
