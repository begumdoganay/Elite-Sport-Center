import React, { useState, useEffect } from 'react';
import './StatCards.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatCards = () => {
  const statsData = [
    { value: 325, label: 'Course' },
    { value: 405, label: 'Work Out' },
    { value: 305, label: 'Working Hour' },
    { value: 705, label: 'Happy Client' },
  ];
  
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div className="bottom-header card-container" ref={ref}>
      {statsData.map((stat, index) => (
        <div className="card" key={index}>
          <h2>
            {animated ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                separator=","
              />
            ) : (
              0
            )}
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatCards;