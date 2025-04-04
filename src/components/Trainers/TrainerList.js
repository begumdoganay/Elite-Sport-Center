import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TrainerList.css';
import TrainerCard from './TrainerCard';

const TrainerList = ({ trainers }) => {
  // Set up intersection observer with different thresholds for each trainer card
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation classes for each trainer based on position
  const animationClasses = [
    "scroll-animation fade-right",
    "scroll-animation fade-in",
    "scroll-animation fade-left"
  ];

  // Map each trainer to their respective ref and inView status
  const trainerRefs = [
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 },
    { ref: ref3, inView: inView3 }
  ];

  return (
    <div className="trainer-container">
      {trainers.map((trainer, index) => (
        <div 
          ref={trainerRefs[index].ref} 
          key={trainer.id}
          className={`${animationClasses[index]} ${trainerRefs[index].inView ? 'active' : ''}`}
        >
          <TrainerCard 
            name={trainer.name}
            role={trainer.role}
            image={trainer.image}
            isFeatured={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default TrainerList;