import React, {Component, Fragment} from 'react';
import withIntersectionObserver from './withIntersectionObserver';
import './second.css';

class ImageComponent extends Component {
  render(){
    const {
      cake,
      description,
      imgSrc,
      isVisible,
      styleNum
    } = this.props;
    const visibility = isVisible ? 'visible' : 'invisible';
    const transition = isVisible ? 'nextDescription' : '';
    return (
      <section className="section">
        <div className={isVisible && 'belt'}/>
        <div  className={`box${styleNum} ${visibility}`}>
          <h2 className="subTitle">{cake}</h2>
          <img className={`photo${styleNum}`} src={imgSrc} alt="cake" />
        </div>
        <p className={`description${styleNum} ${transition}`}>{description}</p>
      </section>
    );
  }
}

export default withIntersectionObserver(0.99)(ImageComponent);