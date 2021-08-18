import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

describe('operate', () => {
  test('sum of 2 + 2 must be 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('5 - 2 must be 3', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });
  test('2 x 2 must be 4', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('2 ÷ 2 must be 4', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('5 % 2 must be 1', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
});

describe('calulate', () => {
  test('the AC button should reset everything', () => {
    const obj = {
      total: 50,
      next: 30,
      operation: 'x',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: 0,
      operation: null,
    });
  });
  test('the button is 0 and next is 0 it should not change the original object', () => {
    const obj = {
      total: 50,
      next: 0,
      operation: 'x',
    };
    expect(calculate(obj, 0)).toEqual({
      total: 50,
      next: 0,
      operation: 'x',
    });
  });
  test('when number is pressed if there is an operation, update next', () => {
    const obj = {
      total: 50,
      next: 5,
      operation: 'x',
    };
    expect(calculate(obj, 0)).toEqual({
      total: 50,
      next: '50',
      operation: 'x',
    });
  });
  test('Add point to the value if there is no point', () => {
    const obj = {
      total: '30',
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({
      next: '5.',
    });
  });
  test('If there is a point return the same number', () => {
    const obj = {
      total: '30',
      next: '5.5',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({
      total: '30',
      next: '5.5',
      operation: null,
    });
  });
  test('If passes = return the operation as next', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: null,
      next: '4',
      operation: null,
    });
  });
  test('+/- changes the symbol of the next', () => {
    const obj = {
      total: 2,
      next: 2,
      operation: '+',
    };
    expect(calculate(obj, '+/-')).toEqual({
      next: '-2',
    });
  });
});
