import React from 'react';
import { useInView } from 'react-intersection-observer';
import './NutritionHeader.css';

const NutritionHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="nutrition-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        NUTRITION PROGRAMS
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Proper nutrition is the foundation of any successful fitness journey. Our customized 
        nutrition programs are designed to complement your workout routine and help you 
        achieve your goals faster.
      </p>
    </div>
  );
};

export default NutritionHeader;