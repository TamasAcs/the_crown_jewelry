import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__top">
        <div className="Footer__left">
          <p className="Footer__title">About Crown Jewelry</p>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/products">Promos</Link>
            <Link to="/">Career</Link>
            <Link to="/">Events</Link>
          </ul>
        </div>
        <div className="Footer__middle">
          <p className="Footer__title">The Gift Selection</p>
          <ul>
            <Link to="/products">Watches</Link>
            <Link to="/products">Necklaces</Link>
            <Link to="/products">Bracelets</Link>
            <Link to="/products">Earrings</Link>
            <Link to="/products">Rings</Link>
          </ul>
        </div>
        <div className="Footer__right">
          <p className="Footer__title">Please Help Me</p>
          <ul>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">New Users</Link>
            <Link to="/">Order Status</Link>
          </ul>
        </div>
      </div>

      <div className="Footer__social">
        <div className="Footer__social__gap"></div>
        <div className="Footer__social__left">
          CONNECT <span>with</span> US
        </div>
        <div className="Footer__social__gap"></div>
        <div className="Footer__social__right">
          <SocialIcon network="pinterest" />
          <SocialIcon network="facebook" />
          <SocialIcon network="instagram" />
          <SocialIcon network="twitter" />
          <SocialIcon network="youtube" />
          <SocialIcon network="google" />
        </div>
        <div className="Footer__social__gap"></div>
      </div>

      <div className="Footer__address">
        <div className="Footer__address__left">
          <p>© 2022 The Crown Jewelry in UK, London - All Rights Reserved -</p>
        </div>
        <div className="Footer__address__right">
          <p>Terms</p>
          <div className="Footer__address__right_gap"></div>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
