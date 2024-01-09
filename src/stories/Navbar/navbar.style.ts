import styled from 'styled-components';

export const Paper = styled.div`
  max-width: 1440px;
  background-color: blue;
  height: 99px;
`;

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
  top: 0;
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 19px 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  @media (width >= 1444px) {
    width: 1120px;
    margin: auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #383838;
  }
`;

export const MenuContainer = styled.div<{ $isShow: boolean }>`
  display: flex;
  justify-content: space-between;
  @media (width <= 954px) {
    display: block;
    padding: 16px 0 24px 0;
    overflow: hidden;
    position: absolute;
    background-color: #2d2d2d;
    height: auto;
    width: 320px;
    top: 70px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    right: ${(props) => (props.$isShow ? '0' : '-800px')};
    z-index: 10;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media (width <= 954px) {
    flex-direction: column;
    align-items: baseline;
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

export const ListItem = styled.li<{ $isSelect: boolean }>`
  margin: 0 16px;
  @media (width <= 954px) {
    margin: 0px;
    width: 100%;
  }
  a {
    font-size: 16px;
    font-family: Inter, sans-serif;
    color: ${(param) => (param.$isSelect == true ? '#383838' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    &:hover {
      color: ${(param) => (param.$isSelect == true ? '#383838' : '#383838')};
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    }
    @media (width <= 954px) {
      display: block;
      width: 100%;
      padding: 8px 0 8px 16px;
      color: white;
      background-color: ${(props) => (props.$isSelect ? '#525252' : '')};
      &:hover {
        background-color: ${(param) =>
          param.$isSelect == true ? '' : '#3d3d3d'};
        text-decoration: none;
        color: white;
        font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
      }
    }
  }
`;

export const Contact = styled.div<{ $isMobile: boolean }>`
  a {
    font-family: Inter, sans-serif;
    font-size: 16px;
    border-radius: 32px;
    color: #383838;
    background-color: white;
    text-decoration: none;
    border: 1px solid #383838;
    padding: 9px 22px;
    display: ${(props) => (props.$isMobile ? 'none' : 'inline')};
    margin: 0 0 0 16px;
    &:hover {
      background-color: #383838;
      color: white;
      transition: 0.3s;
    }
    @media (width <= 954px) {
      display: ${(props) => (props.$isMobile ? 'inline' : 'none')};
    }
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  position: relative;
  @media (width <= 954px) {
    display: flex;
  }
`;

export const HamburgerIcon = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  height: auto;
  cursor: pointer;
  width: auto;
  flex-direction: column;
  @media (width <= 954px) {
    display: flex;
  }
`;

export const FirstSpan = styled.span<{ $isShow: boolean }>`
  height: 3px;
  width: 32px;
  margin: 0 0 8px 0;
  background-color: #000000;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isShow ? 'translateY(12px) rotate(45deg)' : ''};
`;

export const SecondSpan = styled.span<{ $isShow: boolean }>`
  height: 3px;
  width: 32px;
  margin: 0 0 8px 0;
  background-color: #000000;
  opacity: ${(props) => (props.$isShow ? '0' : '1')};
  transition: all 0.3s ease-in-out;
`;

export const ThirdSpan = styled.span<{ $isShow: boolean }>`
  height: 3px;
  width: 32px;
  transform: ${(props) =>
    props.$isShow ? ' translateY(-11px) rotate(-45deg)' : ''};
  background-color: #000000;
  transition: all 0.3s ease-in-out;
`;
