import React, {Component} from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container">
          <HeaderTitle />
          <HeaderContent />
      </div>
    );
  }
}

export default HeaderContainer;
