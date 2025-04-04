import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, text } = testimonial;

  return (
    <>
      <div className="nd-client">
        <img src={require(`../../assets/images/${image}`)} alt={name} />
        <div className="client-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <div className="comment">
        <p>{text}</p>
      </div>
    </>
  );
};

export default TestimonialCard;