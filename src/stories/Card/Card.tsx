'use client';

import { ArticleCard, ArticleImage, Padding, ContentCard } from "./Card.style";


export interface CardProps {
    Content?: JSX.Element;
    img?: string;
    style?: React.CSSProperties;
}


export default function Card({ Content, img, style, ...props}:CardProps) {
    return(
    <Padding>
        <ArticleCard style={style}>
          <ContentCard>
            {Content}
          </ContentCard>
          <ArticleImage
            src={img}
            alt="article-cover"
          />
        </ArticleCard>
    </Padding>
    );
}