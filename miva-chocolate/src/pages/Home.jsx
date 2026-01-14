import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Slider from '../components/Slider';
import { useLanguage } from '../contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import chocolateSauceImg from '../assets/çikolata sos2.jpg';

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

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(75, 46, 46, 0), rgba(75, 46, 46, 0.5), rgba(75, 46, 46, 0));
  margin: 2rem 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
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
    height: 250px;
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
    align-items: start;
    
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
    display: flex;
    align-items: stretch;
    height: auto;
  }
  
  .swiper {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    border-radius: 8px;
  }
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-button-next, .swiper-button-prev {
    color: #D4AF37;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  .swiper-button-next::after, .swiper-button-prev::after {
    font-size: 24px;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .swiper {
      aspect-ratio: 16/9;
    }
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
              <img src="/images/madlen post.png" alt={t('homeProduct1Name')} />
              <div className="card-content">
                <h3>{t('homeProduct1Name')}</h3>
                <p>{t('homeProduct1Desc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
            
            <ProductCard>
              <img src={chocolateSauceImg} alt={t('homeProduct2Name')} />
              <div className="card-content">
                <h3>{t('homeProduct2Name')}</h3>
                <p>{t('homeProduct2Desc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
            
            <ProductCard>
              <img src="/images/bitter kırıntı.png" alt={t('homeProduct3Name')} />
              <div className="card-content">
                <h3>{t('homeProduct3Name')}</h3>
                <p>{t('homeProduct3Desc')}</p>
                <RouterLink to="/products" className="btn btn--secondary">
                  {t('viewDetails')}
                </RouterLink>
              </div>
            </ProductCard>
          </ProductsGrid>
        </div>
      </Section>
      
      <Separator />
      
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
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
                style={{ height: 'auto' }}
              >
                <SwiperSlide>
                  <img src="/images/Adsiz-tasarim-15-1024x720.jpg" alt="Chocolate Production 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/Mua-Dubai-Cikolatasi.jpg" alt="Chocolate Production 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/cikolata-tadimi-milat-cikolata-ile-her-b-6e5a.jpg" alt="Chocolate Production 3" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </AboutSection>
    </HomeContainer>
  );
}

export default Home;