import React from 'react';
import './Testimonials.css';
import TestimonialsHeader from './TestimonialsHeader';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Diet Specialist',
      role: 'Nutrition Expert',
      image: 'client1.jpg',
      text: 'The atmosphere at PowerFull is so positive and motivating. The trainers really know their stuff and tailor programs to fit individual needs. I\'ve seen amazing results in just a few months!'
    },
    {
      id: 2,
      name: 'Head Trainer',
      role: 'Cardio Coach',
      image: 'client2.jpg',
      text: 'As a fitness professional, I can truly say that PowerFull Sport Center offers exceptional service and equipment. Their focus on proper technique and personalized training sets them apart from other gyms.'
    },
    {
      id: 3,
      name: 'Fitness Coach',
      role: 'CrossFit Enthusiast',
      image: 'client1.jpg',
      text: 'This gym has the best equipment I\'ve ever used. The trainers are knowledgeable and motivating. I\'ve been able to achieve results I never thought possible!'
    },
    {
      id: 4,
      name: 'Wellness Expert',
      role: 'Yoga Instructor',
      image: 'client2.jpg',
      text: 'The atmosphere at PowerFull is so welcoming and positive. It\'s not just a gym, it\'s a community of like-minded people supporting each other on their fitness journey.'
    }
  ];

  return (
    <div className="review">
      <TestimonialsHeader />
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;