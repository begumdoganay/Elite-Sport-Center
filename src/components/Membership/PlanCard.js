import React from 'react';
import './PlanCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const PlanCard = ({ plan, onJoinClick }) => {
  const { name, price, features, featured, label } = plan;

  return (
    <div className={`plan-card ${featured ? 'featured' : ''}`}>
      {label && <div className="plan-label">{label}</div>}
      
      <div className="plan-header">
        <h3>{name}</h3>
        <p className="price">
          ${price}<span>/month</span>
        </p>
      </div>
      
      <div className="plan-features">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <FontAwesomeIcon 
                icon={feature.included ? faCheck : faXmark} 
                className={feature.included ? 'included' : 'not-included'} 
              />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        className="plan-button"
        onClick={onJoinClick}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default PlanCard;