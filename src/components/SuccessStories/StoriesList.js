import React from 'react';
import { useInView } from 'react-intersection-observer';
import './StoriesList.css';
import StoryCard from './StoryCard';

const StoriesList = ({ stories }) => {
  // Set up intersection observer with different thresholds for each story card
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation classes for each story based on position
  const animationClasses = [
    "scroll-animation fade-right",
    "scroll-animation fade-in",
    "scroll-animation fade-left"
  ];

  // Map each story to their respective ref and inView status
  const storyRefs = [
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 },
    { ref: ref3, inView: inView3 }
  ];

  return (
    <div className="stories-container">
      {stories.map((story, index) => (
        <div
          ref={storyRefs[index].ref}
          key={story.id}
          className={`${animationClasses[index]} ${storyRefs[index].inView ? 'active' : ''}`}
        >
          <StoryCard story={story} />
        </div>
      ))}
    </div>
  );
};

export default StoriesList;