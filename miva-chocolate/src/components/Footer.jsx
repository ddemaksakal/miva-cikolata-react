import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const FooterContainer = styled.footer`
  background-color: #4B2E2E;
  color: #ffffff;
  padding: 1rem 0 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: rgb(234, 40, 30);
    }
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.75rem;
      
      a {
        color: #E0E0E0;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: rgb(234, 40, 30);
        }
      }
    }
  }
  
  .contact-info {
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      
      .icon {
        color: rgb(234, 40, 30);
        margin-right: 1rem;
        margin-top: 0.25rem;
      }
      
      .text {
        p {
          margin-bottom: 0.25rem;
        }
      }
    }
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-radius: 50%;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: rgb(234, 40, 30);
        transform: translateY(-3px);
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  color: #E0E0E0;
  font-size: 0.9rem;
`;

function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('products'), path: '/products' },
    { name: t('certificates'), path: '/certificates' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <h3>MivaChocolate</h3>
            <p>
              Premium quality chocolate crafted with passion since 2003. 
              We combine traditional techniques with modern innovation to 
              create unforgettable chocolate experiences.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </FooterColumn>
          
          <FooterColumn>
            <h3>{t('quickLinks')}</h3>
            <ul>
              {navLinks.map(link => (
                <li key={link.path}>
                  <RouterLink to={link.path}>{link.name}</RouterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>{t('contactInformation')}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <p>+90 212 555 11 22</p>
                  <p>{t('customerService')}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <p>İstanbul, Turkey</p>
                  <p>{t('headOffice')}</p>
                </div>
              </div>
            </div>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} MivaChocolate. {t('rightsReserved')}</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
}

export default Footer;