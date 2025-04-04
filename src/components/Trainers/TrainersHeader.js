import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TrainersHeader.css';

const TrainersHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="trainer-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        OUR EXPERT TRAINERS
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Meet our team of certified fitness professionals dedicated to helping you reach your goals. 
        With years of experience and specialized knowledge, our trainers provide personalized 
        guidance and motivation for transformative results.
      </p>
    </div>
  );
};

export default TrainersHeader;