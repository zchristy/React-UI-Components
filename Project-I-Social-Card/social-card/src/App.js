import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="thumbnail-container">
          <ImageThumbnail />
        </div>
        <div className="content-container">
          <HeaderContainer />
          <CardContainer />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
