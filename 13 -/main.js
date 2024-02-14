function toggleMenu() {
    const menu = document.getElementById("hamburger-contents");
    menu.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#hamburger-icon')) {
        const menu = document.getElementById("hamburger-contents");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        const menu = document.getElementById("hamburger-contents");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
};