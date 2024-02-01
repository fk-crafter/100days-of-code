const container = document.querySelector(".particles-container");

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});
