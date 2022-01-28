import React from "react";
import "./Welcome.css";
import decor from "../img/decor.png";
import decor_left from "../img/decor-left.png";
import decor_right from "../img/decor-right.png";
import welcome from "../img/welcome-img.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Welcome__left">
        <p className="Welcome__title">WELCOME</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="Welcome__subtitle">Lorem ipsum dolor sit amet.</p>
        <p className="Welcome__desc1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <p className="Welcome__desc2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <div className="Welcome__button">
          <img className="img__decor__left" src={decor_left} alt="img" />
          <Link className="Welcome__btn" to="/about">
            READ MORE
          </Link>

          <img className="img__decor__right" src={decor_right} alt="img" />
        </div>
      </div>
      <div className="Welcome__middle">
        <img className="img__welcome" src={welcome} alt="img" />
        <p className="Welcome__title">LATEST COLECTIONS</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="Welcome__desc3">
          Lorem ipsum dolor sit amet, adipisicing. Beatae totam.
        </p>
      </div>
      <div className="Welcome__right">
        <p className="Welcome__title">OUR HISTORY</p>
        <img className="img__decor" src={decor} alt="img" />
        <p className="Welcome__subtitle">Lorem ipsum dolor sit amet.</p>
        <p className="Welcome__desc1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <p className="Welcome__desc2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae
          quis id cupiditate, voluptatem repellat corporis modi provident culpa
          ipsam.
        </p>
        <div className="Welcome__button">
          <img className="img__decor__left" src={decor_left} alt="img" />
          <Link className="Welcome__btn" to="/about">
            READ MORE
          </Link>

          <img className="img__decor__right" src={decor_right} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
