'use client';
import Link from 'next/link';
import { StyledButton } from './Button.style';
import { useState } from 'react';

export interface ButtonProps {
  /**
   * Enter the button type "primary" or "secondary"
   */
  type: 'primary' | 'secondary';
  /**
   * Enter content button
   */
  content: string;
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
  content,
  href,
  style,
  ...props
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${type}`;
  return (
    <>
      <Link href={href || '/'}>
        <StyledButton
          data-testid={`button--${type}`}
          className={['button', mode].join(' ')}
          disabled={isDisabled}
          style={style}
          {...props}
        >
          {content}
        </StyledButton>
      </Link>
    </>
  );
}
