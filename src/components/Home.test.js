import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Calculator render components test', () => {
  it('Calculator should render Welcome to our page', () => {
    render(
      <Home />,
    );
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
  });
});
