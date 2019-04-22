import React, {Component} from 'react';
import './Header.css';

class ImageThumbnail extends Component {
  render() {
    return (
      <div className="image-thumbnail">
        <img src="yarn.png" alt="Lambda School Logo" />
      </div>
    );
  }
}

export default ImageThumbnail;
