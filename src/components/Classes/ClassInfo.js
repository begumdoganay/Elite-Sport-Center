import React, { useEffect, useRef } from 'react';
import './ClassInfo.css';

const ClassInfo = ({ classInfo, classType, onReserve }) => {
  const infoRef = useRef(null);

  // Apply fade-in animation when class type changes
  useEffect(() => {
    if (infoRef.current) {
      infoRef.current.style.opacity = '0';
      
      // Trigger reflow
      void infoRef.current.offsetWidth;
      
      // Apply fade-in animation
      infoRef.current.style.transition = 'opacity 0.5s ease';
      infoRef.current.style.opacity = '1';
    }
  }, [classType]);

  return (
    <div className="info" ref={infoRef}>
      <div className="left-info">
        <h3>{classInfo.title}</h3>
        <p>{classInfo.description}</p>

        <h3>When Comes {classType.charAt(0).toUpperCase() + classType.slice(1)} Your Time.</h3>
        <p>{classInfo.schedule.weekendSchedule}</p>
        <p>{classInfo.schedule.mondayTuesdaySchedule}</p>
        <p>{classInfo.schedule.restOfWeekSchedule}</p>
        
        <button 
          className="reserve-class-btn" 
          onClick={onReserve}
        >
          Reserve a Spot
        </button>
      </div>
      <div className="right-info">
        <img src={classInfo.image} alt={classType} />
      </div>
    </div>
  );
};

export default ClassInfo;