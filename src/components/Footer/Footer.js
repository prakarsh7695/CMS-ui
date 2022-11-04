import React from 'react';
import './footer.css';

import Logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="/" className="logo">
              <b className="company-name">Build Buddy</b>
            </a>

          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">Follow us</h4>
            <div className="social-media">
              <span className="sm-link"><i className="fab fa-twitter"></i></span>
              <span className="sm-link"><i className="fab fa-facebook-square"></i></span>
              <span className="sm-link"><i className="fab fa-instagram"></i></span>
              <span className="sm-link"><i className="fab fa-pinterest"></i></span>
              <span className="sm-link"><i className="fab fa-tripadvisor"></i></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;