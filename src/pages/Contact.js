import React, { useState } from "react";
import "./Contact.css";
import decor from "../img/decor.png";
import map from "../img/map.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;

    if (name && email && message) {
      const res = fetch(
        "https://the-crown-jewelry-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Message sent");
      } else {
        alert("Please fill in the form");
      }
    } else {
      alert("Please fill in the form");
    }
  };

  return (
    <div className="Contact">
      <Navbar />
      <div className="Contact__container">
        <div className="Contact__left">
          <p className="Contact__title">FIND US</p>
          <img className="Contact__img__decor" src={decor} alt="img" />
          <img className="Contact__img" src={map} alt="" />
          <p className="Contact__left__subtitle"> 01 LONDON ROAD,</p>
          <p className="Contact__left__subtitle"> LONDON, SE1 8RG.</p>
          <p> Freephone: +1 800 559 6580</p>
          <p> Telephone: +1 959 603 6035</p>
          <p> FAX: +1 504 889 9898</p>
          <p> E-mail: mail@crownjewelry.org</p>
        </div>
        <div className="Contact__right">
          <p className="Contact__title">GET IN TOUCH</p>

          <img className="Contact__img__decor" src={decor} alt="img" />
          <form method="POST">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={postUserData}
              required
            />
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={postUserData}
              required
            />
            <label htmlFor="phone"></label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              min="0"
              value={userData.phone}
              onChange={postUserData}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
              value={userData.message}
              onChange={postUserData}
              required
            />
          </form>
          <button
            className="Contact__right__btn"
            id="submit"
            type="submit"
            onClick={submitData}
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
