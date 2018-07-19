import React, { Component, Fragment } from 'react';
import './second.css';
import ImageComponent from './ImageComponent';
import { cakesData, ingredientsData } from '../api';

class SecondPage extends Component {
  state = {
    cakes: [],
    ingredients: [] 
  }
  componentDidMount(){
   const cakes = cakesData()
   const ingredients = ingredientsData()
   this.setState({
     cakes,
     ingredients
   })
  }
  
  renderCakes = () => {
    const { cakes } = this.state;
    return cakes.map( cake => (
      <ImageComponent
        key={cake.id + Math.floor(Math.random(20))}
        styleNum={cake.cssstyle}
        cake={cake.name}
        imgSrc={cake.image}
        description={cake.description}
      />
    ))
  }

  render(){
    return(
      <section className="secondPage">
        {this.renderCakes()}
      </section>
    )
  }
}

export default SecondPage;