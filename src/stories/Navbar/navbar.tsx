import React from 'react';
import { useState } from 'react';
import PaddingContainer from '../PaddingContainer/paddingContainer';
import {
  Nav,
  NavWrapper,
  HamburgerContainer,
  HamburgerIcon,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
  Paper,
} from './navbar.style';
import LinkComponent from './link';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Paper>
    <Nav>
      <PaddingContainer>
        <NavWrapper>
          <LinkComponent isVisible={isShow} />
          <HamburgerContainer>
            <HamburgerIcon onClick={handleShow} data-testid="hamburger-icon">
              <FirstSpan $isShow={isShow}></FirstSpan>
              <SecondSpan $isShow={isShow}></SecondSpan>
              <ThirdSpan $isShow={isShow}></ThirdSpan>
            </HamburgerIcon>
          </HamburgerContainer>
        </NavWrapper>
      </PaddingContainer>
    </Nav></Paper>
  );
}
