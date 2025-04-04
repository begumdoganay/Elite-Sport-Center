import React from 'react';
import './Contact.css';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Map from './Map';

const Contact = ({ showNotification }) => {
  return (
    <div className="contact">
      <ContactHeader />
      
      <div className="contact-menu">
        <div className="appointment">
          <ContactInfo />
          <ContactForm showNotification={showNotification} />
        </div>
        
        <Map />
      </div>
    </div>
  );
};

export default Contact;