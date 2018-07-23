import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor';
import withIntersectionObserver from '../withIntersectionObserver';
import './forth.css';

configureAnchors({offset: 10, scrollDuration: 1000});

class ForthPage extends Component {

    render() {
      const {isVisible} = this.props;
      return(
        <ScrollableAnchor id={"about"}>
        <section className="forthPage">
          <div className="box">
            <h2 className="pageHeader">About</h2>
          </div>
          <img className="aboutImage" src="./images/fruit1.jpg" alt="about"/>
          <div className={isVisible ? 'aboutBox' : 'invisible'} />
          <h3 className={isVisible ? 'aboutText' : 'invisible'}>Eiusmod esse esse dolore laboris ea aliquip</h3>
          <div className="aboutImageShade" />
          <section className="contactContainer">
            <h3>Contact Info</h3>
            <p>Kungsgatan 123</p>
            <p>Sweden</p>
          </section>
        </section>
        </ScrollableAnchor>
      )
    }
}

export default withIntersectionObserver(0.9)(ForthPage);