import operate from './operate';

function isNumber(item) {
  return typeof item === 'number';
}

/**
  * Given a button name and a calculator data object, return an updated
  * calculator data object.
  *
  * Calculator data object contains:
  *   total:s      the running total
  *   next:String       the next number to be operated on with the total
  *   operation:String  +, -, etc.
  */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: 0,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName.toString() === '0' && obj.next.toString() === '0') {
      return { next: 0, total: obj.total, operation: obj.operation };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return (
          { next: obj.next + buttonName.toString(), operation: obj.operation, total: obj.total }
        );
      }
      return { next: buttonName, operation: obj.operation, total: obj.total };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName.toString(),
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.toString().includes('.')) {
        return { total: obj.total, next: obj.next, operation: obj.operation };
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.next.toString().includes('.')) {
        return { total: obj.total, next: obj.next, operation: obj.operation };
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: null,
        next: operate(obj.total, obj.next, obj.operation),
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return { next: 0 };
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return { next: 0 };
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  if (!obj.next && !obj.total) {
    return { next: 0 };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
