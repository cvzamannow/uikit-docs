import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSolution from './CardSolution';

describe('CardSolution Component', () => {
  const sampleIcon = <svg>...</svg>;

  it('renders card with provided data', () => {
    render(
      <CardSolution
        icon={sampleIcon}
        tittle="Sample Title"
        description="Sample Description"
      />,
    );

    const titleElement = screen.getByText('Sample Title');
    const descriptionElement = screen.getByText('Sample Description');
    const iconElement = screen.getByTestId('icon');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('renders card with provided icon', () => {
    render(
      <CardSolution
        icon={sampleIcon}
        tittle="Sample Title"
        description="Sample Description"
      />,
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });
});
