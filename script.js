// 1. TEMA DEĞİŞTİRME (DARK / LIGHT MODE)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    // Body elementine 'light-mode' sınıfını ekle / çıkar yapıyoruz
    document.body.classList.toggle('light-mode');
    
    // Butonun ikonunu duruma göre değiştiriyoruz
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '☀️'; // Aydınlık moddayken güneş ikonu
    } else {
        themeToggleBtn.textContent = '🌙'; // Karanlık moddayken ay ikonu
    }
});


// 2. GERI SAYIM SAYACI (setInterval kullanarak)
// Stajın bitiş tarihini buraya tanımlıyoruz (Örn: 15 Ağustos 2026 saat 18:00)
const targetDate = new Date('August 15, 2026 18:00:00').getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Zaman hesaplamaları (Milisaniyeyi gün, saat, dakika ve saniyeye çevirme)
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');

    // Eğer hedef tarih geçildiyse sayacı durdur ve mesaj göster
    if (difference < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Tebrikler! Staj Tamamlandı. 🎉";
        return;
    }

    // Başına 0 ekleme fonksiyonu (örneğin 9 saniye yerine 09 görünmesi için)
    const formatNumber = (num) => String(num).padStart(2, '0');

    // Ekrana yazdırma formatı
    countdownElement.textContent = `${days}g ${formatNumber(hours)}s ${formatNumber(minutes)}dk ${formatNumber(seconds)}sn`;
    
}, 1000); // Her 1 saniyede bir çalıştır