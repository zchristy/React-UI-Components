import React, { Component } from 'react';
import './Button.css';

class ActionButton extends Component {

  render() {
    const button = this.props.actButton.map((act, i) => {
      return <button key={i} className={act.buttonStyle} onClick={this.props.onClick}>{act.text}</button>
    });
    return (
      <div className="action-container">
        {button}
      </div>
    );
  }
}

export default ActionButton;
