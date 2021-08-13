import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import calcDisplay from '../logic/display';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: 0,
    operation: null,
  });

  const handleEvaluation = (button) => {
    const { total, next, operation } = calculate(calcObj, button);
    setCalcObj({ total, next, operation });
  };

  return (
    <div className="container">
      <div className="screen dg">{ calcDisplay(calcObj) }</div>
      <button className="lightgray" type="button" onClick={() => handleEvaluation('AC')}>AC</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation('+/-')}>+/-</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation('%')}>%</button>
      <button className="orange" type="button" onClick={() => handleEvaluation('÷')}>÷</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(7)}>7</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(8)}>8</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(9)}>9</button>
      <button className="orange" type="button" onClick={() => handleEvaluation('x')}>x</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(4)}>4</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(5)}>5</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(6)}>6</button>
      <button className="orange" type="button" onClick={() => handleEvaluation('-')}>-</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(1)}>1</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(2)}>2</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation(3)}>3</button>
      <button className="orange" type="button" onClick={() => handleEvaluation('+')}>+</button>
      <button className="lightgray" type="button" id="zero" onClick={() => handleEvaluation(0)}>0</button>
      <button className="lightgray" type="button" onClick={() => handleEvaluation('.')}>.</button>
      <button className="orange" type="button" onClick={() => handleEvaluation('=')}>=</button>
    </div>
  );
};

export default Calculator;
