<?php
// Formun POST yöntemiyle gönderilip gönderilmediğini kontrol ediyoruz
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Gelen verileri alıp, güvenlik için temizliyoruz
    $ad = htmlspecialchars(trim($_POST['ad']));
    $soyad = htmlspecialchars(trim($_POST['soyad']));
    $mesaj = htmlspecialchars(trim($_POST['mesaj']));
    $tarih = date('Y-m-d H:i:s');

    // Eğer alanlar boş değilse kaydetme işlemine geçiyoruz
    if (!empty($ad) && !empty($soyad) && !empty($mesaj)) {
        
        // Yazdırılacak formatı belirliyoruz
        $veri = "Tarih: " . $tarih . "\n";
        $veri .= "Gönderen: " . $ad . " " . $soyad . "\n";
        $veri .= "Mesaj: " . $mesaj . "\n";
        $veri .= "----------------------------------------\n";

        // "mesajlar.txt" dosyasını "append" (ekleme) modunda açıyoruz
        $dosya = fopen("mesajlar.txt", "a");
        
        if ($dosya) {
            // Veriyi dosyaya yazıyoruz
            fwrite($dosya, $veri);
            fclose($dosya);
            
            // HATA ÇÖZÜMÜ: HTML çıktısı verirken yönlendirmeyi HTML Meta etiketi ile yapıyoruz
            echo "<!DOCTYPE html>
            <html>
            <head>
                <meta charset='UTF-8'>
                <meta http-equiv='refresh' content='3;url=index.html'>
                <title>Mesaj Kaydedildi</title>
            </head>
            <body style='font-family: sans-serif; background-color: #0f172a; color: #ffffff; text-align: center; margin-top: 100px;'>
                <div style='display: inline-block; padding: 30px; border-radius: 12px; background-color: #1e293b; border: 1px solid #334155; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>
                    <h2 style='color: #22c55e; margin-bottom: 10px;'>Mesajınız başarıyla kaydedildi! 🎉</h2>
                    <p style='color: #94a3b8;'>Yönlendiriliyorsunuz, lütfen bekleyin...</p>
                </div>
            </body>
            </html>";
            exit();
        } else {
            echo "Dosya açılırken bir hata oluştu.";
        }
    } else {
        echo "Lütfen tüm alanları doldurun.";
    }
} else {
    // Doğrudan PHP dosyasına erişilmeye çalışılırsa ana sayfaya yönlendiriyoruz
    header("Location: index.html");
    exit();
}
?>