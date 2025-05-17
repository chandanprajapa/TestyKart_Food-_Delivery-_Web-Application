import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link">
            <img src={assets.logo} alt="logo" className="footer-logo" />
            </Link>
            <span className="footer-logo-text">TestyKart</span>
          </div>
          <p>© 2024 TestyKart Food Delivery App</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7848582857</li>
            <li>contact@testkart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 testkart.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
