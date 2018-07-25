import React, { Component, Fragment } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import withIntersectionObserver from '../withIntersectionObserver';
import { Honey, Egg, Fruit } from '../svg';
import './third.css';

configureAnchors({offset: 0, scrollDuration: 1000});

class ThirdPage extends Component {
  state = {
    icons: [
      {
        icon: Honey,
        text: 'Excepteur id in veniam commodo occaecat fugiat'
      },
      {
        icon: Fruit,
        text: 'Elit ut exercitation sint voluptate ad sint incididunt'
      },
      {
        icon: Egg,
        text: 'Nostrud mollit non laboris cillum irure culpa'
      }
    ]
  }

  getIcon = () => {
    const visibility = this.props.isVisible ? 'fadeinIcon' : 'hideIcon';
    const iconText = this.props.isVisible ? 'ingText' : 'noIngText';
    const {icons} = this.state;
    return icons.map((item, index)=>(
      <Fragment key={item.icon.name+index}>
          <div className={`icon ${visibility}`}>
            { item.icon() }
            <div className="ingBorder">
              <p className={`${iconText}`}>{item.text}</p>
            </div>
          </div>
      </Fragment>
    ))
  }

  render() {
    return(
      <ScrollableAnchor id={"ingredient"}>
      <section className="thirdPage">
        <div className="box">
          <h2 className="pageHeader">Ingredients</h2>
        </div>
        <div className="iconContainer">
          {this.getIcon()}
        </div>
      </section>
      </ScrollableAnchor>
    )
  }
}

export default withIntersectionObserver(0.9)(ThirdPage);