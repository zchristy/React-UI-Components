import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
