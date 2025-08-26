// Search filter (client-side)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    const cols = document.querySelectorAll('.plant-col');
    cols.forEach(col => {
      const text = col.innerText.toLowerCase();
      col.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// Share API (mobile)
const shareBtn = document.getElementById('sharePage');
if (shareBtn) {
  shareBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const shareData = { title: document.title, text: 'Info Kebun Dasawisma', url: location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) { /* cancelled */ }
    } else {
      prompt('Salin URL ini untuk dibagikan:', location.href);
    }
  });
}

// Print QR action (placeholder)
const printQr = document.getElementById('printQr');
if (printQr) {
  printQr.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Untuk mencetak QR: generate QR dari URL halaman dan cetak minimal 4x4 cm. Mau saya bantu generate QR batch dari daftar tanaman?');
  });
}

// Accessibility: add class when user tabs
document.body.addEventListener('keyup', (e) => {
  if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
});
