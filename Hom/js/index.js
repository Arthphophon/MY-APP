document.querySelector('.get-started-button').addEventListener('click', () => {
    alert('Get Started button was clicked!');
    // Add code for other functions here
});

// This selects the button using its class name, which matches your HTML
document.querySelector('.get-started-button').addEventListener('click', () => {
    // This line redirects the user to the specified page
    window.location.href = 'Landing.html'; 
});
// ---------- Bottom Navigation Hide/Show on Scroll ----------
let lastScrollY = window.scrollY;
const bottomNav = document.querySelector('.bottom-nav');
let scrollTimeout;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // เลื่อนลง → ซ่อน
    bottomNav.classList.add('hide');
  } else {
    // เลื่อนขึ้น → แสดง
    bottomNav.classList.remove('hide');
  }

  lastScrollY = window.scrollY;

  // หลังจากหยุดเลื่อน 200ms → แสดง
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    bottomNav.classList.remove('hide');
  }, 200);
});

// ---------- Scan QR Button Click ----------
const scanQRBtn = document.querySelector('.primary-btn');

if (scanQRBtn) {
  scanQRBtn.addEventListener('click', () => {
    alert('Scan QR button clicked!');
    // ตัวอย่าง redirect ไปหน้าถัดไป
    window.location.href = 'ScanQR.html';
  });
}
