function showSlides() {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    setInterval(function() {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        slides[slideIndex].classList.add('active');

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0; 
        }
    }, 3500); 
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
