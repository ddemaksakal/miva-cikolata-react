import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const ContactContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
`;

// Hero/Banner Section
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 320px;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
              url('/images/contact-header.jpg') center/cover no-repeat;
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

// Info Cards Section - Overlapping with hero
const InfoCardsSection = styled.section`
  position: relative;
  margin-top: -80px;
  z-index: 10;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 0 1rem;
  }
  
  .cards-container {
    max-width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 3rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 2rem 1.5rem;
    }
  }
`;

const InfoCard = styled.div`
  text-align: center;
  
  .icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgb(234, 40, 30), rgb(237, 118, 85));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
    }
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #3E2723;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #757575;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

const ContactForm = styled.form`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #4B2E2E;
    margin-bottom: 2rem;
    font-family: 'Playfair Display', serif;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #3E2723;
      font-size: 0.95rem;
    }
    
    input,
    textarea {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #fafafa;
      
      &:focus {
        outline: none;
        border-color: rgb(234, 40, 30);
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(234, 40, 30, 0.1);
      }
      
      &::placeholder {
        color: #b0b0b0;
      }
    }
    
    textarea {
      min-height: 120px;
      resize: vertical;
    }
  }
  
  button {
    background: linear-gradient(135deg, rgb(234, 40, 30), rgb(237, 118, 85));
    color: #ffffff;
    border: none;
    padding: 0.875rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(234, 40, 30, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(234, 40, 30, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const MapContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 400px;
    border: none;
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

const AboutSection = styled.div`
  background-color: #F5F5DC;
  padding: 3rem 0;
  margin-bottom: 3rem;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    h2 {
      text-align: center;
      color: #4B2E2E;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    
    p {
      text-align: center;
      color: #757575;
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    color: #4B2E2E;
  }
  
  .contact-details {
    margin-bottom: 2rem;
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
      
      .icon {
        color: #D4AF37;
        font-size: 1.25rem;
        margin-right: 1rem;
        margin-top: 0.25rem;
      }
      
      .text {
        h3 {
          margin-bottom: 0.25rem;
          color: #3E2723;
        }
        
        p {
          color: #757575;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
  
  .map-container {
    margin-bottom: 2rem;
    
    iframe {
      width: 100%;
      height: 300px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  }
  
  .social-media {
    h3 {
      margin-bottom: 1rem;
      color: #3E2723;
    }
    
    .social-icons {
      display: flex;
      gap: 1rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #F5F5DC;
        color: #75674C;
        border-radius: 50%;
        transition: all 0.3s ease;
        
        &:hover {
          background-color: #D4AF37;
          color: #ffffff;
          transform: translateY(-3px);
        }
      }
    }
  }
`;

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Lütfen adınız ve email adresinizi doldurun.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Lütfen geçerli bir email adresi girin.');
      return;
    }
    
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      {/* Hero Section */}
      <HeroSection>
        <div className="hero-content">
          <h1>{t('contact')}</h1>
          <p>2003'ten beri kaliteli ve lezzetli çikolata ürünleri üretiyoruz.</p>
        </div>
      </HeroSection>

      {/* Info Cards Section */}
      <InfoCardsSection>
        <div className="cards-container">
          <InfoCard>
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <h3>{t('address')}</h3>
            <p>İstanbul, Turkey</p>
            <p>{t('headOffice')}</p>
          </InfoCard>

          <InfoCard>
            <div className="icon">
              <FaPhone />
            </div>
            <h3>{t('phone')}</h3>
            <p>+90 212 555 11 22</p>
            <p>{t('customerService')}</p>
          </InfoCard>

          <InfoCard>
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>info@miva-chocolate.com</p>
          </InfoCard>
        </div>
      </InfoCardsSection>

      {/* Main Content Section */}
      <MainContent>
        <div className="content-container">
          <ContactForm onSubmit={handleSubmit}>
            <h2>Mesaj Gönderin</h2>

            <div className="form-group">
              <label htmlFor="name">{t('fullName')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="İsim ve Soyisim"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('email')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Adresi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon Numarası"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız"
              ></textarea>
            </div>

            <button type="submit">{t('sendMessage')}</button>
          </ContactForm>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0000000000005!2d28.978400000000002!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be7c7d5c5f%3A0x2e0b0c0c0c0c0c0c!2s%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miva Chocolate Location"
            ></iframe>
          </MapContainer>
        </div>
      </MainContent>
    </ContactContainer>
  );
}

export default Contact;