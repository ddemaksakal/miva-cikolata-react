import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const StickyMenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(12, 154, 255, 0.29);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  z-index: 999;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '-100%'});
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavMenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(RouterLink)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #3E2723;
  text-decoration: none;
  padding: 1rem 1rem;
  border-radius: 4px;ı
  transition: all 0.3s ease;
  display: inline-block;
  
  &.active, &:hover {
    color: #EA281E;
;
    background-color: rgba(212, 175, 55, 0.1);
  }
`;

function StickyMenu() {
  const { t } = useLanguage();
  const [activePath, setActivePath] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 100px'ten fazla scroll yapıldığında sticky menüyü göster
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/products', label: t('products') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <StickyMenuContainer visible={isScrolled}>
      <NavMenuContent>
        <NavMenu>
          {menuItems.map(item => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                className={activePath === item.path ? 'active' : ''}
                onClick={() => setActivePath(item.path)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavMenuContent>
    </StickyMenuContainer>
  );
}

export default StickyMenu;
