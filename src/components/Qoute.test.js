import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './Quote';

describe('Quote render components test', () => {
  it('Quote should render the quote', () => {
    render(
      <Quote />,
    );
    expect(screen.getByText('Mathematics is not about numbers, equiations, computations, or algorithms: it is about understanding. -William Paul Thurston')).toBeInTheDocument();
  });
});
