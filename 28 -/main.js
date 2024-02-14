document.addEventListener('DOMContentLoaded', function () {
    const carte = document.getElementById('card');

    carte.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        carte.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    carte.addEventListener('mouseenter', function(e) {
        carte.style.transition = 'none';
    });

    carte.addEventListener('mouseleave', function(e) {
        carte.style.transition = 'transform 0.5s';
        carte.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
