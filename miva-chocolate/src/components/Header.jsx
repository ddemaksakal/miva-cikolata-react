import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(RouterLink)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #4B2E2E;
  text-decoration: none;
  
  span {
    color: #D4AF37;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #3E2723;
`;

const ContactIcon = styled.span`
  color: #D4AF37;
  font-size: 1.2rem;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? '#D4AF37' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#3E2723'};
  border: 2px solid #D4AF37;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.active ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)'};
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.3);
  }
  
  &.active {
    background: #D4AF37;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    background-color: #ffffff;
    top: 120px;
    left: -100%;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 2rem 0;
    
    &.active {
      left: 0;
    }
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(RouterLink)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #3E2723;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &.active, &:hover {
    color: #D4AF37;
    background-color: rgba(212, 175, 55, 0.1);
  }
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    padding: 1rem;
  }
`;

const MobileToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    width: 25px;
    height: 3px;
    background-color: #4B2E2E;
    margin: 3px 0;
    transition: 0.3s;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

function Header() {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState('TR'); // Default language is now Turkish
  
  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Save the preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <TopBar>
          <LogoContainer>
            <Logo to="/">
              Miva<span>Chocolate</span>
            </Logo>
          </LogoContainer>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <span>+90 216 123 45 67</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <span>Kartal / Istanbul</span>
            </ContactItem>
          </ContactInfo>
          <LanguageSelector>
            <LanguageButton 
              active={language === 'TR'} 
              onClick={() => changeLanguage('TR')}
              className={language === 'TR' ? 'active' : ''}
              aria-label="Türkçe diline geç"
            >
              TR
            </LanguageButton>
            <LanguageButton 
              active={language === 'EN'} 
              onClick={() => changeLanguage('EN')}
              className={language === 'EN' ? 'active' : ''}
              aria-label="Switch to English"
            >
              EN
            </LanguageButton>
          </LanguageSelector>
        </TopBar>
        <Navbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavMenu className={click ? 'active' : ''}>
              <NavItem>
                <NavLink to="/" onClick={closeMobileMenu}>
                  {language === 'TR' ? 'Ana Sayfa' : 'Home'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={closeMobileMenu}>
                  {language === 'TR' ? 'Hakkımızda' : 'About'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products" onClick={closeMobileMenu}>
                  {language === 'TR' ? 'Ürünler' : 'Products'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/certificates" onClick={closeMobileMenu}>
                  {language === 'TR' ? 'Sertifikalar' : 'Certificates'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" onClick={closeMobileMenu}>
                  {language === 'TR' ? 'İletişim' : 'Contact'}
                </NavLink>
              </NavItem>
            </NavMenu>
          </div>
          <MobileToggle onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </MobileToggle>
        </Navbar>
      </div>
    </HeaderContainer>
  );
}

export default Header;