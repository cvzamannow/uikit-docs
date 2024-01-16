import React from 'react';
import { useState } from 'react';
import PaddingContainer from '../PaddingContainer/paddingContainer';
import {
  MobileTitle,
  Nav,
  NavWrapper,
  HamburgerIcon,
  Overlay,
  Contact,
  NavOption,
  BackNav,
} from './navbar.style';
import Menu from './menu';
import Text from '../Text/text';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerImg from './assets/hamburger.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <BackNav />
      <Nav>
        <Overlay visible={isMobileMenuOpen} onClick={toggleMobileMenu}></Overlay>
        <PaddingContainer>
          <NavWrapper>
            <MobileTitle data-testid="mobile-title">
              <Link href={'/'}>
                <Text
                  tag={'h1'}
                  family="Lato"
                  weight="900"
                  color="#383838"
                  type={'subtitle2'}
                >
                  Digi Dreams
                </Text>
              </Link>
            </MobileTitle>

            <NavOption $isShow={isMobileMenuOpen}>
              <Link data-testid="dektop-&-mobile-navbar-is-show" href={'/'}>
                <Text
                  tag={'h1'}
                  family="Lato"
                  weight="900"
                  color="#383838"
                  type={'subtitle2'}
                >
                  Digi Dreams
                </Text>
              </Link>

              <Menu />

              <Contact isSelect={pathName === 'lets-talk'}>
                <Link data-testid="lets-talk" href={'lets-talk'}>
                  Lets Talk
                </Link>
              </Contact>
            </NavOption>

            <HamburgerIcon
              onClick={toggleMobileMenu}
              data-testid="hamburger-icon"
            >
              <Image src={HamburgerImg} alt="" />
            </HamburgerIcon>
          </NavWrapper>
        </PaddingContainer>
      </Nav>
    </>
  );
}
