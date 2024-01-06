'use client';
import Link from 'next/link';
import { StyledButton } from './Button.style';
import { useState } from 'react';
import Font from '../assets/Font/Font';

export interface ButtonProps {
  /**
   * Enter the button type "primary" or "secondary"
   */
  Type?: "primary" | "secondary";
  /**
   * Enter text button
   */
  Text?: string;
  /** 
   * Leading to where
  */
  href?: string;
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
  /**
   * Action
   */
  onClick?: () => void;
}

export default function Button({ Type="primary", Text, href, style, ...props }: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${Type}`
  return (
    <>
      <Font/>
      <Link href={href || '/'}>
        <StyledButton className={['button', mode].join(" ")} disabled={isDisabled} style={style} {...props}>
          {Text}
        </StyledButton>
      </Link>
    </>
  );
}
