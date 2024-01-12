'use client';
import React from 'react';
import {
  Card,
  Icon,
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
      <Card style={style} data-testid={'icon'}>
        <Padding>
          <Icon>{icon}</Icon>
          <Tittle
            color="#2d2d2d"
            family="Satoshi"
            tag="div"
            type="subtitle1"
            weight="700"
            styles={{ 
              paddingTop: "20px",
              paddingBottom: "20px"
             }}     
          >{tittle}</Tittle>
          <Description
            color="#516371"
            family="Satoshi"
            tag="div"
            type="regular1"
            weight="400"
            styles={{ 
              padding: "0px",
             }}  
          >{description}</Description>
        </Padding>
      </Card>
    </>
  );
}
