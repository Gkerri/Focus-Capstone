// show content
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const contents = document.querySelectorAll('.content');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Hide all content
            contents.forEach(content => content.classList.remove('active'));

            // Show the clicked thumbnail's content
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});

// carousel
let currentIndex = {
    carousel1: 0, carousel2: 0, carousel3: 0
}

function showImage(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-item img');

    if (index >= images.length) {
        currentIndex[carouselId] = 0;
    } else if (index < 0) {
        currentIndex[carouselId] = images.length - 1;
    } else {
        currentIndex[carouselId] = index;
    }

    const offset = -currentIndex[carouselId] * 100;
    carousel.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage(carouselId) {
    showImage(carouselId, currentIndex[carouselId] + 1);
}

function prevImage(carouselId) {
    showImage(carouselId, currentIndex[carouselId] - 1);
}

// Initialize the carousel
showImage('carousel1', 0);
showImage('carousel2', 0);
showImage('carousel3', 0);
