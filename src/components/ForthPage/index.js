import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor';
import withIntersectionObserver from '../withIntersectionObserver';
import Contact from './Contact';
import './forth.css';

configureAnchors({offset: 10, scrollDuration: 1000});

class ForthPage extends Component {

    render() {
      const {isVisible} = this.props;
      const boxVisible = isVisible ? 'aboutBox' : 'invisible';
      const textVisible = isVisible ? 'aboutText' : 'invisible';
      return(
        <ScrollableAnchor id={"about"}>
          <section className="forthPage">
            <div className="box">
              <h2 className="pageHeader">About</h2>
            </div>
            <video className="aboutImage" autoPlay loop>
              <source src="./images/cafe_video.mp4" type="video/mp4" />
            </video>
            <div className={boxVisible} />
            <h3 className={textVisible}>Eiusmod esse esse dolore laboris ea aliquip</h3>
            <div className="aboutImageShade" />
            <Contact />
          </section>
        </ScrollableAnchor>
      )
    }
}

export default withIntersectionObserver(0.9)(ForthPage);