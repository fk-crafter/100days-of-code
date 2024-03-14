let currentSlide = 0;
const slides = [];

async function fetchImages() {
    const apiUrl = 'API_KEY';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.forEach(item => {
            if (item.media_type === "image") {
                slides.push({ imageUrl: item.url, explanation: item.explanation });
            }
        });
        initCarousel();
    } catch (error) {
        console.error("Error retrieving data : ", error);
    }
}

function initCarousel() {
    const imagesContainer = document.getElementById('carouselImages');
    const infoContainer = document.getElementById('carouselInfo');

    slides.forEach((slide, index) => {
        const img = document.createElement('img');
        img.src = slide.imageUrl;
        img.style.opacity = index === 0 ? "1" : "0";
        imagesContainer.appendChild(img);
    });

    if (slides.length > 0) {
        infoContainer.textContent = slides[0].explanation;
    }

    setInterval(() => {
        changeSlide(1);
    }, 10000);
}

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentSlide = (currentSlide + direction + images.length) % images.length;
    
    images.forEach((img, index) => {
        img.style.opacity = index === currentSlide ? "1" : "0";
    });

    const infoContainer = document.getElementById('carouselInfo');
    infoContainer.textContent = slides[currentSlide].explanation;
}

function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        changeSlide(1);
    } else if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchImages();
    window.addEventListener("keydown", handleKeyPress);
});
