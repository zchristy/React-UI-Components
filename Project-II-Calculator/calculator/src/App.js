import React, { Component } from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

class App extends Component {
  static defaultProps = {
    numbers: [
      {
        text: 'Clear',
        buttonStyle: 'clear'
      },
      {
        text: '<',
        buttonStyle: 'back'
      },
      {
        text: 1,
        buttonStyle: 'number'
      },
      {
        text: 2,
        buttonStyle: 'number'
      },
      {
        text: 3,
        buttonStyle: 'number'
      },
      {
        text: 4,
        buttonStyle: 'number'
      },
      {
        text: 5,
        buttonStyle: 'number'
      },
      {
        text: 6,
        buttonStyle: 'number'
      },
      {
        text: 7,
        buttonStyle: 'number'
      },
      {
        text: 8,
        buttonStyle: 'number'
      },
      {
        text: 9,
        buttonStyle: 'number'
      },
      {
        text: 0,
        buttonStyle: 'zero'
      },
      {
        text: '.',
        buttonStyle: 'dot'
      }
    ],
    actions: [
      {
        text: '÷',
        buttonStyle: 'action'
      },
      {
        text: 'x',
        buttonStyle: 'action'
      },
      {
        text: '-',
        buttonStyle: 'action'
      },
      {
        text: '+',
        buttonStyle: 'action'
      },
      {
        text: '=',
        buttonStyle: 'action'
      }
    ]
  }

  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }

  clickHandler = (event) => {

    let button = event;

    if(button === '÷') {
      button = '/';
    }

    if(button === 'x') {
      button = '*';
    }

    if(button === '=') {
      this.calculate();
    }
    else if(button === 'Clear') {
        this.reset();
    }
    else if(button === '<') {
      if(this.state.total.length <= 1) {
        this.setState({
          total: 0
        });
      } else if(this.state.total.length > 1) {
          this.setState({
            total: this.state.total.slice(0, -1)
          });
        }
    }
    else if(button === '.') {
        this.setState({
          total: this.state.total + button
        });
    }
    else {
        if(this.state.total === 0) {
          this.reset();
          this.setState({
            total: button
          });
        }
        else {
            if(document.documentElement.clientWidth > 1399) {
              if(this.state.total.length >= 14){
                alert('You have gone too far my friend... Start Over!');
                this.setState({
                  total: this.state.total
                });
              } else {
                this.setState({
                  total: this.state.total + button
                });
              }
            }
            else {
                if(this.state.total.length >= 10){
                  alert('You have gone too far my friend... Start Over!');
                  this.setState({
                    total: this.state.total
                  });
                } else {
                  this.setState({
                    total: this.state.total + button
                  });
                }
            }

        }
    }
  };

  calculate = () => {
      try {
        if(eval(this.state.total) < 0) {
          this.setState({
              total: (eval(this.state.total).toFixed(4) || '0' )
          });
        } else {
          this.setState({
              total: (eval(this.state.total) || '0' )
          });
        }

      } catch (e) {
          this.setState({
              total: "error"
          })

      }
  };

  reset = () => {
    this.setState({
      total: 0
    })
  };


  render(){

    return (
      <div className="App">
        <Display total={this.state.total}/>
        <div className="button-container">
          <NumberButton numButton={this.props.numbers} onClick={(e) => this.clickHandler(e.target.textContent)}/>
          <ActionButton actButton={this.props.actions} onClick={(e) => this.clickHandler(e.target.textContent)}/>
        </div>
      </div>
    );
  }
}

export default App;
