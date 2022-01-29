import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from "../img/logo2.png";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt=""/>
        </div>
        <div className="navbar-links_container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Jewelry</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-uLink-center">
          <div className="navbar-menu_container-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Jewelry</Link>
          <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;