import React, { useState } from 'react';
import './FAQItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={toggleActive}>
        <h3>{question}</h3>
        <span className="faq-toggle">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;