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
  icon: JSX.Element;
  /**
   * For the title card
   */
  tittle: string;
  /**
   * For card description
   */
  description: string;
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
}

export default function CardSolution({
  icon,
  tittle,
  description,
  style,
}: CardProps) {
  return (
    <>
    <Font />
    <Card style={style}>
      <Padding>
        <Logo>{icon}</Logo>
        <Tittle>{tittle}</Tittle>
        <Description>{description}</Description>
      </Padding>
    </Card>
    </>
  );
}
