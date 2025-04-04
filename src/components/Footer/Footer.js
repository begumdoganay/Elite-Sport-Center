import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <img src={logo} alt="Elite Sport Center Logo" />
        <p>
          Elite Sport Center is committed to helping you achieve your fitness goals through 
          expert guidance, state-of-the-art facilities, and a supportive community. Join us 
          today and transform your life through the power of professional fitness training.
        </p>
      </div>
      <div className="bottom-footer">
        <div className="left-side">
          <h3>Information</h3>
          <a href="#">About Us</a>
          <a href="#classes">Classes</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right-side">
          <h3>Helpful Links</h3>
          <a href="#">Services</a>
          <a href="#">Supports</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;