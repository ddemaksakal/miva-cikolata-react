import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
`;

// Hero/Banner Section - İletişim sayfasındaki gibi
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 420px;
  background: linear-gradient(rgba(247, 247, 247, 0.1), rgba(247, 247, 247, 0.1)),
              url('/images/logo2.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    height: 240px;
    padding: 0 1rem;
    text-align: center;
    justify-content: center;
  }
`;

// Banner Başlık Bölümü
const BannerTitleSection = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #bd3333;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', serif;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: #757575;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

// Main Content Section
const MainContent = styled.section`
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  
  .content-container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.$active ? 'rgb(234, 40, 30)' : 'transparent'};
  color: ${props => props.$active ? '#ffffff' : '#3E2723'};
  border: 2px solid rgb(234, 40, 30);
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$active ? 'rgb(234, 40, 30)' : 'rgba(234, 40, 30, 0.1)'};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .product-image {
  width: 100%;
  height: 280px;     /* istersen 320 yap */
  overflow: hidden;
  background-color: #f9f9f9;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;      /* kartı doldurur, gerekirse kırpar */
    object-position: center;
    transition: transform 0.3s ease;
  }
}
  &:hover .product-image img {
    transform: scale(1.05);
  }
  
  .product-info {
    padding: 1.5rem;
    
    .product-category {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background-color: #F5F5DC;
      color: #75674C;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 20px;
      margin-bottom: 1rem;
    }
    
    h3 {
      margin-bottom: 0.5rem;
      color: #4B2E2E;
    }
    
    p {
      color: #757575;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    
    .product-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #4B2E2E;
      margin-bottom: 1.5rem;
    }
  }
`;

const allProducts = [
  {
    id: 4,
    nameKey: 'product4Name',
    category: 'chips',
    descKey: 'product4Desc',
    image: '/images/ürünler images/bitter kırıntı.png'
  },
  {
    id: 5,
    nameKey: 'product5Name',
    category: 'chips',
    descKey: 'product5Desc',
    image: '/images/milk-chips.png'
  },
  {
    id: 32,
    name: 'Fildişi Kırıntı',
    category: 'chips',
    desc: 'Fildişi kırıntı çikolatası',
    image: '/images/ürünler images/fildişi kırıntı.png'
  },
  {
    id: 34,
    name: 'Bitter Vermicelli',
    category: 'chips',
    desc: 'Bitter vermicelli çikolatası',
    image: '/images/bitter-vermicelli.png'
  },
  {
    id: 36,
    name: 'Frambuaz Vermicelli',
    category: 'chips',
    desc: 'Frambuaz vermicelli çikolatası',
    image: '/images/raspberry-vermicelli.png'
  },
  {
    id: 38,
    name: 'Sütlü Vermicelli',
    category: 'chips',
    desc: 'Sütlü vermicelli çikolatası',
    image: '/images/milk-vermicelli.png'
  },
  {
    id: 33,
    name: 'Bitter Flexi',
    category: 'chips',
    desc: 'Bitter flexi çikolatası',
    image: '/images/bitter-flexi.png'
  },
  {
    id: 35,
    name: 'Fildişi Flexi',
    category: 'chips',
    desc: 'Fildişi flexi çikolatası',
    image: '/images/white-flexi.png'
  },
  {
    id: 37,
    name: 'Sütlü Flexi',
    category: 'chips',
    desc: 'Sütlü flexi çikolatası',
    image: '/images/milk-flexi.png'
  },
  {
    id: 6,
    nameKey: 'product6Name',
    category: 'couverture',
    descKey: 'product6Desc',
    image: '/images/ürünler images/kuvertur-cikolata-bitter.jpg'
  },
  {
    id: 7,
    nameKey: 'product7Name',
    category: 'couverture',
    descKey: 'product7Desc',
    image: '/images/ürünler images/kuvertur-cikolata-sütlü.jpg'
  },
  {
    id: 13,
    nameKey: 'product13Name',
    category: 'couverture',
    descKey: 'product13Desc',
    image: '/images/ürünler images/kuvertur-cikolata-beyaz.jpg'
  },
  {
    id: 9,
    name: 'Dondurma Sosu',
    category: 'sauces',
    desc: 'Dondurma sosu',
    image: '/images/ürünler images/sürülebilir images/dondurma sosu.png'
  },
  {
    id: 91,
    name: 'Fındık Kreması',
    category: 'sauces',
    desc: 'Fındık kreması',
    image: '/images/ürünler images/sürülebilir images/fındık kreması.png'
  },
  {
    id: 92,
    name: 'Pralin',
    category: 'sauces',
    desc: 'Pralin',
    image: '/images/ürünler images/sürülebilir images/pralin.png'
  },
  {
    id: 93,
    name: 'Sürülebilir Bisküvi Kreması',
    category: 'sauces',
    desc: 'Sürülebilir bisküvi kreması',
    image: '/images/ürünler images/sürülebilir images/sürülebilir bisküvi kreması.png'
  },
  {
    id: 94,
    name: 'Sütlü Fındık Kreması',
    category: 'sauces',
    desc: 'Sütlü fındık kreması',
    image: '/images/ürünler images/sürülebilir images/sütlü fındık kreması.png'
  },
  {
    id: 10,
    nameKey: 'product10Name',
    category: 'cocoa',
    descKey: 'product10Desc',
    image: '/images/ürünler images/kakao.jpg'
  },
  {
    id: 11,
    nameKey: 'product11Name',
    category: 'specialty',
    descKey: 'product11Desc',
    image: '/images/ürünler images/special/özel.png'
  },
  {
    id: 12,
    nameKey: 'product12Name',
    category: 'specialty',
    descKey: 'product12Desc',
    image: '/images/gift-box.jpg'
  },
  {
    id: 14,
    nameKey: 'product14Name',
    category: 'dragees',
    descKey: 'product14Desc',
    image: '/images/ürünler images/drajeler/portakal draje.png'
  },
  {
    id: 15,
    nameKey: 'product15Name',
    category: 'dragees',
    descKey: 'product15Desc',
    image: '/images/ürünler images/drajeler/antep fıs. draje.png'
  },
  {
    id: 16,
    nameKey: 'product16Name',
    category: 'dragees',
    descKey: 'product16Desc',
    image: '/images/ürünler images/drajeler/üzüm draje.png'
  },
  {
    id: 17,
    nameKey: 'product17Name',
    category: 'dragees',
    descKey: 'product17Desc',
    image: '/images/ürünler images/drajeler/badem draje.png'
  },
  {
    id: 18,
    nameKey: 'product18Name',
    category: 'dragees',
    descKey: 'product18Desc',
    image: '/images/ürünler images/drajeler/fındık draje.png'
  },
  {
    id: 21,
    name: 'Badem Şekeri',
    category: 'dragees',
    desc: 'Badem şekeri drajesi',
    image: '/images/ürünler images/drajeler/badem şekeri.png'
  },
  {
    id: 22,
    name: 'Bronz Kahve',
    category: 'dragees',
    desc: 'Bronz kahve drajesi',
    image: '/images/ürünler images/drajeler/bronzkahve.png'
  },
  {
    id: 23,
    name: 'Kahve Mix',
    category: 'dragees',
    desc: 'Kahve mix drajesi',
    image: '/images/ürünler images/drajeler/kahve mix.png'
  },
  {
    id: 24,
    name: 'Mokka Fındık',
    category: 'dragees',
    desc: 'Mokka fındık drajesi',
    image: '/images/ürünler images/drajeler/mokka fındık.png'
  },
  {
    id: 25,
    name: 'Narlı Fındık',
    category: 'dragees',
    desc: 'Narlı fındık drajesi',
    image: '/images/ürünler images/drajeler/narlı fındık.png'
  },
  {
    id: 26,
    name: 'Pütürlü Badem',
    category: 'dragees',
    desc: 'Pütürlü badem drajesi',
    image: '/images/ürünler images/drajeler/pütürlü badem.png'
  },
  {
    id: 27,
    name: 'Pütürlü Fındık',
    category: 'dragees',
    desc: 'Pütürlü fındık drajesi',
    image: '/images/ürünler images/drajeler/pütürlü fındık.png'
  },
  {
    id: 28,
    name: 'Rainbow',
    category: 'dragees',
    desc: 'Renkli rainbow drajesi',
    image: '/images/ürünler images/drajeler/rainbow.png'
  },
  {
    id: 29,
    name: 'Renkli Mix Badem',
    category: 'dragees',
    desc: 'Renkli mix badem drajesi',
    image: '/images/ürünler images/drajeler/renkli mix badem.png'
  },
  {
    id: 30,
    name: 'Tiramisu Ceviz',
    category: 'dragees',
    desc: 'Tiramisu ceviz drajesi',
    image: '/images/ürünler images/drajeler/tramisu ceviz.png'
  },
  {
    id: 31,
    name: 'Yeşil Pütürlü Badem',
    category: 'dragees',
    desc: 'Yeşil pütürlü badem drajesi',
    image: '/images/ürünler images/drajeler/yeşil pütürlü badem.png'
  },
  {
    id: 19,
    name: 'Madlen',
    category: 'specialty',
    desc: 'Özel tasarım madlen çikolatası',
    image: '/images/ürünler images/special/madlen1.png'
  },
  {
    id: 20,
    name: 'Sargılı Madlen',
    category: 'specialty',
    desc: 'Sargılı madlen çikolatası',
    image: '/images/ürünler images/special/sargılı post.png'
  },
  {
    id: 40,
    name: 'Bitter Damla',
    category: 'drops',
    desc: 'Bitter damla çikolata',
    image: '/images/ürünler images/damla çikolata/bitter damla.png'
  },
  {
    id: 41,
    name: 'Fildişi Damla',
    category: 'drops',
    desc: 'Fildişi damla çikolata',
    image: '/images/ürünler images/damla çikolata/fildişi damla.png'
  },
  {
    id: 42,
    name: 'Frambuaz Damla',
    category: 'drops',
    desc: 'Frambuaz damla çikolata',
    image: '/images/ürünler images/damla çikolata/frambuaz damla.png'
  },
  {
    id: 43,
    name: 'Sütlü Damla',
    category: 'drops',
    desc: 'Sütlü damla çikolata',
    image: '/images/ürünler images/damla çikolata/sütlü damla.png'
  }
];

function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
const categories = [
  { id: 'all', name: t('all') },
  { id: 'couverture', name: t('couverture') },
  { id: 'sauces', name: t('saucesLabel') },
  { id: 'cocoa', name: t('cocoa') },
  { id: 'specialty', name: t('specialty') },
  { id: 'chips', name: t('chipsLabel') },
  { id: 'dragees', name: t('dragees') },
  { id: 'drops', name: t('dropsLabel') }
];

  const filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === filter);

  return (
    <ProductsContainer>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Section */}
      <MainContent>
        <div className="content-container">
          {/* Banner Başlık Bölümü */}
          <BannerTitleSection style={{ padding: '2rem 0', background: 'transparent', borderBottom: 'none', margin: '0 0 2rem 0' }}>
            <h1>{t('ourProducts')}</h1>
            <p>{t('productsIntro2')}</p>
          </BannerTitleSection>
          
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category.id}
                $active={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterButtons>
          
          <ProductsGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name || t(product.nameKey)} />
                </div>
                <div className="product-info">
                  <span className="product-category">
                    {categories.find(cat => cat.id === product.category)?.name || product.category}
                  </span>
                  <h3>{product.name || t(product.nameKey)}</h3>
                  <p>{product.desc || t(product.descKey)}</p>
                </div>
              </ProductCard>
            ))}
          </ProductsGrid>
        </div>
      </MainContent>
    </ProductsContainer>
  );
}

export default Products;