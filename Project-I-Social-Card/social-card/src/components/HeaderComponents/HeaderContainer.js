import React, {Component} from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container">
          <ImageThumbnail />
        <div className="title-content-container">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
