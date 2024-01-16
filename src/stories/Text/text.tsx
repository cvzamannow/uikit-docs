import React, { ElementType } from 'react';
import { TextComponent } from './text.style';

enum FontSize {
  tiny = '12px',
  small = '14px',
  regular2 = '16px',
  regular1 = '18px',
  subtitle4 = '20px',
  subtitle3 = '22px',
  subtitle2 = '24px',
  subtitle1 = '26px',
  title3 = '32px',
  title2 = '37px',
  title1 = '40px',
  headline2 = '64px',
  headline1 = '72px',
}

type FontFamily = 'Poppins' | 'Inter' | 'Lato' | 'Asap' | 'Satoshi';

export interface TextProps {
  /**
   * text want to display
   */
  children: React.ReactNode;
  /**
   * font size for text
   */
  type: keyof typeof FontSize;
  /**
   * wrapping tag for text
   */
  tag: ElementType;
  /**
   * font family for text
   */
  family: FontFamily;
  /**
   * font color for text
   */
  color: string;
  /**
   * font weight for text
   */
  weight: string;
  /**
   * additional styles if needed
   */
  styles?: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
export default function Text({
  children,
  type,
  tag,
  color,
  weight,
  family,
  styles,
}: TextProps) {
  return (
    <TextComponent
      as={tag}
      size={FontSize[type]}
      color={color}
      weight={weight}
      family={family}
      style={styles}
    >
      {children}
    </TextComponent>
  );
}