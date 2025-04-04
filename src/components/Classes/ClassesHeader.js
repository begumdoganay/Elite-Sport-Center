import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ClassesHeader.css';

const ClassesHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="main" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        OUR CLASSES
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Discover our diverse range of fitness classes designed for all levels. 
        From calming yoga to intense cardio sessions, our expert-led classes 
        will help you stay motivated and achieve your fitness goals.
      </p>
    </div>
  );
};

export default ClassesHeader;