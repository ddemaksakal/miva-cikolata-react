import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  /* Reset and base styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }

  h1 {
    font-size: 2.5rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: ${theme.spacing.sm};
    font-size: 1rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.1rem;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.secondary};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.accent};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${theme.spacing.sm};
    padding-left: ${theme.spacing.lg};
  }

  li {
    margin-bottom: ${theme.spacing.xs};
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.secondary};
    border: none;
    transition: all 0.3s ease;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.sm};
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 0 ${theme.spacing.md};
    }
  }

  .section {
    padding: ${theme.spacing.xl} 0;
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacing.xxl} 0;
    }
  }

  .btn {
    display: inline-block;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.small};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background-color: transparent;
      color: ${theme.colors.primary};
    }
    
    &--secondary {
      background-color: ${theme.colors.secondary};
      border-color: ${theme.colors.secondary};
      
      &:hover {
        background-color: transparent;
        color: ${theme.colors.secondary};
      }
    }
    
    &--accent {
      background-color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
      
      &:hover {
        background-color: transparent;
        color: ${theme.colors.accent};
      }
    }
  }
`;

export default GlobalStyles;