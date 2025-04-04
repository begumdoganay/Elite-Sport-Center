import React from 'react';
import './StoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWeightScale, 
  faTape, 
  faDumbbell, 
  faHeartPulse, 
  faPersonRunning 
} from '@fortawesome/free-solid-svg-icons';

const StoryCard = ({ story }) => {
  const { name, stats, text, progress, beforeImage, afterImage } = story;

  // Map icon strings to FontAwesome icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'weight-scale':
        return faWeightScale;
      case 'tape':
        return faTape;
      case 'dumbbell':
        return faDumbbell;
      case 'heart-pulse':
        return faHeartPulse;
      case 'person-running':
        return faPersonRunning;
      default:
        return faWeightScale;
    }
  };

  return (
    <div className="story-card">
      <div className="before-after">
        <div className="before">
          <img src={require(`../../assets/images/${beforeImage}`)} alt="Before transformation" />
          <span>Before</span>
        </div>
        <div className="after">
          <img src={require(`../../assets/images/${afterImage}`)} alt="After transformation" />
          <span>After</span>
        </div>
      </div>
      
      <div className="story-content">
        <h3>{name}</h3>
        
        <p className="stats">
          {stats.map((stat, index) => (
            <span key={index}>
              <FontAwesomeIcon icon={getIcon(stat.icon)} /> {stat.text}
            </span>
          ))}
        </p>
        
        <p className="story-text">{text}</p>
        
        <div className="story-progress">
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>
            {progress === 100 ? 'Goal achieved!' : `${progress}% to goal`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;