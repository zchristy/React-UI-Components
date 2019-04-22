import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <i className="far fa-comment"></i>
        <i className="fas fa-retweet"> 16</i>
        <i className="far fa-heart"> 400</i>
        <i className="far fa-envelope"></i>
      </div>
    );
  }
}

export default Footer;
