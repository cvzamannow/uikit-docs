import styled from 'styled-components';

export const Padding = styled.div`
  width: 100%;
  padding: 0 16px;
  @media (width >= 768px) {
    padding: 0 100px;
  }
`;

export const ContentContainer = styled.div`
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  align-items: center;
  color: #000000b6;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #4287f5;
  height: 50vh;
`;