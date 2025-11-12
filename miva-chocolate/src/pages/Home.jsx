import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Slider from '../components/Slider';
import { useLanguage } from '../contexts/LanguageContext';

const HomeContainer = styled.div`
  width: 100%;
`;

const Section = styled.section`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #D4AF37;
    }
  }
  
  p {
    max-width: 700px;
    margin: 1.5rem auto 0;
    color: #757575;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #4B2E2E;
  }
  
  p {
    color: #757575;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const AboutSection = styled.section`
  background-color: #F5F5DC;
  padding: 3rem 0;
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .about-text {
    h2 {
      color: #4B2E2E;
    }
    
    p {
      margin-bottom: 1.5rem;
    }
  }
  
  .about-image {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

function Home() {
  const { t } = useLanguage();

  return (
    <HomeContainer>
      {/* Hero Section replaced with Slider */}
      <Slider onExploreClick={() => window.location.href = '/products'} />
      
      {/* Products Section */}
      <Section id="products">
        <div className="container">
          <SectionTitle>
            <h2>{t('ourChocolateRange')}</h2>
            <p>
              {t('chocolateRangeText')}
            </p>
          </SectionTitle>
          
          <ProductsGrid>
            <ProductCard>
              <img src="/images/tablet-chocolate.jpg" alt={t('tabletChocolate')} />
              <div className="card-content">
                <h3>{t('tabletChocolate')}</h3>
                <p>{t('tabletChocolateDesc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
            
            <ProductCard>
              <img src="/images/chocolate-chips.jpg" alt={t('chocolateChips')} />
              <div className="card-content">
                <h3>{t('chocolateChips')}</h3>
                <p>{t('chocolateChipsDesc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
            
            <ProductCard>
              <img src="/images/couverture.jpg" alt={t('couvertureChocolate')} />
              <div className="card-content">
                <h3>{t('couvertureChocolate')}</h3>
                <p>{t('couvertureChocolateDesc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
          </ProductsGrid>
        </div>
      </Section>
      
      {/* About Section */}
      <AboutSection>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('ourChocolateStory')}</h2>
              <p>
                {t('chocolateStoryText1')}
              </p>
              <p>
                {t('chocolateStoryText2')}
              </p>
              <RouterLink to="/about" className="btn">
                {t('learnMore')}
              </RouterLink>
            </div>
            <div className="about-image">
              <img src="/images/about-image.jpg" alt="Chocolate Production" />
            </div>
          </div>
        </div>
      </AboutSection>
    </HomeContainer>
  );
}

export default Home;