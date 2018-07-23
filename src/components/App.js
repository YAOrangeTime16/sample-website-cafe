import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <ForthPage />
      </div>
    );
  }
}

export default App;
