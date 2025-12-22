// 1. Database Karakter)

const databaseNinjas = [

    // --- SHINOBI ---
    { nama: "Naruto Uzumaki", img: "img/naruto.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Sasuke Uchiha", img: "img/sasuke.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Sakura Haruno", img: "img/sakura.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Kakashi Hatake", img: "img/kakashi.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Hinata Hyuga", img: "img/hinata.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Shikamaru Nara", img: "img/shikamaru.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Ino Yamanaka", img: "img/ino.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Temari", img: "img/temari.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Gaara", img: "img/gaara.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Rock Lee", img: "img/rocklee.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Tsunade Senju", img: "img/tsunade.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Jiraiya", img: "img/jiraiya.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Neji Hyuga", img: "img/neji.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Tenten", img: "img/tenten.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Might Guy", img: "img/mightguy.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Yamato", img: "img/yamato.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Sai", img: "img/sai.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Killer Bee", img: "img/killerbee.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Minato Namikaze", img: "img/minato.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Kushina Uzumaki", img: "img/kushina.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Hashirama Senju", img: "img/hashirama.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Tobirama Senju", img: "img/tobirama.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Hiruzen Sarutobi", img: "img/hiruzen.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Shisui Uchiha", img: "img/shisui.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Kurenai Yuhi", img: "img/kurenai.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Asuma Sarutobi", img: "img/asuma.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Anko Mitarashi", img: "img/anko.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Shizune", img: "img/shizune.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Mei Terumi", img: "img/meiterumi.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Kurotsuchi", img: "img/kurotsuchi.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Mito Uzumaki", img: "img/mito.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Chouji Akimichi", img: "img/chouji.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Kiba Inuzuka", img: "img/kiba.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Shino Aburame", img: "img/shino.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Iruka Umino", img: "img/iruka.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Konohamaru", img: "img/konohamaru.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Hanabi Hyuga", img: "img/hanabi.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Chiyo", img: "img/chiyo.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Yugito Nii", img: "img/yugito.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Roushi", img: "img/roushi.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Han", img: "img/han.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Utakata", img: "img/utakata.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Fu", img: "img/fu.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Genma Shiranui", img: "img/genma.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Rin Nohara", img: "img/rin.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Yahiko", img: "img/yahiko.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Darui", img: "img/darui.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Karui", img: "img/karui.jpg", status: "Shinobi", gender: "Cewek" },
    { nama: "Chojuro", img: "img/chojuro.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Ao", img: "img/ao.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Indra Otsutsuki", img: "img/indra.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Hagoromo Otsutsuki", img: "img/hagoromo.jpg", status: "Shinobi", gender: "Cowok" },
    { nama: "Hamura Otsutsuki", img: "img/hamura.jpg", status: "Shinobi", gender: "Cowok" },

    // --- VILLAINS ---
    { nama: "nagato", img: "img/nagato.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Itachi Uchiha", img: "img/itachi.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Pain", img: "img/pain.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Konan", img: "img/konan.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Madara Uchiha", img: "img/madara.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Obito Uchiha", img: "img/obito.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Orochimaru", img: "img/orochimaru.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kisame Hoshigaki", img: "img/kisame.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Deidara", img: "img/deidara.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Sasori", img: "img/sasori.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Hidan", img: "img/hidan.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kakuzu", img: "img/kakuzu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Zetsu", img: "img/zetsu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kabuto Yakushi", img: "img/kabuto.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kaguya Otsutsuki", img: "img/kaguya.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Danzou Shimura", img: "img/danzou.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Suigetsu Hozuki", img: "img/suigetsu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Karin Uzumaki", img: "img/karin.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Jugo", img: "img/jugo.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kimimaro", img: "img/kimimaro.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Tayuya", img: "img/tayuya.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Sakon Ukon", img: "img/sakon.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Jirobo", img: "img/jirobo.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kidomaru", img: "img/kidomaru.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Guren", img: "img/guren.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Pakura", img: "img/pakura.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Ameyuri Ringo", img: "img/ameyuri.jpg", status: "Villains", gender: "Cewek" },
    { nama: "Hanzo", img: "img/hanzo.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Ginkaku", img: "img/ginkaku.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kinkaku", img: "img/kinkaku.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Zabuza Momochi", img: "img/zabuza.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Haku", img: "img/haku.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Ashura Otsutsuki", img: "img/ashura.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Rasa (Kazekage 4)", img: "img/rasa.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Muu (Tsuchikage 2)", img: "img/muu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Gengetsu (Mizukage 2)", img: "img/gengetsu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "A (Raikage 3)", img: "img/raikage3.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Dosu Kinuta", img: "img/dosu.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Zaku Abumi", img: "img/zaku.jpg", status: "Villains", gender: "Cowok" },
    { nama: "Kin Tsuchi", img: "img/kin.jpg", status: "Villains", gender: "Cewek" }
];



// 1. VARIABELnya
let daftarAktif = []; 
let historyPilihan = []; 
let indexKiri, indexKanan;
let totalKlik = 0;
let targetKlik = 50; 
let musik;


// 2. muterin datanya
window.addEventListener('DOMContentLoaded', () => {
    musik = document.getElementById('bgm-naruto');
    
    // buat musik
    const savedTime = localStorage.getItem('musicCurrentTime');
    const isMuted = localStorage.getItem('musicMuted') === 'true';

    if (savedTime && musik) {
        musik.currentTime = parseFloat(savedTime);
    }

    if (isMuted) {
        const icon = document.getElementById('music-icon');
        if (icon) icon.innerText = "🔇";
    }
});

// Musik otomatis
setInterval(() => {
    if (musik && !musik.paused) {
        localStorage.setItem('musicCurrentTime', musik.currentTime);
    }
}, 1000);


// 3.COrenya
function mulaiSortir() {
    // setel musiknya biar gk boring
    if (musik) {
        const isMuted = localStorage.getItem('musicMuted') === 'true';
        if (!isMuted) {
            musik.play().catch(e => console.log("Musik menunggu interaksi user"));
        }
    }

    // ngamnil si filternya bjir
    const statusSelect = document.getElementById('filter-type');
    const genderChecked = document.querySelector('input[name="gender"]:checked');

    if (!statusSelect || !genderChecked) {
        console.error("Elemen HTML filter tidak ditemukan!");
        return;
    }

    const statusPilihan = statusSelect.value;
    const genderPilihan = genderChecked.value;

    // filter pilihan dbnya
    daftarAktif = databaseNinjas.filter(ninja => {
        const matchStatus = (statusPilihan === "all" || ninja.status === statusPilihan);
        const matchGender = (genderPilihan === "all" || ninja.gender === genderPilihan);
        return matchStatus && matchGender;
    });

    // kouta minimal
    if (daftarAktif.length < 2) {
        alert("Ninja tidak cukup untuk diadu (Minimal 2)!");
        return;
    }

    // Reset skornya
    totalKlik = 0;
    historyPilihan = [];
    daftarAktif.forEach(n => n.score = 0);
    updateProgress();

    document.getElementById('page-landing').style.display = 'none';
    document.getElementById('page-battle').style.display = 'block';
    acakPertarungan();
}

function acakPertarungan() {
    indexKiri = Math.floor(Math.random() * daftarAktif.length);
    indexKanan = Math.floor(Math.random() * daftarAktif.length);

    while (indexKiri === indexKanan) {
        indexKanan = Math.floor(Math.random() * daftarAktif.length);
    }
    updateTampilanKartu();
}

function pilih(posisi) {
    historyPilihan.push({
        indeksKiri: indexKiri,
        indeksKanan: indexKanan,
        pemenang: posisi
    });
    if (posisi === 'kiri') {
        daftarAktif[indexKiri].score += 1;
    } else if (posisi === 'kanan') {
        daftarAktif[indexKanan].score += 1;
    }
    totalKlik++;
    updateProgress();

    const currentPersen = Math.floor((totalKlik / targetKlik) * 100);
    if (currentPersen >= 100) {
        tampilkanHasil();
    } else {
        acakPertarungan();
    }
}

function undoPilihan() {
    if (historyPilihan.length === 0) {
        alert("Belum ada pilihan yang bisa dibatalkan!");
        return;
    }
    const lastAction = historyPilihan.pop();

    if (lastAction.pemenang === 'kiri') {
        daftarAktif[lastAction.indeksKiri].score -= 1;
    } else if (lastAction.pemenang === 'kanan') {
        daftarAktif[lastAction.indeksKanan].score -= 1;
    }

    totalKlik--;
    updateProgress();

    indexKiri = lastAction.indeksKiri;
    indexKanan = lastAction.indeksKanan;
    updateTampilanKartu();
}

function updateProgress() {
    let persen = Math.floor((totalKlik / targetKlik) * 100);
    
    if (persen > 100) persen = 100;
    if (persen < 0) persen = 0;
    
    document.getElementById('progress-fill').style.width = persen + "%";
    document.getElementById('progress-text').innerText = persen + "%";
}

function updateTampilanKartu() {
    const ninjaKiri = daftarAktif[indexKiri];
    const ninjaKanan = daftarAktif[indexKanan];

    document.getElementById('nama-kiri').innerText = ninjaKiri.nama;
    document.getElementById('img-kiri').src = ninjaKiri.img;
    document.getElementById('nama-kanan').innerText = ninjaKanan.nama;
    document.getElementById('img-kanan').src = ninjaKanan.img;

    const labelKiri = document.getElementById('label-kiri');
    const labelKanan = document.getElementById('label-kanan');

    labelKiri.innerText = ninjaKiri.status;
    labelKanan.innerText = ninjaKanan.status;

    labelKiri.style.backgroundColor = (ninjaKiri.status === "Shinobi") ? "#ff6700" : "#333";
    labelKanan.style.backgroundColor = (ninjaKanan.status === "Shinobi") ? "#ff6700" : "#333";
}

function tampilkanHasil() {
    document.getElementById('page-battle').style.display = 'none';
    document.getElementById('page-result').style.display = 'block';

    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = "";
   
    const hasilFinal = [...daftarAktif].sort((a, b) => b.score - a.score);

    hasilFinal.slice(0, 10).forEach((ninja, index) => {
        rankingList.innerHTML += `
            <div class="rank-item">
                <div class="rank-number">${index + 1}</div>
                <img src="${ninja.img}" class="rank-img">
                <div class="rank-info">
                    <div class="rank-name">${ninja.nama}</div>
                    <div class="rank-status">${ninja.status}</div>
                    <div class="rank-active">SCORE: ${ninja.score} | ACTIVE</div>
                </div>
            </div>
        `;
    });
}

function toggleMusic() {
    const btn = document.getElementById('music-toggle');
    const icon = document.getElementById('music-icon');

    if (musik.paused) {
        musik.play();
        icon.innerText = "🔊";
        btn.classList.remove('muted');
        localStorage.setItem('musicMuted', 'false');
    } else {
        musik.pause();
        icon.innerText = "🔇";
        btn.classList.add('muted');
        localStorage.setItem('musicMuted', 'true');
    }
}