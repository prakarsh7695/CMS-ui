import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="main-heading">
          <h1 className="title">Let's build something better!</h1>
          <h2 className="subtitle">All your construction needs at one place.</h2>
        </div>
        <button href="#" className="btn btn-gradient">Explore now</button>
      </div>
    </div>
  )
}

export default Banner;