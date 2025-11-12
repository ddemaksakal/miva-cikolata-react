import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.section`
  position: relative;
  height: 80vh;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(75, 46, 46, 0.7), rgba(75, 46, 46, 0.7)), 
              url(${props => props.image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 3rem 0;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;

const SlideContent = styled.div`
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
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#D4AF37' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(75, 46, 46, 0.5);
  color: #ffffff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(75, 46, 46, 0.8);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

function Slider({ onExploreClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Banner images from the images directory
  const slides = [
    {
      image: '/images/banner1.jpg',
      title: 'Premium <span>Chocolate</span> Crafted with Passion',
      description: 'Discover the exquisite taste of Miva Chocolate, where tradition meets innovation to create unforgettable chocolate experiences for both businesses and consumers.'
    },
    {
      image: '/images/banner2.jpg',
      title: 'Exquisite <span>Chocolate Creations</span> for Every Occasion',
      description: 'Our premium chocolate products add the perfect touch of luxury to your desserts, baked goods, and confections.'
    },
    {
      image: '/images/banner3.jpg',
      title: 'Rich <span>Flavors</span> for Culinary Excellence',
      description: 'Elevate your desserts and beverages with our artisanal chocolate products, crafted for professional chefs and home cooks alike.'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide 
          key={index} 
          image={slide.image} 
          active={index === currentSlide}
        >
          <SlideContent>
            <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
            <p>{slide.description}</p>
            <button className="btn btn--accent" onClick={onExploreClick}>
              Explore Our Products
            </button>
          </SlideContent>
        </Slide>
      ))}
      
      <PrevButton onClick={goToPrevSlide}>
        &#10094;
      </PrevButton>
      <NextButton onClick={goToNextSlide}>
        &#10095;
      </NextButton>
      
      <SliderControls>
        {slides.map((_, index) => (
          <Dot 
            key={index} 
            active={index === currentSlide} 
            onClick={() => goToSlide(index)}
          />
        ))}
      </SliderControls>
    </SliderContainer>
  );
}

export default Slider;