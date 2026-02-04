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
    productsIntro2: 'Kaliteli ve lezzetli çikolata ürünlerimizle tanışın.',

    // About Page
    ourStory: 'Hikayemiz',
    ourStoryText: 'Miva Chocolate, 2003 yılında çikolata tutkunları tarafından kuruldu. O zamandan beri, işletmeler ve tüketiciler için olağanüstü çikolata deneyimleri yaratmaya odaklandık.',
    ourMission: 'Misyonumuz',
    ourMissionText: 'Kaliteli, sürdürülebilir ve yenilikçi çikolata ürünleriyle çikolata dünyasına değer katmak.',
    ourVision: 'Vizyonumuz',
    ourVisionText: 'Dünya çapında tanınan, güvenilir ve kaliteli çikolata markası olmak.',
    aboutUs: 'Hakkımızda',
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
    productsIntro1: 'Kaliteli ve lezzetli çikolata ürünleri ile müşterilerimize hizmet veriyoruz.',

    ourProducts: 'Ürünlerimiz',
    all: 'Tümü',
    chips: 'Parçacıklar',
    couverture: 'Kuvertür',
    saucesLabel: 'Sürülebilir Seçenekler',
    chipsLabel: 'Kırıntı Çikolatalar',
    dropsLabel: 'Damla Çikolatalar',
    cocoa: 'Kakao',
    specialty: 'Özel',
    dragees: 'Drajeler',
  
    
    // Product Names and Descriptions
    product1Name: 'Koyu Çikolata Tablet %70',
    product1Desc: 'Zengin ve yoğun bir aroma için %70 kakao içeriğine sahip premium koyu çikolata.',
    product2Name: 'Sütlü Çikolata Tablet',
    product2Desc: 'Kakao ve süt dengesi mükemmel olan pürüzsüz ve kremsi sütlü çikolata.',
    product3Name: 'Beyaz Çikolata Tablet',
    product3Desc: 'Tatlı ve kremsi bir deneyim için vanilya notalarıyla narin beyaz çikolata.',
    product4Name: 'Koyu Çikolata Parçacıkları',
    product4Desc: 'Kurabiye, brownie ve tatlılar pişirmek için mükemmel zengin koyu çikolata parçacıkları.',
    product5Name: 'Sütlü Çikolata Parçacıkları',
    product5Desc: 'Tüm pişirme ihtiyaçlarınız için kremsi sütlü çikolata parçacıkları.',
    product6Name: 'Bitter Kuvertür Çikolata',
    product6Desc: 'Mükemmel temperleme için %55 kakao yağı içeren profesyonel kalite koyu kapari çikolata.',
    product7Name: 'Sütlü Kuvertür Çikolata',
    product7Desc: 'Profesyonel kullanım için yüksek kakao yağı içeriğine sahip pürüzsüz sütlü kapari çikolata.',
    product13Name: 'Beyaz Kuvertür Çikolata',
    product13Desc: 'Beyaz çikolata temelli mükemmel temperleme için yüksek kakao yağı içeren profesyonel kalite kapari çikolata.',
    product8Name: 'Portakallı Koyu Çikolata Tablet',
    product8Desc: 'Narenciye tadı için doğal portakal kabuğu ile premium koyu çikolata.',
    product9Name: 'Klasik Çikolata Sosu',
    product9Desc: 'Tatlılar, içecekler ve garnitürler için pürüzsüz ve zengin çikolata sosu.',
    product10Name: 'Premium Kakao Tozu',
    product10Desc: 'Yoğun aromalı %100 saf doğal kakao tozu. Pişirme ve içecekler için mükemmel.',
    product11Name: 'Special Çikolata Karışımı',
    product11Desc: 'Özel seçilmiş special çikolata ürünleri gerçek kakao ile hazırlanmıştır.',
    product12Name: 'Çikolata Hediye Kutusu',
    product12Desc: 'En iyi çikolata kreasyonlarımızın seçkisiyle şık hediye kutusu.',
    product14Name: 'Portakal Drajesi',
    product14Desc: 'Taze portakal aromasıyla kaplanmış nefis çikolata drajeleri.',
    product15Name: 'Antep Fıstıklı Drajesi',
    product15Desc: 'Gaziantep fıstığı ile kaplanmış premium çikolata drajeleri.',
    product16Name: 'Üzüm Drajesi',
    product16Desc: 'Kuru üzüm ile kaplanmış geleneksel lezzetli çikolata drajeleri.',
    product17Name: 'Bademli Drajesi',
    product17Desc: 'Taze badem ile kaplanmış çıtır ve lezzetli çikolata drajeleri.',
    product18Name: 'Fındıklı Drajesi',
    product18Desc: 'Fındık ile kaplanmış klasik ve sevilen çikolata drajeleri.',
    
    // Slider
    sliderTitle1: 'Premium <span>Çikolata</span> Tutkuyla Hazırlandı',
    sliderDesc1: 'Unutulmaz çikolata deneyimleri yaşamak için geleneğin yenilikle buluştuğu Miva Çikolatanın enfes lezzetini keşfedin.',
    sliderTitle2: 'Her Gününüz İçin Enfes <span>Çikolata Kreasyonları</span>',
    sliderDesc2: 'Birinci sınıf çikolata ürünlerimiz tatlılarınıza, unlu mamullerinize ve şekerlemelerinize mükemmel bir lüks dokunuşu katar.',
    sliderTitle3: 'Mutfak Mükemmelliği için <span>Zengin</span>',
    sliderDesc3: 'Hem profesyonel şefler hem de ev aşçıları için hazırlanmış zanaatkar çikolata ürünlerimizle tatlılarınızın kalitesini yükseltin.',
    exploreProducts: 'Ürünlerimizi Keşfedin',
    
    // About Page
    aboutTitle: 'Hakkımızda',
    aboutSubtitle: 'Miva Çikolata Hakkında',
    aboutMainTitle: 'Amacımız Müşterilerimize Kaliteli Tatlar ve Mükemmel Lezzetler Sunmaktır',
    aboutText1: 'Miva Çikolata olarak, kurulduğumuz yıldan beri kalite ve hijyen unsurlarından asla taviz vermeyen bir yapıya sahip olup satış öncesi ve sonrası müşteri memnuniyetini ilke edinmiş bir kuruluştur.',
    aboutText2: 'Yılların verdiği deneyim ve tutkumuzla geleneksel yöntemleri modern teknolojilerle birleştirerek her lokmada mükemmelliği yakalıyoruz. Çikolata tutkumuz, ailemizin nesilden nesile aktardığı bir miras.',
    aboutText3: 'Geniş ürün yelpazemizle her damak zevkine uygun çikolata çeşitleri sunuyor, dünya çapında müşterilerimize ulaşarak lezzetimizi paylaşıyoruz.',
    valuesTitle: 'Değerlerimiz',
    qualityTitle: 'Kaliteli Üretim',
    qualityDesc: 'Modern tesislerimizde geleneksel yöntemleri teknolojiyle birleştirerek en yüksek kalitede ürünler üretiyoruz.',
    globalTitle: 'Dünyanın Her Yerine',
    globalDesc: 'Ürünlerimizle dünya çapında müşterilerimize ulaşarak lezzetimizi uluslararası alanda paylaşıyoruz.',
    varietyTitle: 'Ürün Çeşitliliği',
    varietyDesc: 'Geniş ürün yelpazemizle her damak zevkine uygun çikolata çeşitleri sunuyoruz.',
    meetUs: 'Bizimle Tanışın',
    
    // Home Page Products
    homeProduct1Name: 'Özel Çikolatalar',
    homeProduct1Desc: 'Benzersiz tatlar ve özel kreasyonlar.',
    homeProduct2Name: 'Çikolata Sosları',
    homeProduct2Desc: 'Tatlılarınıza mükemmel uyum sağlayan soslar.',
    homeProduct3Name: 'Parça Çikolata',
    homeProduct3Desc: 'Pişirme ve dekorasyon için ideal parçalar.',
    
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
    productsIntro2: 'Meet our high-quality and delicious chocolate products.',

    // About Page
    ourStory: 'Our Story',
    ourStoryText: 'Miva Chocolate was founded in 2003 by chocolate enthusiasts. Since then, we have focused on creating extraordinary chocolate experiences for businesses and consumers.',
    ourMission: 'Our Mission',
    ourMissionText: 'To add value to the world of chocolate with quality, sustainable and innovative chocolate products.',
    ourVision: 'Our Vision',
    ourVisionText: 'To become a globally recognized, trusted and quality chocolate brand.',
    aboutUs: 'About Us',
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
    chips: 'Chips',
    couverture: 'Couverture',
    saucesLabel: 'Spreadable Options',
    chipsLabel: 'Chocolate Chips',
    dropsLabel: 'Chocolate Drops',
    cocoa: 'Cocoa',
    specialty: 'Specialty',
    dragees: 'Dragees',
    
   
    // Product Names and Descriptions
    product1Name: 'Dark Chocolate Tablet 70%',
    product1Desc: 'Premium dark chocolate with 70% cocoa content for a rich, intense flavor.',
    product2Name: 'Milk Chocolate Tablet',
    product2Desc: 'Smooth and creamy milk chocolate with the perfect balance of cocoa and milk.',
    product3Name: 'White Chocolate Tablet',
    product3Desc: 'Delicate white chocolate with vanilla notes for a sweet, creamy experience.',
    product4Name: 'Dark Chocolate Chips',
    product4Desc: 'Rich dark chocolate chips perfect for baking cookies, brownies, and desserts.',
    product5Name: 'Milk Chocolate Chips',
    product5Desc: 'Creamy milk chocolate chips ideal for all your baking needs.',
    product6Name: 'Bitter Couverture Chocolate',
    product6Desc: 'Professional-grade dark couverture chocolate with 55% cocoa butter for perfect tempering.',
    product7Name: 'Milk Couverture Chocolate',
    product7Desc: 'Smooth milk couverture chocolate with high cocoa butter content for professional use.',
    product13Name: 'White Couverture Chocolate',
    product13Desc: 'White chocolate-based couverture with high cocoa butter content for perfect tempering.',
    product8Name: 'Orange Dark Chocolate Tablet',
    product8Desc: 'Premium dark chocolate with natural orange zest for a citrusy twist.',
    product9Name: 'Chocolate Sauce Classic',
    product9Desc: 'Smooth and rich chocolate sauce perfect for desserts, beverages, and toppings.',
    product10Name: 'Cocoa Powder Premium',
    product10Desc: '100% pure natural cocoa powder with intense flavor. Great for baking and beverages.',
    product11Name: 'Special Chocolate Mix',
    product11Desc: 'Specially selected special chocolate products are prepared with real cocoa',
    product12Name: 'Chocolate Gift Box',
    product12Desc: 'Elegant gift box with assortment of our finest chocolate creations.',
    product14Name: 'Orange Dragee',
    product14Desc: 'Delicious chocolate dragees coated with fresh orange flavor.',
    product15Name: 'Pistachio Dragee',
    product15Desc: 'Premium chocolate dragees coated with Gaziantep pistachios.',
    product16Name: 'Grape Dragee',
    product16Desc: 'Traditional chocolate dragees coated with dried grapes.',
    product17Name: 'Almond Dragee',
    product17Desc: 'Crunchy and delicious chocolate dragees coated with fresh almonds.',
    product18Name: 'Hazelnut Dragee',
    product18Desc: 'Classic and beloved chocolate dragees coated with hazelnuts.',
    
    // Slider
    sliderTitle1: 'Premium <span>Chocolate</span> Crafted with Passion',
    sliderDesc1: 'Discover the exquisite taste of Miva Chocolate, where tradition meets innovation to create unforgettable chocolate experiences for both businesses and consumers.',
    sliderTitle2: 'Delicious <span>Chocolate Creations</span> for Every Day',
    sliderDesc2: 'Our premium chocolate products add the perfect touch of luxury to your desserts, baked goods, and confections.',
    sliderTitle3: 'Rich for <span>Kitchen Perfection</span>',
    sliderDesc3: 'Elevate the quality of your desserts with our artisanal chocolate products designed for both professional chefs and home cooks.',
    exploreProducts: 'Explore Our Products',
    
    // About Page
    aboutTitle: 'About Us',
    aboutSubtitle: 'About Miva Chocolate',
    aboutMainTitle: 'Our Goal is to Provide Our Customers with Quality Flavors and Perfect Tastes',
    aboutText1: 'As Miva Chocolate, since the year we were founded, we have a structure that never compromises on quality and hygiene principles, and we have adopted customer satisfaction before and after sales as a principle.',
    aboutText2: 'With the experience and passion of the years, we combine traditional methods with modern technologies to achieve perfection in every bite. Our chocolate passion is a heritage passed down from generation to generation in our family.',
    aboutText3: 'We offer a wide range of chocolate varieties suitable for every palate, reaching our customers worldwide and sharing our taste.',
    valuesTitle: 'Our Values',
    qualityTitle: 'Quality Production',
    qualityDesc: 'We combine traditional methods with technology in our modern facilities to produce the highest quality products.',
    globalTitle: 'All Over the World',
    globalDesc: 'We reach our customers worldwide with our products and share our taste internationally.',
    varietyTitle: 'Product Variety',
    varietyDesc: 'We offer a wide range of chocolate varieties suitable for every palate.',
    meetUs: 'Meet Us',
    
    // Footer
    quickLinks: 'Quick Links',
    ourProductsFooter: 'Our Products',
    ourStoryFooter: 'Our Story',
    certificatesFooter: 'Certificates',
    contactFooter: 'Contact',
    contactInformation: 'Contact Information',
    followUs: 'Follow Us',
    rightsReserved: 'All rights reserved.',
    
    // Home Page Products
    homeProduct1Name: 'Special Chocolates',
    homeProduct1Desc: 'Unique flavors and special creations.',
    homeProduct2Name: 'Chocolate Sauces',
    homeProduct2Desc: 'Sauces that perfectly complement your desserts.',
    homeProduct3Name: 'Chocolate Chips',
    homeProduct3Desc: 'Perfect pieces for baking and decoration.',
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
