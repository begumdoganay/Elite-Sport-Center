import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="phone-info">
        <h3>Mobile Number</h3>
        <p>+555 44 33 22</p>
      </div>
      <div className="email-info">
        <h3>Email Address</h3>
        <p>info@elitesportcenter.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;