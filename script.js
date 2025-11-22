
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


// ========== GENERATE 12 CARD ==========
function generateCards(slideTrackElement) {
    let html = "";
    for (let i = 1; i <= 12; i++) {

        const status = i <= 5
            ? "Sudah Diperiksa"
            : i === 6
                ? "Menunggu"
                : "Belum Dikumpulkan";

        const color =
            i <= 5 ? "bg-green-500"
                   : i === 6 ? "bg-yellow-500"
                             : "bg-red-500";

        html += `
        <div class="assignment-card" data-id="${i}">
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 h-full flex flex-col justify-between shadow-md hover:shadow-xl transition">
                
                <div class="mb-4">
                    <div class="text-sm font-semibold text-gray-500">Pertemuan</div>
                    <h2 class="text-2xl font-extrabold">#${i}</h2>
                </div>

                <div class="w-full h-32 bg-gray-300 rounded-md overflow-hidden mb-4">
                    <img src="https://placehold.co/400x150/f0f0f0/888?text=Tugas+P-${i}"
                         class="w-full h-full object-cover">
                </div>

                <div>
                    <span class="px-3 py-1 rounded-full text-xs text-white ${color}">
                        ${status}
                    </span>
                </div>

            </div>
        </div>`;
    }

    slideTrackElement.innerHTML = html;
}

// ========== SLIDER LOGIC ==========
const slideTrack = document.getElementById("slideTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtnMobile = document.getElementById("prevBtnMobile");
const nextBtnMobile = document.getElementById("nextBtnMobile");
const overlay = document.getElementById("overlay");

let cardsPerView = 3;
let totalCards = 12;
let currentIndex = 0;
let activeCard = null;

function getCardsPerView() {
    if (innerWidth <= 640) return 1;
    if (innerWidth <= 1023) return 2;
    return 3;
}

function updateSliderConfig() {
    cardsPerView = getCardsPerView();
    const maxIndex = totalCards - cardsPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateSlide();
    updateButtons();
}

function updateSlide() {
    const cardWidth = 100 / cardsPerView;
    slideTrack.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
}

function updateButtons() {
    const maxIndex = totalCards - cardsPerView;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;

    prevBtnMobile.disabled = currentIndex === 0;
    nextBtnMobile.disabled = currentIndex === maxIndex;
}

function slide(dir) {
    const maxIndex = totalCards - cardsPerView;

    currentIndex += dir;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    updateSlide();
    updateButtons();
}

// ========== ZOOM ==========
function handleCardClick(e) {
    const card = e.currentTarget;

    if (activeCard) {
        activeCard.classList.remove("zoom-active");
        overlay.style.display = "none";
        activeCard = null;
        return;
    }

    activeCard = card;
    card.classList.add("zoom-active");
    overlay.style.display = "block";

    overlay.onclick = () => {
        card.classList.remove("zoom-active");
        overlay.style.display = "none";
        activeCard = null;
    };
}

// ========== INIT ==========
function init() {
    generateCards(slideTrack);

    const cards = document.querySelectorAll(".assignment-card");
    cards.forEach(c => c.addEventListener("click", handleCardClick));

    prevBtn.onclick = () => slide(-1);
    nextBtn.onclick = () => slide(1);

    prevBtnMobile.onclick = () => slide(-1);
    nextBtnMobile.onclick = () => slide(1);

    updateSliderConfig();
    addEventListener("resize", updateSliderConfig);
}

window.onload = init;


 // ⚠️ PASTIKAN URL INI SUDAH BENAR
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyLnKtvwkGpDAMkjxj6NIePWUXmjNqqatlYlgcp5I5uRa3QTQ04e51XkD9Q4t5Nwp3WAQ/exec"; 
    
    const form = document.getElementById('contactForm'); 
    const responseDiv = document.getElementById('responseMessage');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
            const submitButton = form.querySelector('.submit-btn-new');
            submitButton.disabled = true;

            // Hapus class lama dan siapkan loading
            responseDiv.classList.remove('message-success', 'message-error');
            responseDiv.innerHTML = 'Sedang mengirim data... mohon tunggu.';
            
            // Terapkan style loading minimal (opsional, bisa diatur via CSS .message-loading)
            responseDiv.style.display = 'block';
            responseDiv.style.textAlign = 'center';
            responseDiv.style.marginLeft = 'auto'; 
            responseDiv.style.marginRight = 'auto'; 

            const formData = new FormData(form);
            
            try {
                const response = await fetch(WEB_APP_URL, {
                    method: 'POST',
                    body: formData 
                });
                
                if (!response.ok) {
                    throw new Error(`Gagal koneksi server: Status ${response.status}`);
                }
                
                const result = await response.json(); 

                // INI BAGIAN UTAMA YANG MEMASTIKAN TAMPILAN DI TENGAH
                if (result.result === 'success') {
                    // Pastikan pemusatan tetap ada saat sukses
                    responseDiv.style.textAlign = 'center';
                    
                    responseDiv.classList.add('message-success'); 
                    responseDiv.innerHTML = '✅ Sukses! Data berhasil disimpan.'; 
                    form.reset(); 
                } else {
                    responseDiv.style.textAlign = 'center';

                    responseDiv.classList.add('message-error');
                    responseDiv.innerHTML = '❌ Gagal mengirim data: ' + result.message;
                }

            } catch (error) {
                responseDiv.style.textAlign = 'center';

                responseDiv.classList.add('message-error');
                responseDiv.innerHTML = '❌ Kesalahan Koneksi: ' + error.message;
            } finally {
                submitButton.disabled = false;
            }
        });
    }