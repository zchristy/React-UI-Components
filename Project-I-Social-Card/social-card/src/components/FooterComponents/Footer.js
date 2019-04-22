import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"> 16</i>
        <i class="far fa-heart"> 400</i>
        <i class="far fa-envelope"></i>
      </div>
    );
  }
}

export default Footer;
