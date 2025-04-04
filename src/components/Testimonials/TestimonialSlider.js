import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';
import TestimonialCard from './TestimonialCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialSlider = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance testimonials
  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  // Navigate to specific testimonial
  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div 
      className="testimonial-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className="client-main"
            style={{ display: index === currentTestimonial ? 'block' : 'none' }}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
      <div className="testimonial-controls">
        <button className="testimonial-prev" onClick={prevTestimonial}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            ></span>
          ))}
        </div>
        
        <button className="testimonial-next" onClick={nextTestimonial}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;