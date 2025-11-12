import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(75, 46, 46, 0.7), rgba(75, 46, 46, 0.7)), 
              url('/images/hero-bg.jpg') center/cover no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 3rem 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  
  h1 {
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    
    span {
      color: #D4AF37;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

function SimpleHome() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Premium <span>Chocolate</span> Crafted with Passion</h1>
          <p>
            Discover the exquisite taste of Miva Chocolate, where tradition meets innovation 
            to create unforgettable chocolate experiences for both businesses and consumers.
          </p>
          <RouterLink to="/products" className="btn btn--accent">
            Explore Our Products
          </RouterLink>
        </HeroContent>
      </HeroSection>
    </HomeContainer>
  );
}

export default SimpleHome;