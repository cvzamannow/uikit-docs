'use client';

import { ArticleCard, ArticleImage, ContentCard } from './Card.style';

export interface CardProps {
  /**
   * Content in card
   */
  children: React.ReactNode;
  /**
   * Insert padding according to the existing design
   * `"top right bottom left"`
   */
  padding?: string;
  /**
   * Image in card
   */
  background?: string;
  /**
   * Enter the card type linear-gradient, "general" or "blog"
   */
  linearGradient?: 'general' | 'blog';
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
}

export default function Card({
  children,
  background,
  style,
  linearGradient= "general",
  padding,
  ...props
}: CardProps) {
  return (
    <>
      <ArticleCard style={style}>
        <ContentCard linearGradient={linearGradient} padding={padding}>
          {children}
        </ContentCard>
        <ArticleImage src={background} alt="img" />
      </ArticleCard>
    </>
  );
}
