import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FAQHeader.css';

const FAQHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="faq-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Find answers to the most common questions about our services, memberships, and policies.
      </p>
    </div>
  );
};

export default FAQHeader;