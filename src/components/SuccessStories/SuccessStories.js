import React from 'react';
import './SuccessStories.css';
import SuccessStoriesHeader from './SuccessStoriesHeader';
import StoriesList from './StoriesList';

const SuccessStories = ({ onJoinClick }) => {
  // Success stories data
  const stories = [
    {
      id: 1,
      name: "Sarah's 6-Month Journey",
      stats: [
        { icon: 'weight-scale', text: '-45 lbs' },
        { icon: 'tape', text: '-8% Body Fat' }
      ],
      text: "After having my second child, I struggled to lose the baby weight. The trainers at Elite Sport Center designed a sustainable workout plan that fit my busy schedule, and the nutritionist helped me make small, manageable changes to my diet. The results speak for themselves!",
      progress: 85,
      beforeImage: 'before1.jpg',
      afterImage: 'after1.jpg'
    },
    {
      id: 2,
      name: "Michael's Strength Journey",
      stats: [
        { icon: 'dumbbell', text: '+80 lbs Bench' },
        { icon: 'weight-scale', text: '+15 lbs Muscle' }
      ],
      text: "I was always the skinny guy who couldn't gain weight. The trainers at Elite Sport Center taught me proper lifting techniques and created a bulking meal plan that finally helped me put on muscle. My confidence has skyrocketed!",
      progress: 100,
      beforeImage: 'before2.jpg',
      afterImage: 'after2.jpg'
    },
    {
      id: 3,
      name: "David's Recovery Journey",
      stats: [
        { icon: 'heart-pulse', text: 'Restored Mobility' },
        { icon: 'person-running', text: 'Marathon Finisher' }
      ],
      text: "After a car accident left me with limited mobility, doctors said I might never run again. The rehabilitation program at Elite Sport Center not only helped me recover, but I recently completed my first marathon! Their expertise and encouragement made all the difference.",
      progress: 100,
      beforeImage: 'before3.jpg',
      afterImage: 'after3.jpg'
    }
  ];

  return (
    <div className="success-stories" id="success">
      <SuccessStoriesHeader />
      <StoriesList stories={stories} />
      
      <div className="story-cta">
        <h3>Ready to write your own success story?</h3>
        <button 
          className="start-journey-btn"
          onClick={onJoinClick}
        >
          Start Your Journey Today
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;