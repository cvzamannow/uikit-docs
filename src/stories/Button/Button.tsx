'use client';
import Link from 'next/link';
import { StyledButton } from './Button.style';
import { useState } from 'react';
import React from 'react';

export interface ButtonProps {
  /**
   * Enter the button type "primary" or "secondary"
   */
  type: 'primary' | 'secondary';
  /**
   * Enter content button
   */
  children: React.ReactNode;
  /**
   * Insert padding according to the existing design
   * `"top right bottom left"`
   */
  padding?: string;
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

export default function Button({
  type = 'primary',
  children,
  padding= "16px 32px 16px 32px",
  href,
  style,
  ...props
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${type}`;
  return (
    <>
      <Link href={href || ''}>
        <StyledButton
          data-testid={`button--${type}`}
          padding={padding}
          type={type}
          className={['button', mode].join(' ')}
          disabled={isDisabled}
          style={style}
          {...props}
        >
          {children}
        </StyledButton>
      </Link>
    </>
  );
}
