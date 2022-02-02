import React from "react";
import "./About.css";
import decor from "../img/decor.png";
import staff_decor from "../img/staff-decor.png";
import about from "../img/ring3.jpg";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="About">
      <Navbar />
      <div className="About__container">
        <div className="About__main">
          <div className="About__left">
            <p className="About__title">WHO WE ARE</p>
            <img className="About__img__decor" src={decor} alt="img" />
            <img className="img__About" src={about} alt="img" />
            <p className="About__subtitle">
              LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT
            </p>
            <p className="About__desc1">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate. Aenean nonummy hendrerit mauris.
              Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
              penatibus.
            </p>
          </div>
          <div className="About__middle">
            <p className="About__title">WHAT WE DO</p>
            <img className="About__img__decor" src={decor} alt="img" />
            <p className="About__subtitle">LOREM IPSUM DOLOR SIT AMET</p>
            <p className="About__desc1">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="About__subtitle">AENEAN AUCTOR URNA</p>
            <p className="About__desc1">
              Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscarius
              mi. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada.
            </p>
            <p className="About__subtitle">INTEGER RUTRUM ANTE EU LACUS</p>
            <p className="About__desc1">
              Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
              Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Suspendisse sollicitudin velit
              sed leo. Ut pharetra augue nec augue.
            </p>
          </div>
          <div className="About__right">
            <p className="About__title">OPPORTUNITIES</p>
            <img className="About__img__decor" src={decor} alt="img" />
            <p className="About__subtitle">
              LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT
            </p>
            <p className="About__desc1">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="About__list">
              <li>Lorem ipsum dolor sit</li>
              <li>Amet conse ctetur</li>
              <li>Adipisicing elit sed do</li>
              <li>Eiusmod tempor incidi</li>
              <li>Dunt ut labore</li>
            </ul>

            <p className="About__desc2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              n aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate. Aenean nonummy hendrerit mauris.
            </p>
          </div>
        </div>

        <div className="About__staff__container">
          <p className="About__container__title">THE BEST OF PROFESSIONALS</p>
          <img className="About__img__decor" src={staff_decor} alt="img" />
          <div className="About__staff">
            <div className="About__staff__info">
              <img className="About__staff__image" src={p1} alt="img" />
              <p className="About__staff__title">RUTRUM ANTE EU LACUS</p>
              <p className="About__staff__desc">
                Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
                Aenean nec eros. Vestibulum ante ipsum.
              </p>
            </div>
            <div className="About__staff__info">
              <img className="About__staff__image" src={p2} alt="img" />
              <p className="About__staff__title">RUTRUM ANTE EU LACUS</p>
              <p className="About__staff__desc">
                Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
                Aenean nec eros. Vestibulum ante ipsum.
              </p>
            </div>
            <div className="About__staff__info">
              <img className="About__staff__image" src={p3} alt="img" />
              <p className="About__staff__title">RUTRUM ANTE EU LACUS</p>
              <p className="About__staff__desc">
                Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
                Aenean nec eros. Vestibulum ante ipsum.
              </p>
            </div>
            <div className="About__staff__info">
              <img className="About__staff__image" src={p4} alt="img" />
              <p className="About__staff__title">RUTRUM ANTE EU LACUS</p>
              <p className="About__staff__desc">
                Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.
                Aenean nec eros. Vestibulum ante ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
