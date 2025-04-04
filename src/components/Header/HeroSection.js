import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroMan from '../../assets/images/hero-man.jpg';
import heroYoga from '../../assets/images/hero-yoga.jpg';
import heroCardio from '../../assets/images/hero-cardio.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Hero slider data
  const slides = [
    {
      image: heroMan,
      title: 'Group Practice With Trainer',
      subtitle: 'Powerfull',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam nesciunt doloribus veniam corporis! Omnis vitae debitis praesentium vero, saepe ullam.'
    },
    {
      image: heroYoga,
      title: 'Find Your Inner Balance',
      subtitle: 'Yoga Classes',
      text: 'Discover the perfect harmony between mind and body with our expert-led yoga classes, suitable for all experience levels.'
    },
    {
      image: heroCardio,
      title: 'Push Your Limits',
      subtitle: 'Cardio & HIIT',
      text: 'High-intensity workouts designed to boost your metabolism, build endurance, and help you achieve your fitness goals faster.'
    }
  ];

  // Calculate countdown to end of special offer (30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdownTime({ days, hours, minutes, seconds });
    };
    
    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update
    
    return () => clearInterval(timer);
  }, []);

  // Auto change slides
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(sliderInterval);
  }, [currentSlide]);
  
  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="top-header">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="hero-slide" 
            style={{ 
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0 
            }}
          >
            <div className="slide-content">
              <span className="slide-subtitle">{slide.subtitle}</span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-text">{slide.text}</p>
              <div className="slide-buttons">
                <button className="st-button">Sign Up</button>
                <button className="nd-button">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-nav">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      
      <button className="slider-prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button className="slider-next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      <div className="content">
        <a className="top-content">Transform Your Life</a>
        <h1>Expert Training, Exceptional Results</h1>
        <p>Welcome to Elite Sport Center, where your fitness journey becomes our passion. Our certified trainers, state-of-the-art facilities, and customized workout programs are designed to help you achieve your health and fitness goals faster and more effectively.</p>
        <div className="buttons">
          <button className="st-button">Sign Up</button>
          <button className="nd-button">Details</button>
        </div>
        
        <div className="special-offer">
          <h3>SPECIAL OFFER: 25% OFF FIRST MONTH</h3>
          <p>Limited time offer. Ends in:</p>
          <div className="countdown">
            <div className="countdown-item">
              <span id="days">{String(countdownTime.days).padStart(2, '0')}</span>
              <p>Days</p>
            </div>
            <div className="countdown-item">
              <span id="hours">{String(countdownTime.hours).padStart(2, '0')}</span>
              <p>Hours</p>
            </div>
            <div className="countdown-item">
              <span id="minutes">{String(countdownTime.minutes).padStart(2, '0')}</span>
              <p>Minutes</p>
            </div>
            <div className="countdown-item">
              <span id="seconds">{String(countdownTime.seconds).padStart(2, '0')}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;