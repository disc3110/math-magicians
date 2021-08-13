/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';
import calcDisplay from '../logic/display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {
        total: null,
        next: 0,
        operation: null,
      },
    };
  }

  handleEvaluation(button) {
    const { calcObj } = this.state;
    const { total, next, operation } = calculate(calcObj, button);
    this.setState({ calcObj: { total, next, operation } });
  }

  render() {
    const { calcObj } = this.state;
    console.log(calcObj);
    return (
      <div className="container">
        <div className="screen dg">{ calcDisplay(calcObj) }</div>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation('AC')}>AC</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation('+/-')}>+/-</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation('%')}>%</button>
        <button className="orange" type="button" onClick={() => this.handleEvaluation('÷')}>÷</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(7)}>7</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(8)}>8</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(9)}>9</button>
        <button className="orange" type="button" onClick={() => this.handleEvaluation('x')}>x</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(4)}>4</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(5)}>5</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(6)}>6</button>
        <button className="orange" type="button" onClick={() => this.handleEvaluation('-')}>-</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(1)}>1</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(2)}>2</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation(3)}>3</button>
        <button className="orange" type="button" onClick={() => this.handleEvaluation('+')}>+</button>
        <button className="lightgray" type="button" id="zero" onClick={() => this.handleEvaluation(0)}>0</button>
        <button className="lightgray" type="button" onClick={() => this.handleEvaluation('.')}>.</button>
        <button className="orange" type="button" onClick={() => this.handleEvaluation('=')}>=</button>
      </div>
    );
  }
}

export default Calculator;
