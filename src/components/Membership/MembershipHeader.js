import React from 'react';
import { useInView } from 'react-intersection-observer';
import './MembershipHeader.css';

const MembershipHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="membership-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        MEMBERSHIP PLANS
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Choose the perfect membership plan that fits your fitness goals and lifestyle. 
        All plans include access to our state-of-the-art facilities and expert guidance 
        from our certified trainers.
      </p>
    </div>
  );
};

export default MembershipHeader;