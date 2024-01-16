import styled from 'styled-components';

export const BackNav = styled.div`
  width: 100px;
  height: 100px;
`

export const Nav = styled.nav`
  width: 100vw;
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
`;

export const MobileTitle = styled.div`
  display: none;
  @media (width <= 954px) {
    display: flex;
  }
  a {
    text-decoration: none;
    color: #383838;
  }
`;

export const NavOption = styled.div<{ $isShow: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (width <= 954px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16px 0 24px 0;
    overflow: hidden;
    position: absolute;
    background-color: #ffffff;
    height: 100vh;
    width: 250px;
    top: 0;
    transition: all 0.4s ease-in-out;
    left: ${(props) => (props.$isShow ? '-16px' : '-800px')};
    z-index: 20;
  }
  @media (width >= 768px) {
    left: ${(props) => (props.$isShow ? '-100px' : '-800px')};
  }
  a {
    padding: 11px 0 0 16px;
    display: block;
    text-decoration: none;
    @media (width >= 954px) {
      padding: 0;
    }
  }
`;

export const Overlay = styled.div<{ visible: boolean }>`
  display: none;
  @media (width <= 954px) {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 15;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media (width <= 954px) {
    flex-direction: column;
    align-items: baseline;
    margin: 20px 0 18px 0;
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
    color: ${(param) => (param.$isSelect ? '#383838' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
    &:hover {
      color: #383838;
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
    }
    @media (width <= 954px) {
      display: block;
      width: 100%;
      padding: 8px 0 8px 16px;
      color: #383838;
      background-color: ${(props) => (props.$isSelect ? '#D9D9D9' : '')};
      &:hover {
        background-color: ${(param) =>
          param.$isSelect == true ? '' : '#F2F1F1'};
        text-decoration: none;
        font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
      }
    }
  }
`;

export const Contact = styled.div<{ isSelect: boolean }>`
  a {
    font-family: Inter, sans-serif;
    font-size: 16px;
    border-radius: 32px;
    color: #383838;
    background-color: ${(props) => (props.isSelect ? '#383838' : 'white')};
    text-decoration: none;
    border: 1px solid #383838;
    padding: 9px 22px;
    display: flex;
    &:hover {
      background-color: #383838;
      color: white;
      transition: 0.3s;
    }
    @media (width <= 954px) {
      margin: 0 0 0 16px;
    }
  }
`;

export const HamburgerIcon = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  transition: all 0.3s ease-in;
  @media (width <= 954px) {
    display: flex;

    &:hover {
      background-color: #c2c3c4;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.96);
    }
  }
`;
