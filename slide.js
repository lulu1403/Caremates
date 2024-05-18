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
            slideIndex = 0; // Kembali ke slide pertama setelah mencapai akhir
        }
    }, 3500); // Ganti slide setiap 5 detik (5000 milidetik)
}

document.addEventListener('DOMContentLoaded', function() {
    // Kode di dalam callback ini akan dijalankan saat DOMContentLoaded terjadi

    // Panggil fungsi showSlides() atau kode JavaScript lainnya di sini
    showSlides();
});
