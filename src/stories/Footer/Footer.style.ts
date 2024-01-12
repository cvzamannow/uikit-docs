import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: auto;
  margin-top: 125px;
  width: 100%;
  @media (width >= 1444px) {
    max-width: 1420px;
  }
`;

export const WorkTogether = styled.div`
  background-color: #0041e8;
  border-radius: 32px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 40px 36px;
  @media screen and (width >= 1050px) {
    padding: 46px 45px 47px 45px;
    text-align: start;
    justify-content: space-between;
    flex-direction: row;
  }
  #work-together-content {
    h2 {
      @media (width >= 1050px) {
        margin: 0;
        margin-bottom: 8px;
        font-size: 32px;
      }
    }
    p {
      margin: 0;
      margin-top: 16px;
      word-wrap: break-word;
      word-break: break-word;
      margin-bottom: 28px;
      @media (width >= 1050px) {
        margin-bottom: 0;
        margin-top: 0;
        width: 608px;
      }
    }
  }
`;

export const WorkTogetherBg = styled.div`
  overflow: hidden;
  position: absolute;
  user-select: none;
`;

export const LetsTalkButton = styled.button`
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  gap: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #1752e9;
  outline: none;
`;

export const FooterContent = styled.div`
  margin-top: 60px;
  display: flex;
  @media screen and (width <= 1050px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FooterDigiDreams = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-right: 139px;
  h3 {
    margin: 0;
    margin-bottom: 17px;
  }
  p {
    width: 292px;
    margin-bottom: 26px;
  }
  p:hover {
    color: #516371;
  }
  @media screen and (width <= 1050px) {
    grid-column: span 2 / span 2;
    margin-bottom: 40px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      width: 100%;
      margin: 20px 0;
      color: #516371;
    }
  }
`;

export const FooterDigiDreamsIconWrapper = styled.div`
  margin-bottom: 12px;
  img {
    margin-right: 16px;
    height: 24px;
    width: 24px;
  }
`;

export const Icon = styled.svg`
  height: 25px;
  width: 25px;
  margin-right: 16px;
  color: #a7abb6;
  &:hover {
    color: #516371;
  }
  @media (width <= 1050px) {
    color: #516371;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  @media screen and (width <= 1050px) {
    margin-right: 20px;
    margin-bottom: 40px;
  }
  &#service {
    grid-column: span 2 / span 2;
  }
`;

export const FooterItems = styled.div`
  p,
  span {
    margin: 0;
    margin-bottom: 18px;
  }
  p:hover,
  span:hover {
    color: #516371;
  }
  div {
    display: flex;
    img {
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }
  &.service {
    p {
      color: #a7abb6;
      width: 100%;
    }
  }
`;

export const FooterCompanyWrapper = styled.div`
  color: #000;
  font-family: 'Asap', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FooterCopyrigt = styled.div`
  margin-top: 70px;
  padding-top: 12px;
  text-align: center;
  margin-bottom: 30px;
  p {
    line-height: 24px;
  }
  @media (width <= 1050px) {
    text-align: start;
  }
`;
