/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Calculator render components test', () => {
  it('Calculator should render Lets do some math', () => {
    render(
      <Calculator />,
    );
    expect(screen.getByText('Lets do some math')).toBeInTheDocument();
  });
});

describe('Calculator render operators', () => {
  it('Calculator should render +', () => {
    render(
      <Calculator />,
    );
    expect(screen.getByText('+')).toBeInTheDocument();
  });
  it('Calculator should render -', () => {
    render(
      <Calculator />,
    );
    expect(screen.getByText('-')).toBeInTheDocument();
  });
  it('Calculator should render ÷', () => {
    render(
      <Calculator />,
    );
    expect(screen.getByText('÷')).toBeInTheDocument();
  });
  it('Calculator should render x', () => {
    render(
      <Calculator />,
    );
    expect(screen.getByText('x')).toBeInTheDocument();
  });
});

describe('Test button creation and event handling', () => {
  const Button = ({ onClick, children }) => (
    <button type="button" onClick={onClick}>{children}</button>
  );
  test('Test click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>AC</Button>);
    fireEvent.click(screen.getByText(/AC/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
