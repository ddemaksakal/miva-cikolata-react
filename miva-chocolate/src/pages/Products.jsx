import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsContainer = styled.div`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PageHeader = styled.div`
  background: linear-gradient(rgba(75, 46, 46, 0.8), rgba(75, 46, 46, 0.8)), 
              url('/images/products-header.jpg') center/cover no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    color: #ffffff;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
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
  background-color: ${props => props.active ? '#D4AF37' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#3E2723'};
  border: 2px solid #D4AF37;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#D4AF37' : 'rgba(212, 175, 55, 0.1)'};
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
    name: 'Dark Chocolate Tablet 70%',
    category: 'tablets',
    description: 'Premium dark chocolate with 70% cocoa content for a rich, intense flavor.',
    price: '₺85.00',
    image: '/images/tablet-dark-70.jpg'
  },
  {
    id: 2,
    name: 'Milk Chocolate Tablet',
    category: 'tablets',
    description: 'Smooth and creamy milk chocolate with the perfect balance of cocoa and milk.',
    price: '₺75.00',
    image: '/images/tablet-milk.jpg'
  },
  {
    id: 3,
    name: 'White Chocolate Tablet',
    category: 'tablets',
    description: 'Delicate white chocolate with vanilla notes for a sweet, creamy experience.',
    price: '₺80.00',
    image: '/images/tablet-white.jpg'
  },
  {
    id: 4,
    name: 'Dark Chocolate Chips',
    category: 'chips',
    description: 'Rich dark chocolate chips perfect for baking cookies, brownies, and desserts.',
    price: '₺90.00',
    image: '/images/chips-dark.jpg'
  },
  {
    id: 5,
    name: 'Milk Chocolate Chips',
    category: 'chips',
    description: 'Creamy milk chocolate chips ideal for all your baking needs.',
    price: '₺85.00',
    image: '/images/chips-milk.jpg'
  },
  {
    id: 6,
    name: 'Couverture Dark Chocolate',
    category: 'couverture',
    description: 'Professional-grade dark couverture chocolate with 55% cocoa butter for perfect tempering.',
    price: '₺120.00',
    image: '/images/couverture-dark.jpg'
  },
  {
    id: 7,
    name: 'Couverture Milk Chocolate',
    category: 'couverture',
    description: 'Smooth milk couverture chocolate with high cocoa butter content for professional use.',
    price: '₺115.00',
    image: '/images/couverture-milk.jpg'
  },
  {
    id: 8,
    name: 'Orange Dark Chocolate Tablet',
    category: 'tablets',
    description: 'Premium dark chocolate with natural orange zest for a citrusy twist.',
    price: '₺100.00',
    image: '/images/tablet-orange.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Sauce Classic',
    category: 'sauces',
    description: 'Smooth and rich chocolate sauce perfect for desserts, beverages, and toppings.',
    price: '₺65.00',
    image: '/images/sauce-classic.jpg'
  },
  {
    id: 10,
    name: 'Cocoa Powder Premium',
    category: 'cocoa',
    description: '100% pure natural cocoa powder with intense flavor. Great for baking and beverages.',
    price: '₺90.00',
    image: '/images/cocoa-powder.jpg'
  },
  {
    id: 11,
    name: 'Hot Chocolate Mix',
    category: 'specialty',
    description: 'Rich and creamy hot chocolate mix with real cocoa. Just add hot water or milk.',
    price: '₺55.00',
    image: '/images/hot-chocolate.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Gift Box',
    category: 'specialty',
    description: 'Elegant gift box with assortment of our finest chocolate creations.',
    price: '₺200.00',
    image: '/images/gift-box.jpg'
  }
];

function Products() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: t('all') },
    { id: 'tablets', name: t('tablets') },
    { id: 'chips', name: t('chips') },
    { id: 'couverture', name: t('couverture') },
    { id: 'sauces', name: t('sauces') },
    { id: 'cocoa', name: t('cocoa') },
    { id: 'specialty', name: t('specialty') }
  ];

  const filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === filter);

  return (
    <ProductsContainer>
      <PageHeader>
        <h1>{t('ourProducts')}</h1>
      </PageHeader>
      
      <div className="container">
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
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">
                  {categories.find(cat => cat.id === product.category)?.name || product.category}
                </span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
                <button className="btn btn--secondary">
                  {t('addToCart')}
                </button>
              </div>
            </ProductCard>
          ))}
        </ProductsGrid>
      </div>
    </ProductsContainer>
  );
}

export default Products;