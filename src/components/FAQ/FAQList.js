import React from 'react';
import './FAQList.css';
import FAQItem from './FAQItem';
import { useInView } from 'react-intersection-observer';

const FAQList = ({ items, animationDirection }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      className="faq-column" 
      ref={ref}
    >
      {items.map((item, index) => (
        <div 
          key={item.id}
          className={`scroll-animation fade-${animationDirection} ${inView ? 'active' : ''}`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <FAQItem 
            question={item.question} 
            answer={item.answer} 
          />
        </div>
      ))}
    </div>
  );
};

export default FAQList;