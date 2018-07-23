import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
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
      <ScrollableAnchor id={"sweets"}>
      <section className="secondPage">
        <div className="box">
          <h2 className="pageHeader">Sweets</h2>
        </div>
        {this.renderCakes()}
      </section>
      </ScrollableAnchor>
    )
  }
}

export default SecondPage;