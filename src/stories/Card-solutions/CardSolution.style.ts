import Text from '../Text/text';
import styled from 'styled-components';

export const Card = styled.div`
  font-family: 'Satoshi', sans-serif;
  display: block;
  width: 360px;
  height: 270px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 10px 10px 50px 0px #0000001a;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Padding = styled.div`
  padding: 40px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
`;

export const Tittle = styled(Text)`
  font-family: 'Satoshi', sans-serif;
  color: #2d2d2d;
  font-weight: 700;
  font-size: 26px;
`;

export const Description = styled(Text)`
  font-family: 'Satoshi', sans-serif;
  color: #516371;
  font-weight: 400;
  font-size: 18px;
`;
