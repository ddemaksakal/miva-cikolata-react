import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext';

const CertificatesContainer = styled.div`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PageHeader = styled.div`
  background: linear-gradient(rgba(75, 46, 46, 0.8), rgba(75, 46, 46, 0.8)), 
              url('/images/certificates-header.jpg') center/cover no-repeat;
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertificateCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .certificate-image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .certificate-info {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 1rem;
      color: #4B2E2E;
    }
    
    p {
      color: #757575;
      margin-bottom: 1.5rem;
    }
  }
`;

function Certificates() {
  const { t } = useLanguage();

  const certificates = [
    {
      id: 1,
      name: 'ISO 9001 Quality Management',
      description: 'International standard for quality management systems, demonstrating our commitment to quality.',
      image: '/images/certificate-1.jpg'
    },
    {
      id: 2,
      name: 'ISO 22000 Food Safety',
      description: 'Ensures our chocolate products meet the highest food safety standards throughout the supply chain.',
      image: '/images/certificate-2.jpg'
    },
    {
      id: 3,
      name: 'Organic Certification',
      description: 'Certifies that our organic chocolate products are produced without synthetic pesticides or fertilizers.',
      image: '/images/certificate-3.jpg'
    },
    {
      id: 4,
      name: 'Fair Trade Certification',
      description: 'Guarantees that our cocoa is sourced ethically with fair wages and sustainable farming practices.',
      image: '/images/certificate-4.jpg'
    }
  ];

  return (
    <CertificatesContainer>
      <PageHeader>
        <h1>{t('ourCertificates')}</h1>
      </PageHeader>
      
      <div className="container">
        <Section>
          <SectionTitle>
            <h2>{t('ourCertificates')}</h2>
            <p>
              {t('certificatesText')}
            </p>
          </SectionTitle>
          
          <CertificatesGrid>
            {certificates.map(certificate => (
              <CertificateCard key={certificate.id}>
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.name} />
                </div>
                <div className="certificate-info">
                  <h3>{certificate.name}</h3>
                  <p>{certificate.description}</p>
                </div>
              </CertificateCard>
            ))}
          </CertificatesGrid>
        </Section>
      </div>
    </CertificatesContainer>
  );
}

export default Certificates;