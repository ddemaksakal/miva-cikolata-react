import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCog, FaGlobe, FaBoxes } from 'react-icons/fa';

const AboutContainer = styled.main`
  padding: 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(75, 46, 46, 0.3), rgba(75, 46, 46, 0.6)), 
              url('/images/aboutbanner.jpg') center/cover no-repeat;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  position: relative;
  
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 0 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.95;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ContentCard = styled.section`
  background: white;
  margin-top: -50px;
  position: relative;
  z-index: 2;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-top: -30px;
    padding: 2rem;
    max-width: 90%;
  }
  
  .accent-title {
    color: #D4AF37;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #4B2E2E;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    color: #757575;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ValuesSection = styled.section`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.article`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  
  .value-icon {
    width: 56px;
    height: 56px;
    color: #D4AF37;
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
  }
  
  &:hover .value-icon {
    color: #8B4513;
  }
  
  h3 {
    margin-bottom: 1rem;
    color: #4B2E2E;
  }
  
  p {
    color: #757575;
    line-height: 1.6;
  }
`;

const ClosingSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const StyledButton = styled.button`
  background-color: #4B2E2E;
  color: #e0e0e0 ;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #8B4513;
    color: #ffffff;
  }s
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

function About() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <AboutContainer>
      <HeroSection>
        <div className="hero-content">
          <h1>{t('aboutTitle')}</h1>
          <p>{t('productsIntro1')}</p>
        </div>
      </HeroSection>
      
      <div className="container">
      <ContentCard>
        <div className="accent-title">{t('aboutSubtitle')}</div>
        <h2>{t('aboutMainTitle')}</h2>
        <p>
          {t('aboutText1')}
        </p>
        <p>
          {t('aboutText2')}
        </p>
        <p>
          {t('aboutText3')}
        </p>
      </ContentCard>
        
        <ValuesSection>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('valuesTitle')}</h2>
            <ValuesGrid>
              <ValueCard>
                <FaCog className="value-icon" />
                <h3>{t('qualityTitle')}</h3>
                <p>
                  {t('qualityDesc')}
                </p>
              </ValueCard>
              
              <ValueCard>
                <FaGlobe className="value-icon" />
                <h3>{t('globalTitle')}</h3>
                <p>
                  {t('globalDesc')}
                </p>
              </ValueCard>
              
              <ValueCard>
                <FaBoxes className="value-icon" />
                <h3>{t('varietyTitle')}</h3>
                <p>
                  {t('varietyDesc')}
                </p>
              </ValueCard>
            </ValuesGrid>
          </div>
        </ValuesSection>
        
        <ClosingSection>
          <StyledButton onClick={() => navigate('/contact')}>{t('meetUs')}</StyledButton>
         
        </ClosingSection>
      </div>
    </AboutContainer>
  );
}

export default About;