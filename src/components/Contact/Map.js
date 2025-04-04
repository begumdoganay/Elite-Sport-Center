import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.23953968738226!2d28.873661073957905!3d40.99876410629133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb63c0e52ce3%3A0x312b94189aa0dc92!2sKFC!5e0!3m2!1sen!2str!4v1714264782186!5m2!1sen!2str"
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Sport Center Location"
      ></iframe>
    </div>
  );
};

export default Map;