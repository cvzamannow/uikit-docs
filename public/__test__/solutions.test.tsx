import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../page';
import { CardSolution } from '@/components/common';

describe('renders solutions page with correct content', () => {
  it('should render Text solutions', () => {
    const { getByText } = render(<Page />);

    const pageTitle = getByText('Our Services');
    const pageDescription = getByText(
      'We offer a variety of digital services to fit the unique requirements of our clients. We will work closely with you to understand your goals and develop a customized strategy that meets your specific needs.',
    );

    expect(pageTitle).toBeInTheDocument();
    expect(pageDescription).toBeInTheDocument();
  });

  it('should render Cards component solutions', () => {
    render(
      <CardSolution
        icon={<svg>..</svg>}
        data-testid={'icon'}
        tittle="UI/UX Design"
        description="We deliver a seamless and intuitive user experience that maximizes user engagement and satisfaction."
      />,
    );

    const titleElement = screen.getByText('UI/UX Design');
    const descriptionElement = screen.getByText(
      'We deliver a seamless and intuitive user experience that maximizes user engagement and satisfaction.',
    );
    const iconElement = screen.getByTestId('icon');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
