import React from "react";
import "./About.css";
import decor from "../img/decor.png";
import decor_left from "../img/decor-left.png";
import decor_right from "../img/decor-right.png";
import about from "../img/ring3.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
      <div className="About">
        <Navbar />
        <div className="About__container">
            
      <div className="About__left">
        <p className="About__title">About</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="About__subtitle">Lorem ipsum dolor sit amet.</p>
        <p className="About__desc1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <p className="About__desc2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <div className="About__button">
          <img className="img__decor__left" src={decor_left} alt="img" />
          <Link className="About__btn" to="/about">
            READ MORE
          </Link>

          <img className="img__decor__right" src={decor_right} alt="img" />
        </div>
      </div>
      <div className="About__middle">
        <img className="img__About" src={about} alt="img" />
        <p className="About__title">LATEST COLECTIONS</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="About__desc3">
          Lorem ipsum dolor sit amet, adipisicing. Beatae totam.
        </p>
      </div>
      <div className="About__right">
        <p className="About__title">OUR HISTORY</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="About__subtitle">Lorem ipsum dolor sit amet.</p>
        <p className="About__desc1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <p className="About__desc2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <div className="About__button">
          <img className="img__decor__left" src={decor_left} alt="img" />
          <Link className="About__btn" to="/about">
            READ MORE
          </Link>

          <img className="img__decor__right" src={decor_right} alt="img" />
        </div>
      </div>
        </div>
        <Footer />
    </div>
  );
}

export default About;
