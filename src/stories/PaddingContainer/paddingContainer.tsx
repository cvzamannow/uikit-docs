import React from 'react';
import { Padding } from './paddingContainer.style';

interface PaddingProps {
  children: React.ReactNode;
}

export default function PaddingContainer({ children }: PaddingProps) {
  return <Padding>{children}</Padding>;
}
