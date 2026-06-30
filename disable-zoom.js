// ==========================================
// 1. BLOKIR ZOOM DI DESKTOP / LAPTOP (Ctrl + Key / Ctrl + Scroll)
// ==========================================

// Mencegah zoom menggunakan Ctrl + Scroll Wheel (atau cubit touchpad)
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Mencegah zoom menggunakan tombol keyboard (Ctrl + '+', Ctrl + '-', Ctrl + '0')
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (
    e.key === '+' || 
    e.key === '-' || 
    e.key === '=' || 
    e.code === 'Minus' || 
    e.code === 'Equal' || 
    e.keyCode === 187 || 
    e.keyCode === 189 || 
    e.keyCode === 107 || 
    e.keyCode === 109 || 
    e.keyCode === 48 || 
    e.key === '0'
  )) {
    e.preventDefault();
  }
});


// ==========================================
// 2. BLOKIR ZOOM DI HANDPHONE / MOBILE (Pinch / Double-Tap)
// ==========================================

// Mencegah pinch-to-zoom (dua jari atau lebih)
document.addEventListener('touchstart', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

// Mencegah double-tap zoom (ketuk dua kali dengan cepat)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// Mencegah zoom gestur bawaan Safari / iOS
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
  e.preventDefault();
});
