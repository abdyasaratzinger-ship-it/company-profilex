// Fungsi ini menjamin kode di dalamnya hanya berjalan setelah semua elemen HTML dimuat,
// sehingga mencegah error 'Cannot read properties of null'.
document.addEventListener('DOMContentLoaded', function() {
    
    // Periksa apakah library particlesJS sudah dimuat sebelum memanggilnya
    if (typeof particlesJS !== 'undefined') {
        
        // Panggil fungsi inisialisasi, menargetkan elemen <div id="particles-js">
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 30, // Jumlah partikel yang terlihat (dibuat lebih sedikit)
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff" // Warna bintang (Putih)
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                },
                "size": {
                    "value": 3, // Ukuran partikel
                    "random": true,
                },
                "line_linked": {
                    "enable": false // Tidak ada garis penghubung
                },
                "move": {
                    "enable": true,
                    "speed": 10, // Kecepatan (KUNCI: Cepat seperti meteor)
                    "direction": "bottom-left", // Arah jatuh
                    "random": false, 
                    "straight": true, // KUNCI: Gerakan lurus (streak/meteor)
                    "out_mode": "out"
                }
            },
            // Nonaktifkan interaksi mouse
            "interactivity": {
                "events": {
                    "onhover": { "enable": false },
                    "onclick": { "enable": false }
                }
            },
            "retina_detect": true
        });
        
    } // Penutup kurung kurawal if (typeof particlesJS...
    
}); // Penutup kurung kurawal dan kurung tutup untuk document.addEventListener

document.addEventListener('DOMContentLoaded', function() {
    // ... [Kode Validasi Form JS di sini, jika ada] ...
    
    // ======================================
    // LOGIKA HAMBURGER MENU
    // ======================================
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            // Mengaktifkan/menonaktifkan menu
            navLinks.classList.toggle('active');
            
            // Optional: Tambahkan animasi pada ikon Hamburger (seperti 'X')
            toggleButton.classList.toggle('is-open'); 
        });
    }
});
