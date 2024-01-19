import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders card with children', () => {
    render(
      <Card linearGradient="general" background="zeta.jpg" padding="40px">
        <div>Card Content</div>
      </Card>,
    );

    const cardContent = screen.getByText('Card Content');
    expect(cardContent).toBeInTheDocument();
  });

  it('renders card with background image', () => {
    render(
      <Card linearGradient="blog" background="zeta.jpg" padding="40px">
        <div>Card Content</div>
      </Card>,
    );

    const backgroundImage = screen.getByAltText('img') as HTMLImageElement;
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage.src).toContain('zeta.jpg');
  });
});
