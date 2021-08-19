import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header render components test', () => {
  it('Header should render Home', () => {
    render(
      <Router>
        <Header />
      </Router>,

    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
