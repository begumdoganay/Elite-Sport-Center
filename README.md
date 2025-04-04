Elite Sport Center - React Projesi
Bu proje, bir spor merkezi web sitesinin React ile yeniden yapılandırılmış versiyonudur. Orijinal HTML/CSS/JavaScript yapısını modern ve komponent tabanlı bir React mimarisine dönüştürülmüştür.
Proje Özellikleri

Komponent bazlı yapı
State yönetimi için React hooks
CSS modülleri ile stil yönetimi
Animasyonlar ve geçiş efektleri
Responsive tasarım
Form işlemleri
Modal bileşenleri
Dinamik içerik gösterimi

Kurulum
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:
bashCopy# Repoyu klonlayın
git clone <repo-url>

# Proje dizinine gidin
cd elite-sport-center

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.
Proje Yapısı
Copysrc/
├── assets/
│   └── images/       # Proje görselleri
├── components/       # React bileşenleri
│   ├── Blog/         # Blog bölümü bileşenleri
│   ├── Calculator/   # Hesaplayıcı bileşenleri
│   ├── Classes/      # Sınıflar bölümü bileşenleri
│   ├── Contact/      # İletişim bölümü bileşenleri
│   ├── Equipment/    # Ekipman bölümü bileşenleri
│   ├── FAQ/          # SSS bölümü bileşenleri
│   ├── Footer/       # Alt kısım bileşeni
│   ├── Header/       # Üst kısım bileşenleri
│   ├── Membership/   # Üyelik bölümü bileşenleri
│   ├── Modals/       # Modal pencere bileşenleri
│   ├── Nutrition/    # Beslenme bölümü bileşenleri
│   ├── SuccessStories/ # Başarı hikayeleri bileşenleri
│   ├── Testimonials/ # Müşteri yorumları bileşenleri
│   ├── Trainers/     # Eğitmenler bölümü bileşenleri
│   └── UI/           # Genel UI bileşenleri
├── App.js            # Ana uygulama bileşeni
└── index.js          # Uygulama giriş noktası
Kullanılan Teknolojiler

React.js
CSS3
React Hooks
React Intersection Observer
React CountUp
Font Awesome
Google Fonts

Komponet Yapısı
Her bölüm için en az 3 komponent kullanılarak modüler bir yapı oluşturulmuştur:

Header Bölümü:

Navbar
HeroSection
StatCards


Classes Bölümü:

ClassesHeader
ClassTabs
ClassInfo


Calculator Bölümü:

BMICalculator
CalorieCalculator
BodyFatCalculator
MacroCalculator


Trainers Bölümü:

TrainersHeader
TrainerList
TrainerCard


Equipment Bölümü:

EquipmentHeader
ProductList
ProductCard



Ve diğer bölümler...
Notlar

Orjinal websitesinin tüm işlevselliği korunmuştur
Sayfa yükleyici ve animasyonlar eklenmiştir
Formuler istekleri simüle edilmektedir
Responsive tasarıma uyumludur


© 2025 Elite Sport Center. Tüm hakları saklıdır.
