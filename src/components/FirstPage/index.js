import React, { Component } from 'react';
import './first.css';
import Header from './Header';

class FirstPage extends Component {
  state = {
    loaded: ''
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({loaded: 'loaded'});
    }, 2000);
  }

  render(){
    return (
      <section id="firstPage">
        <Header />
        <div className="backDecoVer" />
        <div className="backDecoHor" />
        <div className={this.state.loaded}>
          <div className="image-wrapper">
            <img className="image" src="../images/cafe2.jpg" alt="main"/>
          </div>
        </div>
          <h2 className="description">Dolore cillum minim eu ea elit duis adipisicing labore</h2>
      </section>
      )
  }

}

export default FirstPage;