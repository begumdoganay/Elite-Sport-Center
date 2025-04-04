import React from 'react';
import './NutritionTestimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const NutritionTestimonial = ({ testimonial }) => {
  const { text, author, role, image } = testimonial;

  return (
    <div className="nutrition-testimonial">
      <div className="quote-icon">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      
      <p className="quote-text">{text}</p>
      
      <div className="quote-author">
        <img src={require(`../../assets/images/${image}`)} alt={author} />
        <div>
          <h4>{author}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionTestimonial;