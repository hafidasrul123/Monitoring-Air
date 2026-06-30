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
