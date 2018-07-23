import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor';
import withIntersectionObserver from '../withIntersectionObserver';
import './forth.css';

configureAnchors({offset: 10, scrollDuration: 1000});

class ForthPage extends Component {
  
    render() {
      return(
        <ScrollableAnchor id={"about"}>
        <section className="forthPage">
          <div className="box">
            <h2 className="pageHeader">About</h2>
          </div>
        </section>
        </ScrollableAnchor>
      )
    }
}

export default withIntersectionObserver(0.9)(ForthPage);