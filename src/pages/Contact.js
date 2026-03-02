import React from "react";
import "../styles/contact.css";

import logo from "../assets/image/logo.png";
import googlePlay from "../assets/image/img1.jpg";
import appStore from "../assets/image/img2.png";

const Contact = () => {
  return (
    <div className="contact-container">

      <h1 className="contact-title">CONTACT US</h1>

      <div className="contact-box">

        {/* LEFT */}
        <div className="contact-left">
          <img src={logo} alt="logo" className="contact-logo"/>

          <p className="download-text">Download the app from</p>

          <img
            src={googlePlay}
            alt="Google Play"
            className="store-image"
          />

          <p className="or">OR</p>

          <img
            src={appStore}
            alt="App Store"
            className="store-image"
          />
        </div>

        {/* MIDDLE */}
        <div className="contact-middle">
          <p>ABC private limited</p>
          <p>XYZ,</p>
          <p>Calicut, India</p>
          <p>support@CV.in</p>
          <p>1234567890</p>
        </div>

        {/* RIGHT */}
        <div className="contact-right">

          <label>Name:</label>
          <input type="text"/>

          <label>Email:</label>
          <input type="email"/>

          <label>Phone Number:</label>
          <input type="text"/>

          <label>Message:</label>
          <textarea rows="4"></textarea>

          <button className="send-btn">Send Message</button>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        Copyright © 2026. Designed By Slytherin Pvt Ltd
      </footer>

    </div>
  );
};

export default Contact;