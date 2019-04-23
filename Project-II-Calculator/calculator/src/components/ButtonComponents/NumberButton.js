import React, { Component } from 'react';
import './Button.css';

class NumberButton extends Component {

  render() {
    const button = this.props.numButton.map((num, i) => {
      return <button key={i} className={num.buttonStyle} onClick={this.props.onClick}>{num.text}</button>
    });
    return (
      <div className="numbers-container">
        {button}
      </div>
    );
  }
}

export default NumberButton;
