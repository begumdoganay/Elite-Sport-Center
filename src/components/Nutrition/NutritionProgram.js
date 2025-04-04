import React from 'react';
import './NutritionProgram.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NutritionProgram = ({ program, tabId }) => {
  const { title, description, features, image } = program;

  return (
    <div className={`tab-content active`} id={tabId}>
      <div className="nutrition-text">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <h4>What's Included:</h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCheck} /> {feature}
            </li>
          ))}
        </ul>
        
        <a href="#" className="nutrition-cta">
          Get Your Custom Plan <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      
      <div className="nutrition-image">
        <img src={require(`../../assets/images/${image}`)} alt={title} />
      </div>
    </div>
  );
};

export default NutritionProgram;