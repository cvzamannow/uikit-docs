import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ListLink, ListItem } from './navbar.style';
import React from 'react';

export default function Menu() {
  const pathName = usePathname();

  return (
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
  );
}
