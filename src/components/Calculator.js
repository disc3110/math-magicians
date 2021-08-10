/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="screen dg">0</div>
        <button className="lightgray" type="button">AC</button>
        <button className="lightgray" type="button">+/-</button>
        <button className="lightgray" type="button">%</button>
        <button className="orange" type="button">+</button>
        <button className="lightgray" type="button">7</button>
        <button className="lightgray" type="button">8</button>
        <button className="lightgray" type="button">9</button>
        <button className="orange" type="button">x</button>
        <button className="lightgray" type="button">4</button>
        <button className="lightgray" type="button">5</button>
        <button className="lightgray" type="button">6</button>
        <button className="orange" type="button">-</button>
        <button className="lightgray" type="button">1</button>
        <button className="lightgray" type="button">2</button>
        <button className="lightgray" type="button">3</button>
        <button className="orange" type="button">/</button>
        <button className="lightgray" type="button" id="zero">0</button>
        <button className="lightgray" type="button">.</button>
        <button className="orange" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
