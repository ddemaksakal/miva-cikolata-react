import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext';

const AboutContainer = styled.div`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PageHeader = styled.div`
  background: linear-gradient(rgba(75, 46, 46, 0.8), rgba(75, 46, 46, 0.8)), 
              url('/images/about-header.jpg') center/cover no-repeat;
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

const Section = styled.section`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  &:nth-child(even) {
    .content-text {
      order: 1;
    }
    
    .content-image {
      order: 2;
    }
    
    @media (max-width: 768px) {
      .content-text {
        order: initial;
      }
      
      .content-image {
        order: initial;
      }
    }
  }
`;

const ContentText = styled.div`
  h2 {
    color: #4B2E2E;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ContentImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  
  .value-icon {
    font-size: 2.5rem;
    color: #D4AF37;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #757575;
  }
`;

function About() {
  const { t } = useLanguage();

  return (
    <AboutContainer>
      <PageHeader>
        <h1>{t('ourStory')}</h1>
      </PageHeader>
      
      <div className="container">
        <Section>
          <SectionContent>
            <ContentText className="content-text">
              <h2>{t('ourStory')}</h2>
              <p>
                {t('ourStoryText')}
              </p>
              <p>
                {t('chocolateStoryText1')}
              </p>
            </ContentText>
            <ContentImage className="content-image">
              <img src="/images/about-1.jpg" alt="Our Chocolate Factory" />
            </ContentImage>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionContent>
            <ContentImage className="content-image">
              <img src="/images/about-2.jpg" alt="Our Mission" />
            </ContentImage>
            <ContentText className="content-text">
              <h2>{t('ourMission')}</h2>
              <p>
                {t('ourMissionText')}
              </p>
              <h2>{t('ourVision')}</h2>
              <p>
                {t('ourVisionText')}
              </p>
            </ContentText>
          </SectionContent>
        </Section>
        
        <Section>
          <ContentText style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>{t('excellence')}</h2>
            <p>
              {t('excellenceText')}
            </p>
          </ContentText>
          
          <ValuesGrid>
            <ValueCard>
              <div className="value-icon">Q</div>
              <h3>{t('quality')}</h3>
              <p>
                {t('qualityText')}
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="value-icon">I</div>
              <h3>{t('innovation')}</h3>
              <p>
                {t('innovationText')}
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="value-icon">S</div>
              <h3>{t('sustainability')}</h3>
              <p>
                {t('sustainabilityText')}
              </p>
            </ValueCard>
            
            <ValueCard>
              <div className="value-icon">E</div>
              <h3>{t('excellence')}</h3>
              <p>
                {t('excellenceText')}
              </p>
            </ValueCard>
          </ValuesGrid>
        </Section>
      </div>
    </AboutContainer>
  );
}

export default About;