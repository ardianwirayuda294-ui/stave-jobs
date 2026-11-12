// ===== NAVIGASI HALAMAN =====
const navBtns = document.querySelectorAll('.nav-btn[data-page]');
const pages = document.querySelectorAll('.page');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Sembunyikan semua halaman
    pages.forEach(p => p.classList.remove('active'));
    // Tampilkan halaman yang diklik
    document.getElementById(btn.dataset.page).classList.add('active');
    // Update tombol aktif
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== INTERAKTIF: ROTATOR KUTIPAN =====
const quotes = [
  "Stay hungry, stay foolish.",
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Simplicity is the ultimate sophistication.",
  "Your time is limited, don't waste it living someone else's life."
];

let currentQuote = 0;
const quoteBox = document.getElementById('quote-box');
const nextBtn = document.getElementById('next-quote');

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteBox.style.opacity = 0;
    setTimeout(() => {
      quoteBox.textContent = '"' + quotes[currentQuote] + '"';
      quoteBox.style.opacity = 1;
    }, 200);
  });
}   
