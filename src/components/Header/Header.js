import React, { useEffect } from 'react';
import './header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {

  useEffect(() => {
    let header = document.querySelector('.header');
    let boxMenu = document.querySelector('.box-menu');

    window.addEventListener('scroll', (event) => {
      let windowPosition = window.scrollY > 0;
      header.classList.toggle('active', windowPosition);
    });

    boxMenu.addEventListener('click', (event) => {
      header.classList.toggle('menu-open');
    })
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="logo">
            <b className="company-name">Build Buddy</b>
          </a>
          <div className="box-menu">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/About" className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a href="/News" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/Contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;