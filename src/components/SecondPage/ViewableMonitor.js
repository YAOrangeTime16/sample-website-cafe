import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';


export default class ViewableMonitor extends Component {
  state = {
    isIntersecting: false,
  }

  handleChange = ({ isIntersecting }) => {
    console.log(isIntersecting)
    this.setState({ isIntersecting });
  };

  render(){
    const { children, mount: Tag, ...rest } = this.props;
    console.log(`children props: ${children}`)
    let element = children(this.state.isIntersecting);
    if (Tag) {
      element = <Tag>{element}</Tag>;
    }
    return(
        <Observer {...rest} onChange={this.handleChange}>
         {element}
        </Observer>
    )
  }
}