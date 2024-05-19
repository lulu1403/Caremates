function showSlides() {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    setInterval(function() {
        // Sembunyikan semua slide
        slides.forEach(function(slide) {
            slide.style.display = 'none';
        });

        // Tampilkan slide berikutnya
        slides[slideIndex].style.display = 'block';

        // Perbarui indeks slide untuk slide berikutnya
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0; 
        }
    }, 3500); 
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
