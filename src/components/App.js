import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

class App extends Component {
  render() {
    return (
      <div>
        <FirstPage />
        <SecondPage />
      </div>
    );
  }
}

export default App;
