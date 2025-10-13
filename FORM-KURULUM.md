# 📧 İLETİŞİM FORMU KURULUM TALİMATLARI

## ✅ FORM AKTİF - FormSubmit ile Yapılandırıldı

İletişim formunuz **mjdbyrkkk@hotmail.com** adresine e-posta gönderecek şekilde ayarlandı.

---

## 🚀 İLK KULLANIM (ÖNEMLİ!)

### Adım 1: E-posta Doğrulama
1. Sitenizi yayına alın (hosting'e yükleyin)
2. Sitenizin formunu **bir kez** doldurup gönderin
3. **mjdbyrkkk@hotmail.com** adresinize bir doğrulama e-postası gelecek
4. E-postadaki **"Activate Form"** linkine tıklayın
5. ✅ Form aktif olacak!

**NOT:** İlk gönderimde form çalışmaz, doğrulama gereklidir.

---

## 📋 FORM ÖZELLİKLERİ

### Otomatik Özellikler:
- ✅ **E-posta Bildirim:** Her form gönderiminde mjdbyrkkk@hotmail.com'a e-posta gelir
- ✅ **Spam Koruması:** Honeypot (gizli alan) ile bot koruması
- ✅ **Tablo Formatı:** E-postalar düzenli tablo görünümünde
- ✅ **Özel Konu:** "Yeni İletişim Formu - www.mujdebayrak.com"
- ✅ **Yönlendirme:** Form gönderildikten sonra #iletisim bölümüne döner

### Form Alanları:
1. **İsim** (zorunlu)
2. **E-posta** (zorunlu, doğrulama var)
3. **Telefon** (zorunlu, 10-11 rakam)
4. **Sınıf** (zorunlu, seçmeli)
5. **Mesaj** (isteğe bağlı)

---

## 📧 E-POSTA ÖRNEĞİ

Gelen e-postalar şu formatta olacak:

```
Konu: Yeni İletişim Formu - www.mujdebayrak.com
Gönderen: FormSubmit <noreply@formsubmit.co>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 Yeni İletişim Formu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

İsim:     Ayşe Yılmaz
E-posta:  ayse@example.com
Telefon:  05551234567
Sınıf:    7. Sınıf
Mesaj:    Kızım için fen dersi almak istiyorum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gönderim Zamanı: 2024-12-01 14:30
```

---

## ⚙️ GELİŞMİŞ AYARLAR (Opsiyonel)

### Captcha Eklemek İsterseniz:
`index.html` dosyasında satır 607'yi değiştirin:
```html
<input type="hidden" name="_captcha" value="true">
```

### Başka E-posta Eklemek İsterseniz:
```html
<input type="hidden" name="_cc" value="diger@email.com">
```

### Teşekkür Sayfası Eklemek İsterseniz:
Satır 609'u değiştirin:
```html
<input type="hidden" name="_next" value="https://www.mujdebayrak.com/tesekkurler.html">
```

---

## 🧪 TEST ETME

### Yerel Test (Localhost):
❌ FormSubmit localhost'ta çalışmaz
✅ Mutlaka canlı domain'de test edin

### Canlı Test:
1. Sitenizi hosting'e yükleyin
2. www.mujdebayrak.com/index.html'i açın
3. Formu doldurun ve gönderin
4. İlk seferde doğrulama e-postası bekleyin
5. "Activate Form" linkine tıklayın
6. Tekrar test edin - artık çalışmalı!

---

## 🔧 SORUN GİDERME

### Form gönderilmiyor:
- ✅ Domain canlı mı? (localhost çalışmaz)
- ✅ Doğrulama e-postasını onayladınız mı?
- ✅ mjdbyrkkk@hotmail.com doğru yazılmış mı?

### E-posta gelmiyor:
- ✅ Spam klasörünü kontrol edin
- ✅ FormSubmit'ten doğrulama linkine tıkladınız mı?
- ✅ Hotmail engellememiş mi? (Ayarlar > Güvenlik)

### Validation hataları:
- ✅ Tüm zorunlu alanlar dolu mu?
- ✅ E-posta formatı doğru mu?
- ✅ Telefon 10-11 rakam mı?

---

## 📊 İSTATİSTİKLER

### FormSubmit Limitleri:
- **Ücretsiz Plan:** 50 form/ay
- **Pro Plan ($9/ay):** Sınırsız
- **Spam Koruması:** Otomatik

### Öneriler:
- Her hafta spam klasörünü kontrol edin
- Önemli başvurulara hızlı cevap verin
- Aylık form sayısını takip edin

---

## 🔒 GÜVENLİK

### Korunan Veriler:
- ✅ E-posta adresi (data-user/data-domain ile gizli)
- ✅ Honeypot spam koruması
- ✅ Client-side validation
- ✅ HTTPS zorunlu

### Korunmayan Veriler:
- ⚠️ Form verileri FormSubmit sunucularında saklanır
- ⚠️ Hassas bilgi (kredi kartı vb.) toplamayın

---

## 📞 DESTEK

### FormSubmit Dökümantasyon:
https://formsubmit.co

### Form Sorunları İçin:
1. Browser console'u kontrol edin (F12)
2. Network tab'inde form isteğini inceleyin
3. FormSubmit support'a yazın

---

## ✅ KONTROL LİSTESİ

Site yayına almadan önce:
- [ ] index.html yüklendi
- [ ] mjdbyrkkk@hotmail.com doğru
- [ ] Site HTTPS ile çalışıyor
- [ ] İlk form gönderildi
- [ ] Doğrulama e-postası onaylandı
- [ ] Test formu çalıştı
- [ ] Spam klasörü kontrol edildi

---

**Form hazır! Şimdi sitenizi yayınlayın ve ilk doğrulama adımını tamamlayın.** 🎉
