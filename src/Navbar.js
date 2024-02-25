
import React from 'react';
import "./App.css";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
      
      </label>
      
      <label className="logo">Cognifyz Technologies </label>
      <ul>
        <li><a className="active" href="home">Home</a></li>
        <li><a href="https://cognifyz.com/about-us/">About</a></li>
        <li><a href="https://cognifyz.com/services/">Services</a></li>
        <li><a href="https://cognifyz.com/contact-us/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
