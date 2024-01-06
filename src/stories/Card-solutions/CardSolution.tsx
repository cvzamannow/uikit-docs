'use client';

import Font from '../assets/Font/Font';
import {
  Card,
  Logo,
  Tittle,
  Description,
  Padding,
} from './CardSolution.style';

export interface CardProps {
  /**
   * Insert Logo svg from figma
   */
  logo?: JSX.Element;
  /**
   * For the title card
   */
  tittle?: string;
  /**
   * For card description
   */
  description?: string;
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
}

export default function CardSolution({
  logo,
  tittle,
  description,
  style,
}: CardProps) {
  return (
    <>
    <Font />
    <Card style={style}>
      <Padding>
        <Logo>{logo}</Logo>
        <Tittle>{tittle}</Tittle>
        <Description>{description}</Description>
      </Padding>
    </Card>
    </>
  );
}
