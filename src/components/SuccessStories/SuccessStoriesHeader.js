import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SuccessStoriesHeader.css';

const SuccessStoriesHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="success-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        SUCCESS STORIES
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Real transformations from real members. See how our personalized approach to fitness 
        has helped people just like you achieve their health and fitness goals.
      </p>
    </div>
  );
};

export default SuccessStoriesHeader;