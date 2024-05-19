function showSlides() {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    setInterval(function() {
        slides.forEach(function(slide, index) {
            slide.classList.remove('active');
            slide.style.zIndex = 0;
        });

        slides[slideIndex].classList.add('active');
        slides[slideIndex].style.zIndex = 1;

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0; 
        }
    }, 3500); 
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
