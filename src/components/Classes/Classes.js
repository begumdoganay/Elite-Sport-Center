import React, { useState } from 'react';
import './Classes.css';
import ClassesHeader from './ClassesHeader';
import ClassTabs from './ClassTabs';
import ClassInfo from './ClassInfo';

// Import images
import yogaImg from '../../assets/images/yoga.jpg';
import groupImg from '../../assets/images/group.webp';
import soloImg from '../../assets/images/solo.jpg';
import stretchingImg from '../../assets/images/stret.webp';

const Classes = ({ onReserveClass }) => {
  const [activeClass, setActiveClass] = useState('yoga');
  
  // Class data
  const classData = {
    yoga: {
      title: 'Experience the Benefits of Yoga',
      description: 'Our yoga classes blend traditional techniques with modern approaches to improve flexibility, reduce stress, and enhance overall well-being. Perfect for beginners and experienced practitioners alike, our expert instructors guide you through each pose with care and precision.',
      schedule: {
        weekendSchedule: 'Saturday-Sunday: 08:00 - 10:00',
        mondayTuesdaySchedule: 'Monday-Tuesday: 10:00 - 12:00',
        restOfWeekSchedule: 'Wednesday-Friday: 15:00 - 18:00'
      },
      image: yogaImg
    },
    group: {
      title: 'Are You Ready for Group Fitness?',
      description: 'Experience the motivation and energy of our group training sessions. Working out with others creates accountability, friendly competition, and a supportive community that pushes you to achieve more. Our diverse group classes cater to all fitness levels and goals.',
      schedule: {
        weekendSchedule: 'Saturday-Sunday: 09:00 - 11:00',
        mondayTuesdaySchedule: 'Monday-Tuesday: 11:00 - 13:00',
        restOfWeekSchedule: 'Wednesday-Friday: 16:00 - 19:00'
      },
      image: groupImg
    },
    solo: {
      title: 'Are You Interested in Solo Workouts?',
      description: 'Our solo training programs are designed to focus exclusively on your individual needs and goals. Work one-on-one with our expert trainers who will create customized workout plans, provide personalized guidance, and help you maximize your fitness potential.',
      schedule: {
        weekendSchedule: 'Saturday-Sunday: 10:00 - 12:00',
        mondayTuesdaySchedule: 'Monday-Tuesday: 12:00 - 14:00',
        restOfWeekSchedule: 'Wednesday-Friday: 17:00 - 20:00'
      },
      image: soloImg
    },
    stretching: {
      title: 'Why You Should Stretch Regularly',
      description: 'Stretching is essential for maintaining flexibility, preventing injuries, and enhancing athletic performance. Our stretching classes focus on proper techniques to increase range of motion, improve posture, reduce muscle tension, and speed up recovery between workouts.',
      schedule: {
        weekendSchedule: 'Saturday-Sunday: 11:00 - 13:00',
        mondayTuesdaySchedule: 'Monday-Tuesday: 13:00 - 15:00',
        restOfWeekSchedule: 'Wednesday-Friday: 18:00 - 21:00'
      },
      image: stretchingImg
    }
  };
  
  // Handle class tab change
  const handleTabClick = (classType) => {
    setActiveClass(classType);
  };

  return (
    <div className="classes">
      <div className="top-classes">
        <ClassesHeader />
        
        <ClassTabs 
          activeClass={activeClass} 
          onTabClick={handleTabClick} 
        />
        
        <ClassInfo 
          classInfo={classData[activeClass]} 
          classType={activeClass}
          onReserve={() => onReserveClass(activeClass)}
        />
      </div>
    </div>
  );
};

export default Classes;