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
  height: 320px;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
              url('/images/products-header.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    height: 280px;
    padding: 0 1rem;
    text-align: center;
    justify-content: center;
  }
  
  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    
    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      color: #ffffff;
      opacity: 0.9;
      max-width: 500px;
      line-height: 1.6;
      
      @media (max-width: 768px) {
        font-size: 1rem;
        max-width: 100%;
      }
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
  background-color: ${props => props.active ? 'rgb(234, 40, 30)' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#3E2723'};
  border: 2px solid rgb(234, 40, 30);
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'rgb(234, 40, 30)' : 'rgba(234, 40, 30, 0.1)'};
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
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    id: 1,
    nameKey: 'product1Name',
    category: 'tablets',
    descKey: 'product1Desc',
    image: '/images/tablet-dark-70.jpg'
  },
  {
    id: 2,
    nameKey: 'product2Name',
    category: 'tablets',
    descKey: 'product2Desc',
    image: '/images/tablet-milk.jpg'
  },
  {
    id: 3,
    nameKey: 'product3Name',
    category: 'tablets',
    descKey: 'product3Desc',
    image: '/images/tablet-white.jpg'
  },
  {
    id: 4,
    nameKey: 'product4Name',
    category: 'chips',
    descKey: 'product4Desc',
    image: '/images/chips-dark.jpg'
  },
  {
    id: 5,
    nameKey: 'product5Name',
    category: 'chips',
    descKey: 'product5Desc',
    image: '/images/chips-milk.jpg'
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
    nameKey: 'product9Name',
    category: 'sauces',
    descKey: 'product9Desc',
    image: '/images/sauce-classic.jpg'
  },
  {
    id: 10,
    nameKey: 'product10Name',
    category: 'cocoa',
    descKey: 'product10Desc',
    image: '/images/cocoa-powder.jpg'
  },
  {
    id: 11,
    nameKey: 'product11Name',
    category: 'specialty',
    descKey: 'product11Desc',
    image: '/images/hot-chocolate.jpg'
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
    image: '/images/ürünler images/portakal draje.png'
  },
  {
    id: 15,
    nameKey: 'product15Name',
    category: 'dragees',
    descKey: 'product15Desc',
    image: '/images/ürünler images/antep fıs. draje.png'
  },
  {
    id: 16,
    nameKey: 'product16Name',
    category: 'dragees',
    descKey: 'product16Desc',
    image: '/images/ürünler images/üzüm draje.png'
  },
  {
    id: 17,
    nameKey: 'product17Name',
    category: 'dragees',
    descKey: 'product17Desc',
    image: '/images/ürünler images/badem draje.png'
  },
  {
    id: 18,
    nameKey: 'product18Name',
    category: 'dragees',
    descKey: 'product18Desc',
    image: '/images/ürünler images/fındık draje.png'
  }
];

function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: t('all') },
    { id: 'tablets', name: t('tablets') },
    { id: 'chips', name: t('chips') },
    { id: 'couverture', name: t('couverture') },
    { id: 'sauces', name: t('sauces') },
    { id: 'cocoa', name: t('cocoa') },
    { id: 'specialty', name: t('specialty') },
    { id: 'dragees', name: t('dragees') }
  ];

  const filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === filter);

  return (
    <ProductsContainer>
      {/* Hero Section */}
      <HeroSection>
        <div className="hero-content">
          <h1>{t('ourProducts')}</h1>
          <p>Kaliteli ve lezzetli çikolata ürünlerimizle tanışın.</p>
        </div>
      </HeroSection>

      {/* Main Content Section */}
      <MainContent>
        <div className="content-container">
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category.id}
                active={filter === category.id}
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
                  <img src={product.image} alt={t(product.nameKey)} />
                </div>
                <div className="product-info">
                  <span className="product-category">
                    {categories.find(cat => cat.id === product.category)?.name || product.category}
                  </span>
                  <h3>{t(product.nameKey)}</h3>
                  <p>{t(product.descKey)}</p>
                  <div className="product-price">{product.price}</div>
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