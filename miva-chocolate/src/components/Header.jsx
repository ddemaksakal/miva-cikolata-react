import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

// --- Styled Components ---

const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

// GOAL 3: TopBar artık tam genişlikli bir çizgi/gölge sarmalayıcısı
const TopBar = styled.div`
  border-bottom: 1px solid rgba(12, 154, 255, 0.29);
  box-shadow: 0 2px 2px rgba(0,0,0,0.05);
`;

// YENİ: TopBar'ın içeriğini .container içinde sarmalamak için
const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 85px;
    width: auto;
  }
`;

// YENİ (GOAL 1): İletişim ve Dil seçicisini gruplamak için
const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; // ContactInfo'daki gap ile aynı
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  /* Öneri: Tablet boyutlarında gizlenebilir */
  @media (max-width: 992px) {
    display: none;
  }
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
  color:rgb(234, 40, 30);
  font-size: 1.2rem;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? '#D4AF37' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#3E2723'};
  border: 2px solidrgb(237, 118, 85);
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
    background:rgb(234, 40, 30);
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`;

// GOAL 2 & 3: Navbar artık flex stilleri olmayan tam genişlikli bir sarmalayıcı
const Navbar = styled.nav`
  /* Orijinal flex, justify-content, padding stilleri kaldırıldı */
  background-color: #ffffff; /* Arka plan rengi eklendi (eğer TopBar'dan ayrıysa) */
`;

// YENİ: Navbar içeriğini .container içinde sarmalamak için
// GOAL 2: justify-content menüyü sola, mobil ikonu sağa iter
const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0; /* Tarayıcı varsayılanlarını sıfırla */
  padding: 0; /* Tarayıcı varsayılanlarını sıfırla */
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    background-color: #ffffff;
    top: 150px; /* Bu değeri üst çubukların toplam yüksekliğine göre ayarlamanız gerekebilir */
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
  font-weight: 600;
  color: #3E2723;
  text-decoration: none;
  padding: 1rem 1rem;
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

// --- React Component ---

function Header() {
  const { t, language, changeLanguage } = useLanguage();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // --- Değiştirilmiş JSX Yapısı ---
  return (
    <HeaderContainer>
      {/* GOAL 3: TopBar artık .container dışında, tam genişlikte */}
      <TopBar>
        <div className="container">
          <TopBarContent>
            <LogoContainer>
              <Logo to="/">
                <img src="/images/miva-chocolate-logo.jpg" alt="Miva Çikolata Logo" />
              </Logo>
            </LogoContainer>
            
            {/* GOAL 1: İletişim ve Dil yeni TopBarRight içinde gruplandı */}
            <TopBarRight>
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
            </TopBarRight>
          </TopBarContent>
        </div>
      </TopBar>
      
      {/* GOAL 3: Navbar artık .container dışında, tam genişlikte */}
      <Navbar>
        <div className="container">
          <NavbarContent>
            {/* GOAL 2: NavMenu artık solda (space-between'in ilk elemanı) */}
            {/* Ekstra div sarmalayıcısı kaldırıldı */}
            <NavMenu className={click ? 'active' : ''}>
              <NavItem>
                <NavLink to="/" onClick={closeMobileMenu}>
                  {t('home')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={closeMobileMenu}>
                  {t('about')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products" onClick={closeMobileMenu}>
                  {t('products')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" onClick={closeMobileMenu}>
                  {t('contact')}
                </NavLink>
              </NavItem>
            </NavMenu>
            
            {/* MobileToggle sağda kalır (space-between'in ikinci elemanı) */}
            <MobileToggle onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </MobileToggle>
          </NavbarContent>
        </div>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;