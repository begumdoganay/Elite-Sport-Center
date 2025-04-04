# 🏋️‍♂️ Elite Sport Center - React Projesi

Bu proje, **Elite Sport Center** adlı spor merkezi web sitesinin **React.js** kullanılarak yeniden geliştirilmiş versiyonudur. Modern yapısı, modülerliği ve responsive tasarımıyla kullanıcı dostu bir deneyim sunmayı amaçlamaktadır.

---

## 📚 İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Kurulum](#kurulum)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Komponentler](#komponentler)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

---

## 🚀 Proje Hakkında

Bu proje, geleneksel HTML/CSS/JavaScript ile hazırlanmış olan **Elite Sport Center** web sitesinin, modern web geliştirme standartlarına uygun olarak **React.js** ile yeniden yazılmış versiyonudur.

- Her sayfa en az 3 adet React komponenti içerir.
- Responsive (mobil uyumlu) tasarım korunmuştur.
- CSS Modules ile stiller komponent bazlı ayrıştırılmıştır.
- Sayfa geçişleri, animasyonlar ve tüm işlevsellikler korunmuştur.

---

## ⚙️ Kurulum

Projeyi yerel geliştirme ortamınızda çalıştırmak için şu adımları takip edebilirsiniz:

```bash
# Proje deposunu klonlayın
git clone https://github.com/kullaniciadi/elite-sport-center.git

# Proje klasörüne girin
cd elite-sport-center

# Gerekli bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
Uygulama, tarayıcınızda http://localhost:3000 adresinde çalışacaktır.

🛠️ Kullanılan Teknolojiler
Teknoloji	Açıklama
React.js	UI geliştirme kütüphanesi
React Router	Sayfa geçişleri için yönlendirme sistemi
React Hooks	Fonksiyonel komponentlerde state ve lifecycle yönetimi
CSS Modules	Komponent bazlı stiller
Font Awesome	İkon kütüphanesi
React Intersection Observer	Scroll animasyonları için
React CountUp	Sayısal animasyon efektleri için
📁 Proje Yapısı
bash
Copy
Edit
##
elite-sport-center/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Blog/
│   │   ├── Calculator/
│   │   ├── Classes/
│   │   ├── Contact/
│   │   ├── Equipment/
│   │   ├── FAQ/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Membership/
│   │   ├── Modals/
│   │   ├── Nutrition/
│   │   ├── SuccessStories/
│   │   ├── Testimonials/
│   │   ├── Trainers/
│   │   └── UI/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore


##

🧩 Komponentler
🔹 Header
Navbar: Gezinme menüsü

HeroSection: Giriş bölümü ve slider

StatCards: Sayısal istatistikler

🔹 Classes
ClassesHeader: Başlık bölümü

ClassTabs: Sınıf sekmeleri

ClassInfo: Sınıf detayları

🔹 Calculator
BMICalculator: Vücut kitle indeksi hesaplayıcı

CalorieCalculator: Kalori hesaplayıcı

BodyFatCalculator: Yağ oranı hesaplayıcı

MacroCalculator: Makro besin hesaplayıcı

🔹 Trainers
TrainersHeader: Başlık

TrainerList: Eğitmen listesi

TrainerCard: Eğitmen kartı

🔹 Equipment
EquipmentHeader: Başlık

ProductList: Ürün listesi

ProductCard: Ürün kartı

🔹 Testimonials
TestimonialsHeader: Müşteri görüşleri başlığı

TestimonialSlider: Slider bileşeni

TestimonialCard: Müşteri kartı

🔹 Contact
ContactHeader: İletişim başlığı

ContactForm: Form bileşeni

ContactInfo: İletişim bilgileri

Map: Google Maps entegrasyonu

🔹 Membership
MembershipHeader: Başlık

PlansList: Üyelik planları listesi

PlanCard: Üyelik kartı

🔹 Blog
BlogHeader: Blog başlığı

BlogList: Blog yazıları

BlogCard: Blog içeriği kartı

🔹 Success Stories
SuccessStoriesHeader: Başarı hikayeleri başlığı

StoriesList: Hikaye listesi

StoryCard: Bireysel hikaye kartı

🔹 Nutrition
NutritionHeader: Beslenme başlığı

NutritionTabs: Sekmeli yapı

NutritionProgram: Program içeriği

NutritionTestimonial: Müşteri yorumu

🔹 FAQ
FAQHeader: Sıkça sorulan sorular başlığı

FAQList: Soru listesi

FAQItem: Tekil soru bileşeni

🔹 Modals
ReservationModal: Sınıf rezervasyonu

MembershipModal: Üyelik kayıt

CartModal: Sepet

🔹 UI
Loader: Yükleniyor animasyonu

Notification: Bildirimler

BackToTop: Yukarı çık butonu

ThemeSwitcher: Tema değiştirici (dark/light)

## 🤝 Katkıda Bulunma
Bu projeye katkıda bulunmak için aşağıdaki adımları izleyebilirsiniz:

Bu repoyu forklayın

Yeni bir özellik dalı oluşturun:

bash
Copy
Edit
git checkout -b feature/YeniOzellik
Değişikliklerinizi commit edin:

bash
Copy
Edit
git commit -m "Yeni özellik: Açıklama"
Değişikliklerinizi gönderin:

bash
Copy
Edit
git push origin feature/YeniOzellik
