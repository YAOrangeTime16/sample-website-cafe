import React from 'react';
import './first.css';
import Header from './Header';

const FirstPage = () => (
<section className="firstPage">
  <Header />
  <div className="backDecoVer" />
  <div className="image-wrapper">
    <img className="image" src="../images/cafe2.jpg" alt="main"/>
  </div>
  <p className="description">Dolore cillum minim eu ea elit duis adipisicing labore sint ea sunt Lorem ad eiusmod.</p>
  <div className="headerBottom"/>
  <div className="backDecoHor" />
</section>
)

export default FirstPage;