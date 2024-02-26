let index = 0;
let startX;
const carrouselContainer = document.querySelector('.carrousel');

function changeImage(n) {
    const images = document.querySelectorAll('.carrousel-images img');
    const totalImages = images.length;
    index += n;

    if (index >= totalImages) {
        index = 0;
    } else if (index < 0) {
        index = totalImages - 1;
    }

    const offset = -index * 100;
    document.querySelector('.carrousel-images').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "ArrowLeft") {
        changeImage(-1);
    }
});

function startAction(e) {
    startX = e.clientX || e.pageX;
    e.preventDefault();
}

function endAction(e) {
    const endX = e.clientX || e.pageX;
    handleSwipe(endX - startX);
}

function handleSwipe(deltaX) {
    if (deltaX < -30) {
        changeImage(1);
    } else if (deltaX > 30) {
        changeImage(-1);
    }
}

carrouselContainer.addEventListener('mousedown', startAction);
carrouselContainer.addEventListener('mouseup', endAction);

carrouselContainer.addEventListener('touchstart', (e) => startAction(e.touches[0]), {passive: true});
carrouselContainer.addEventListener('touchend', (e) => endAction(e.changedTouches[0]), {passive: true});
