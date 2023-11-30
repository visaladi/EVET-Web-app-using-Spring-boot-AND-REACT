import React from "react";
import Nav from "../Nav/AfterNav";
import "./contact.css";

function Contact() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* Contact Info */}
      <div className="contact-container">
        <div className="contact-details">
          <p className="navnamecon">
            <b>Contact Us</b>
            <p>+94 712977352</p>
            <p>1/2/3 rd lane,</p>
            <p>london hill,</p>
            <p>colombo 08,</p>
            <p>adhidi2313@gmail.com</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
