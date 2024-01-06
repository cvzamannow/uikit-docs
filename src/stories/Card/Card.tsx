'use client';

import { ArticleCard, ArticleImage, ContentCard } from './Card.style';

export interface CardProps {
  /**
   * Content in card
   */
  Content?: JSX.Element;
  /**
   * Insert padding according to the existing design
   * `"top right bottom left"`
   */
  padding?: string;
  /**
   * Image in card
   */
  img?: string;
  /**
   * Enter the card type, "general" or "blog"
   */
  type?: 'general' | 'blog';
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
}

export default function Card({
  Content,
  img,
  style,
  type= "general",
  padding,
  ...props
}: CardProps) {
  return (
    <>
      <ArticleCard style={style}>
        <ContentCard type={type} padding={padding}>
          {Content}
        </ContentCard>
        <ArticleImage src={img} alt="img" />
      </ArticleCard>
    </>
  );
}
