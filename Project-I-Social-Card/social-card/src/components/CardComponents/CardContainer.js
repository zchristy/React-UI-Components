import React, {Component} from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

class CardContainer extends Component {
  render() {
    return (
      <div className='card-container'>
        <CardBanner />
        <CardContent />
      </div>
    );
  }
}

export default CardContainer;
