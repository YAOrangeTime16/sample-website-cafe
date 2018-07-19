import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export default threshold => BaseComponent => {
  const displayName = BaseComponent.displayName || BaseComponent.name || 'Component';
  return class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`;
    state = {
      isIntersecting: false,
    };

    handleChange = ({ isIntersecting, intersectionRatio }, unobserve) => {
      if(isIntersecting && intersectionRatio >= threshold){
        this.setState({ isIntersecting: isIntersecting });
        unobserve();
      }  
    };

    render() {
      const root = document.querySelector('.secondPage')
      return (
        <Observer onChange={this.handleChange} threshold={threshold} >
          <BaseComponent {...this.props} isVisible={this.state.isIntersecting} />
        </Observer>
      );
    }
  };
};