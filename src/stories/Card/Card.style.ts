import styled, { keyframes } from 'styled-components';

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const Padding = styled.div`
  
`;

export const ArticleCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;

  &:hover img {
    transform: scale(1.1);
    z-index: -2;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ease-in-out 0.2s; /* Animation */
  animation: ${scaleAnimation} ease-in-out 0.2s;
`;

export const ContentCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(180deg, rgba(33, 31, 32, 0.9) -2.3%, rgba(33, 31, 32, 0.75605) -2.3%, rgba(17, 6, 15, 0.117) -2.3%, rgba(0, 0, 0, 0.9) 100%);
  z-index: 1;
`;