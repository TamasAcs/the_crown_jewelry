import React from "react";
import "./Contact.css";
import decor from "../img/decor.png";
import map from "../img/map.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div className="Contact">
      <Navbar />
      <div className="Contact__container">
        <div className="Contact__left">
          <p className="Contact__title">FIND US</p>
          <img className="Contact__img__decor" src={decor} alt="img" />
          <img className="Contact__img" src={map} alt="" />
          <p className="Contact__left__subtitle"> 8901 MARMORA ROAD,</p>
          <p className="Contact__left__subtitle"> GLASGOW, D04 89GR.</p>
          <p> Freephone: +1 800 559 6580</p>
          <p> Telephone: +1 959 603 6035</p>
          <p> FAX: +1 504 889 9898</p>
          <p> E-mail: mail@demolink.org</p>
        </div>
        <div className="Contact__right">
          <p className="Contact__title">GET IN TOUCH</p>

          <img className="Contact__img__decor" src={decor} alt="img" />
          <form action="POST">
            <label htmlFor="name"></label>
            <input placeholder="Name" type="name" />
            <label htmlFor="email"></label>
            <input placeholder="Email" type="email" />
            <label htmlFor="phone"></label>
            <input placeholder="Phone" type="phone" />
            <textarea
              placeholder="Your message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
          <button className="Contact__right__btn">SEND MESSAGE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
