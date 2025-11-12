import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const ContactContainer = styled.div`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PageHeader = styled.div`
  background: linear-gradient(rgba(75, 46, 46, 0.8), rgba(75, 46, 46, 0.8)), 
              url('/images/contact-header.jpg') center/cover no-repeat;
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h2 {
    margin-bottom: 1.5rem;
    color: #4B2E2E;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #3E2723;
    }
    
    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: #D4AF37;
      }
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }
  
  button {
    background-color: #D4AF37;
    color: #ffffff;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #75674C;
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
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <PageHeader>
        <h1>{t('contact')}</h1>
      </PageHeader>
      
      <div className="container">
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <h2>{t('contactUs')}</h2>
            <p>{t('contactUsText')}</p>
            
            <div className="form-group">
              <label htmlFor="name">{t('fullName')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit">{t('sendMessage')}</button>
          </ContactForm>
          
          <ContactInfo>
            <h2>{t('contactInfo')}</h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <h3>{t('phone')}</h3>
                  <p>+90 212 555 11 22</p>
                  <p>{t('customerService')}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <h3>{t('address')}</h3>
                  <p>İstanbul, Turkey</p>
                  <p>{t('headOffice')}</p>
                </div>
              </div>
            </div>
            
            <div className="social-media">
              <h3>{t('followUs')}</h3>
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
            </div>
          </ContactInfo>
        </ContactContent>
      </div>
    </ContactContainer>
  );
}

export default Contact;