import React from 'react';
import './hotels.css';

import hotelResort from '../../assets/images/hotel_astro_resort.jpg';


const Hotels = () => {
  return (<>
    <section className="hotels">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Explore Services</span>
        </h5>
        <div className="grid">
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">ARCHITECTS</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">BUILDERS</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">RAW MATERIALS</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">WATER SUPPPLY</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">TRANSPORTATION</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>
          <div className="grid-item featured-hotels">
            <h5 className="hotel-name">MACHINES</h5><br></br>
            <button className="btn btn-gradient">learn More</button>
          </div>



        </div>
      </div>
    </section>
  </>
  )
}

export default Hotels;