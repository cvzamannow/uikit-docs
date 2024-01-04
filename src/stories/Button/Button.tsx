'use client';
import Link from 'next/link';
import { StyledButton } from './Button.style';
import { useState } from 'react';

export interface ButtonProps {
  Type?: "primary" | "secondary";
  Text?: string;
  href?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Button({ Type="primary", Text, href, style, ...props }: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${Type}`
  return (
    <Link href={href || '/'}>
      <StyledButton className={['button', mode].join(" ")} disabled={isDisabled} style={style} {...props}>
        {Text}
      </StyledButton>
    </Link>
  );
}
