import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  MenuContainer,
  TitleContainer,
  ListLink,
  ListItem,
  Contact,
} from './navbar.style';
import Text from '../Text/text';
import React from 'react';

interface HamburgerProps {
  isVisible: boolean;
}

export default function LinkComponent({ isVisible }: HamburgerProps) {
  const pathName = usePathname();

  return (
    <>
      <TitleContainer>
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
      </TitleContainer>

      <MenuContainer $isShow={isVisible}>
        <ListLink>
          <ListItem $isSelect={pathName === '/'}>
            <Link href={'/'}>Home</Link>
          </ListItem>

          <ListItem $isSelect={pathName === '/about'}>
            <Link href={'/about'}>About Us</Link>
          </ListItem>

          <ListItem $isSelect={pathName === '/solutions'}>
            <Link href={'/solutions'}>Solutions</Link>
          </ListItem>

          <ListItem $isSelect={pathName === '/blog'}>
            <Link href={'/blog'}>Blog</Link>
          </ListItem>

          <ListItem $isSelect={pathName === '/internship'}>
            <Link href={'/internship'}>Internship</Link>
          </ListItem>
        </ListLink>

        <Contact $isMobile={true}>
          <Link data-testid="mobile-contact" href={'contact'}>
            Lets Talk
          </Link>
        </Contact>
      </MenuContainer>

      <Contact $isMobile={false}>
        <Link data-testid="dekstop-contact" href={'contact'}>
          Lets Talk
        </Link>
      </Contact>
    </>
  );
}
