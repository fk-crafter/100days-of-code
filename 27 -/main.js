window.addEventListener('scroll', function() {
    const image = document.getElementById('zoomImage');
    const scrollY = window.scrollY || window.pageYOffset;

    const scale = Math.max(1, 1 + scrollY / 2000);

    image.style.transform = `scale(${scale})`;
});
