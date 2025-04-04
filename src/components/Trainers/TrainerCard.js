import React from 'react';
import './TrainerCard.css';

const TrainerCard = ({ name, role, image, isFeatured }) => {
  return (
    <div className="trainer-card">
      <div className="line"></div>
      <div className={`line-2 ${isFeatured ? 'trainer-flag' : ''}`}></div>
      <div className="line-3"></div>
      <img src={require(`../../assets/images/${image}`)} alt={name} />
      <div className="trainer-layer">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TrainerCard;