// Mengambil elemen dari HTML
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionPage = document.getElementById('question-page');
const successPage = document.getElementById('success-page');

// Fungsi untuk membuat tombol "No" lari saat disentuh kursor
noBtn.addEventListener('mouseover', () => {
    // Mengubah posisi tombol menjadi absolute agar bisa bergerak bebas
    noBtn.style.position = 'absolute';
    
    // Menghitung batas layar agar tombol tidak keluar dari layar
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Menghasilkan posisi X dan Y secara acak
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Mengaplikasikan posisi baru ke tombol
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Fungsi saat tombol "Yes" diklik
yesBtn.addEventListener('click', () => {
    // Menyembunyikan halaman pertanyaan
    questionPage.classList.add('hidden');
    // Menampilkan halaman sukses
    successPage.classList.remove('hidden');
});