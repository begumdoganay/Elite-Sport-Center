import React from 'react';
import './ClassTabs.css';

const ClassTabs = ({ activeClass, onTabClick }) => {
  const classTypes = [
    { id: 'yoga', label: 'Yoga' },
    { id: 'group', label: 'Group' },
    { id: 'solo', label: 'Solo' },
    { id: 'stretching', label: 'Stretching' }
  ];

  return (
    <div className="button-classes">
      <div className="top-button">
        {classTypes.slice(0, 2).map(classType => (
          <button
            key={classType.id}
            className={`btn-class ${activeClass === classType.id ? 'active' : ''}`}
            id={`btn-${classType.id}`}
            onClick={() => onTabClick(classType.id)}
          >
            {classType.label}
          </button>
        ))}
      </div>
      <div className="bottom-button">
        {classTypes.slice(2).map(classType => (
          <button
            key={classType.id}
            className={`btn-class ${activeClass === classType.id ? 'active' : ''}`}
            id={`btn-${classType.id}`}
            onClick={() => onTabClick(classType.id)}
          >
            {classType.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassTabs;