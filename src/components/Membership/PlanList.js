import React from 'react';
import { useInView } from 'react-intersection-observer';
import './PlansList.css';
import PlanCard from './PlanCard';

const PlansList = ({ plans, onJoinClick }) => {
  // Set up intersection observer with different thresholds for each plan card
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation classes for each plan based on position
  const animationClasses = [
    "scroll-animation fade-right",
    "scroll-animation zoom-in",
    "scroll-animation fade-left"
  ];

  // Map each plan to their respective ref and inView status
  const planRefs = [
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 },
    { ref: ref3, inView: inView3 }
  ];

  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div
          ref={planRefs[index].ref}
          key={plan.id}
          className={`${animationClasses[index]} ${planRefs[index].inView ? 'active' : ''}`}
        >
          <PlanCard plan={plan} onJoinClick={onJoinClick} />
        </div>
      ))}
    </div>
  );
};

export default PlansList;