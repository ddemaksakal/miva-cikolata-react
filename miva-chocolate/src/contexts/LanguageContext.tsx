import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Tip Tanımlamaları
// Translations objesinin yapısını tanımlar.
type Language = 'TR' | 'EN';
type Translations = {
  [key in Language]: {
    [key: string]: string; // Tüm çeviri anahtarları string olmalı
  };
};

// Context Hook'unun döndüreceği yapıyı tanımlar.
interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)['TR']) => string; // `t` fonksiyonunu tiplendirdik.
}

// Tüm çevirilerinizi koruduk
const translations: Translations = {
  TR: {
    // Navigation
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    products: 'Ürünler',
    certificates: 'Sertifikalar',
    contact: 'İletişim',
    
    // Home Page
    heroTitle: 'Premium <span>Çikolata</span> Tutkuyla Üretildi',
    heroText: 'Miva Chocolate\'ın olağanüstü tadını keşfedin, burada gelenek yeniliğe buluşuyor ve işletmeler ile tüketiciler için unutulmaz çikolata deneyimleri yaratılıyor.',
    exploreProducts: 'Ürünlerimizi Keşfedin',
    ourChocolateRange: 'Çikolata Yelpazemiz',
    chocolateRangeText: 'Kapari çikolatalardan özel ürünlere kadar, tüm ihtiyaçlarınız için kapsamlı bir premium çikolata seçimi sunuyoruz.',
    tabletChocolate: 'Tablet Çikolata',
    tabletChocolateDesc: 'Çeşitli aromalarda ve kakao yüzdelerinde premium kaliteli çikolata tabletleri.',
    chocolateChips: 'Çikolata Parçacıkları',
    chocolateChipsDesc: 'Pişirme için mükemmel, çikolata parçacıkları şekillerini ve aromalarını korur.',
    couvertureChocolate: 'Kapari Çikolata',
    couvertureChocolateDesc: 'Mükemmel temperleme için yüksek kakao yağı içeriğine sahip profesyonel kalite çikolata.',
    viewDetails: 'Detayları Görüntüle',
    ourChocolateStory: 'Çikolata Hikayemiz',
    chocolateStoryText1: '2003 yılında kurulan Miva Chocolate, işletmeleri ve tüketicileri memnun eden olağanüstü çikolata ürünleri üretmeye adanmıştır. Kaliteye, sürdürülebilirliğe ve yeniliğe olan bağlılığımız, bizi çikolata endüstrisinde güvenilir bir ortak haline getirmiştir.',
    chocolateStoryText2: 'Geleneksel çikolata yapım tekniklerini modern teknolojiyle birleştirerek, ürettiğimiz her üründe tutarlı kalite ve olağanüstü tat sunuyoruz.',
    learnMore: 'Hakkımızda Daha Fazla Bilgi Edinin',
    
    // About Page
    ourStory: 'Hikayemiz',
    ourStoryText: 'Miva Chocolate, 2003 yılında çikolata tutkunları tarafından kuruldu. O zamandan beri, işletmeler ve tüketiciler için olağanüstü çikolata deneyimleri yaratmaya odaklandık.',
    ourMission: 'Misyonumuz',
    ourMissionText: 'Kaliteli, sürdürülebilir ve yenilikçi çikolata ürünleriyle çikolata dünyasına değer katmak.',
    ourVision: 'Vizyonumuz',
    ourVisionText: 'Dünya çapında tanınan, güvenilir ve kaliteli çikolata markası olmak.',
    quality: 'Kalite',
    qualityText: 'Kaliteden asla ödün vermiyoruz. Her ürün, katı standartlarımızı karşıladığından emin olmak için titizlikle test edilir.',
    innovation: 'Yenilik',
    innovationText: 'Yeni ve heyecan verici çikolata deneyimleri yaratmak için araştırma ve geliştirmeye sürekli yatırım yapıyoruz.',
    sustainability: 'Sürdürülebilirlik',
    sustainabilityText: 'Çevremizi koruyan ve kakao çiftçiliği topluluklarını destekleyen sürdürülebilir uygulamalara bağlıyız.',
    excellence: 'Mükemmellik',
    excellenceText: 'Ürün geliştirme ve müşteri hizmetleri dahil olmak üzere yaptığımız her şeyde mükemmelliği hedefliyoruz.',
    
    // Contact Page
    contactUs: 'Bize Ulaşın',
    contactUsText: 'Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.',
    fullName: 'Ad Soyad',
    email: 'E-posta',
    subject: 'Konu',
    message: 'Mesaj',
    sendMessage: 'Mesaj Gönder',
    contactInfo: 'İletişim Bilgileri',
    phone: 'Telefon',
    address: 'Adres',
    customerService: 'Müşteri Hattı',
    headOffice: 'Merkez Ofis',
    
    // Certificates Page
    ourCertificates: 'Sertifikalarımız',
    certificatesText: 'Ürünlerimizin kalitesini ve güvenilirliğini garanti altına almak için uluslararası standartlara uygun sertifikalara sahibiz.',
    
    // Products Page
    ourProducts: 'Ürünlerimiz',
    all: 'Tümü',
    tablets: 'Tabletler',
    chips: 'Parçacıklar',
    couverture: 'Kapari',
    sauces: 'Soslar',
    cocoa: 'Kakao',
    specialty: 'Özel',
    addToCart: 'Sepete Ekle',
    productDetails: 'Ürün Detayları',
    
    // Footer
    quickLinks: 'Hızlı Bağlantılar',
    ourProductsFooter: 'Ürünlerimiz',
    ourStoryFooter: 'Hikayemiz',
    certificatesFooter: 'Sertifikalar',
    contactFooter: 'İletişim',
    contactInformation: 'İletişim Bilgileri',
    followUs: 'Bizi Takip Edin',
    rightsReserved: 'Tüm hakları saklıdır.',
  },
  EN: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    certificates: 'Certificates',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Premium <span>Chocolate</span> Crafted with Passion',
    heroText: 'Discover the exquisite taste of Miva Chocolate, where tradition meets innovation to create unforgettable chocolate experiences for both businesses and consumers.',
    exploreProducts: 'Explore Our Products',
    ourChocolateRange: 'Our Chocolate Range',
    chocolateRangeText: 'From couverture to specialty products, we offer a comprehensive selection of premium chocolates for all your needs.',
    tabletChocolate: 'Tablet Chocolate',
    tabletChocolateDesc: 'Premium quality chocolate tablets in various flavors and cocoa percentages.',
    chocolateChips: 'Chocolate Chips',
    chocolateChipsDesc: 'Perfect for baking, our chocolate chips maintain their shape and flavor.',
    couvertureChocolate: 'Couverture Chocolate',
    couvertureChocolateDesc: 'Professional-grade chocolate with high cocoa butter content for perfect tempering.',
    viewDetails: 'View Details',
    ourChocolateStory: 'Our Chocolate Story',
    chocolateStoryText1: 'Founded in 2003, Miva Chocolate has been dedicated to crafting exceptional chocolate products that delight both businesses and consumers. Our commitment to quality, sustainability, and innovation has made us a trusted partner in the chocolate industry.',
    chocolateStoryText2: 'We combine traditional chocolate-making techniques with modern technology to ensure consistent quality and exceptional taste in every product we create.',
    learnMore: 'Learn More About Us',
    
    // About Page
    ourStory: 'Our Story',
    ourStoryText: 'Miva Chocolate was founded in 2003 by chocolate enthusiasts. Since then, we have focused on creating extraordinary chocolate experiences for businesses and consumers.',
    ourMission: 'Our Mission',
    ourMissionText: 'To add value to the world of chocolate with quality, sustainable and innovative chocolate products.',
    ourVision: 'Our Vision',
    ourVisionText: 'To become a globally recognized, trusted and quality chocolate brand.',
    quality: 'Quality',
    qualityText: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our exacting standards.',
    innovation: 'Innovation',
    innovationText: 'We continuously invest in research and development to create new and exciting chocolate experiences.',
    sustainability: 'Sustainability',
    sustainabilityText: 'We are committed to sustainable practices that protect our environment and support cocoa farming communities.',
    excellence: 'Excellence',
    excellenceText: 'We pursue excellence in everything we do, from product development to customer service.',
    
    // Contact Page
    contactUs: 'Contact Us',
    contactUsText: 'If you have any questions or feedback, please feel free to contact us.',
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    customerService: 'Customer Service',
    headOffice: 'Head Office',
    
    // Certificates Page
    ourCertificates: 'Our Certificates',
    certificatesText: 'We have certificates that comply with international standards to guarantee the quality and reliability of our products.',
    
    // Products Page
    ourProducts: 'Our Products',
    all: 'All',
    tablets: 'Tablets',
    chips: 'Chips',
    couverture: 'Couverture',
    sauces: 'Sauces',
    cocoa: 'Cocoa',
    specialty: 'Specialty',
    addToCart: 'Add to Cart',
    productDetails: 'Product Details',
    
    // Footer
    quickLinks: 'Quick Links',
    ourProductsFooter: 'Our Products',
    ourStoryFooter: 'Our Story',
    certificatesFooter: 'Certificates',
    contactFooter: 'Contact',
    contactInformation: 'Contact Information',
    followUs: 'Follow Us',
    rightsReserved: 'All rights reserved.',
  }
};

// 2. Context'i Tiplendirme
// createContext'e tipini ve başlangıç değeri olarak `undefined` (veya LanguageContextType objesinin default halini) veriyoruz.
// Başlangıçta null kullanmak yerine, ContextType'ı undefined olarak tiplendirmek daha temizdir.
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. Provider Bileşenini Tiplendirme
interface LanguageProviderProps {
    children: ReactNode; // children prop'unun tipini ReactNode olarak belirtiyoruz
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // language state'ine Language tipini belirttik, varsayılan değer 'TR'
  const [language, setLanguage] = useState<Language>('TR'); 

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    // localStorage'dan okunan değer string'dir, Language tipiyle uyumlu olup olmadığını kontrol ediyoruz.
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null; 
    if (savedLanguage && (savedLanguage === 'TR' || savedLanguage === 'EN')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // changeLanguage fonksiyonunu tiplendirdik
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    // localStorage'a string olarak kaydettik
    localStorage.setItem('preferredLanguage', lang); 
  };

  // t fonksiyonunu tiplendirdik
  const t = (key: keyof (typeof translations)['TR']): string => {
    // translations[language][key] artık tip güvenlidir.
    return translations[language][key] || key; 
  };

  const contextValue: LanguageContextType = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Custom Hook'u Tiplendirme
export const useLanguage = (): LanguageContextType => {
  // useContext'in döndürdüğü context değeri ya LanguageContextType ya da undefined olacaktır.
  const context = useContext(LanguageContext); 
  
  // undefined kontrolü ile hatayı fırlatıyoruz ve Context'in doğru tipli olduğunu garanti ediyoruz.
  if (context === undefined) { 
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
