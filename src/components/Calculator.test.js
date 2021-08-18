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

// describe('Test click component', () => {
//   const mockHandleClick = jest.fn();
//   const component = render(<Calculator />);
//   const divButton = component.getAllByRole('button')[0];
//   test('Testing MainContainer component render and call an event click', () => {
//     fireEvent.click(divButton);
//     expect(mockHandleClick.mock.calls.length).toBe(1);
//   });
// });
