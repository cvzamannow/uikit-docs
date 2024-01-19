import React from 'react';
import {
  getByAltText,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import Page from '../page';

describe('Test blog detail page', () => {
  it('Should render Text blog detail', () => {
    const { getByText } = render(<Page />);

    const pageTitle = getByText(
      'How Digital Product & Design Can Contribute to a More Sustainable Travel Experience',
    );
    const pageImage = screen.getByAltText('Image Example');
    const pageIdHead = screen.getByTestId('head-detail-blog');
    const pageIdImage = screen.getByTestId('image-detail-blog');
    const pageIdDescription = screen.getByTestId('description-detail-blog');

    expect(pageTitle).toBeInTheDocument();
    expect(pageImage).toBeInTheDocument();
    expect(pageIdHead).toBeInTheDocument();
    expect(pageIdImage).toBeInTheDocument();
    expect(pageIdDescription).toBeInTheDocument();
  });
});
