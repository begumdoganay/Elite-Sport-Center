import React from 'react';
import './Trainers.css';
import TrainersHeader from './TrainersHeader';
import TrainerList from './TrainerList';

const Trainers = () => {
  // Trainer data
  const trainers = [
    {
      id: 1,
      name: 'Jenna',
      role: 'Personal Coach',
      image: 'trainer1.jpg'
    },
    {
      id: 2,
      name: 'Arnold',
      role: 'Body Builder',
      image: 'trainer2.jpg'
    },
    {
      id: 3,
      name: 'Deniz Coach',
      role: 'Cardio Specialist',
      image: 'trainer3.jpg'
    }
  ];

  return (
    <div className="trainer">
      <div className="top-trainer">
        <TrainersHeader />
        <TrainerList trainers={trainers} />
      </div>
    </div>
  );
};

export default Trainers;