import React from 'react';
import './Membership.css';
import MembershipHeader from './MembershipHeader';
import PlansList from './PlansList';

const Membership = ({ onJoinClick }) => {
  // Membership plans data
  const plans = [
    {
      id: 1,
      name: 'BASIC',
      price: 49,
      features: [
        { text: 'Gym Access', included: true },
        { text: 'Locker Room Access', included: true },
        { text: '1 Group Class/Week', included: true },
        { text: 'Personal Training', included: false },
        { text: 'Nutrition Consultation', included: false },
        { text: 'Body Composition Analysis', included: false }
      ],
      featured: false
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 79,
      features: [
        { text: 'Unlimited Gym Access', included: true },
        { text: 'Locker Room Access', included: true },
        { text: 'Unlimited Group Classes', included: true },
        { text: '2 Personal Training Sessions/Month', included: true },
        { text: 'Quarterly Nutrition Consultation', included: true },
        { text: 'Body Composition Analysis', included: false }
      ],
      featured: true,
      label: 'MOST POPULAR'
    },
    {
      id: 3,
      name: 'ELITE',
      price: 129,
      features: [
        { text: '24/7 Gym Access', included: true },
        { text: 'Premium Locker Room', included: true },
        { text: 'Unlimited Group Classes', included: true },
        { text: '4 Personal Training Sessions/Month', included: true },
        { text: 'Monthly Nutrition Consultation', included: true },
        { text: 'Monthly Body Composition Analysis', included: true }
      ],
      featured: false
    }
  ];

  return (
    <div className="membership" id="membership">
      <MembershipHeader />
      <PlansList plans={plans} onJoinClick={onJoinClick} />
    </div>
  );
};

export default Membership;