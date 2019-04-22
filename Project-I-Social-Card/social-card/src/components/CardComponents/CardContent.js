import React, {Component} from 'react';
import './Card.css';

class CardContent extends Component {
  render() {
    return (
      <div className="card-content">
        <h1>Get started with React</h1>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <a>reactjs.org</a>
      </div>
    );
  }
}

export default CardContent;
