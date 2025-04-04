import React, { useState } from 'react';
import './Nutrition.css';
import NutritionHeader from './NutritionHeader';
import NutritionTabs from './NutritionTabs';
import NutritionProgram from './NutritionProgram';
import NutritionTestimonial from './NutritionTestimonial';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('weight-loss');

  // Nutrition programs data
  const nutritionPrograms = {
    'weight-loss': {
      title: 'Sustainable Weight Loss Program',
      description: 'Our weight loss nutrition program focuses on creating a sustainable calorie deficit through nutrient-dense foods that keep you feeling satisfied. We don\'t believe in crash diets or extreme restrictions, but rather in building healthy habits that last a lifetime.',
      features: [
        'Personalized calorie and macro targets',
        'Customized meal plans with delicious recipes',
        'Grocery shopping lists',
        'Strategic meal timing recommendations',
        'Bi-weekly adjustments based on progress'
      ],
      image: 'weight-loss.jpg'
    },
    'muscle-gain': {
      title: 'Muscle Building Nutrition Program',
      description: 'Building muscle requires more than just protein – it requires a strategic approach to nutrition with appropriate calorie surplus and properly timed nutrients. Our muscle gain program provides the framework needed to maximize your muscle growth and recovery.',
      features: [
        'Protein intake optimization',
        'Strategic carbohydrate timing',
        'Pre and post-workout meal recommendations',
        'Supplement recommendations (if needed)',
        'Calorie cycling for lean muscle gains'
      ],
      image: 'muscle-gain.jpg'
    },
    'performance': {
      title: 'Athletic Performance Nutrition',
      description: 'Athletes have unique nutritional needs that vary based on their sport, training schedule, and competition calendar. Our performance nutrition program is designed to fuel your training, optimize recovery, and help you perform at your peak when it matters most.',
      features: [
        'Sport-specific nutrition strategies',
        'Pre-competition meal planning',
        'Recovery nutrition protocols',
        'Hydration and electrolyte strategies',
        'Travel nutrition guidance'
      ],
      image: 'performance.jpg'
    },
    'wellness': {
      title: 'General Wellness Nutrition',
      description: 'Not focused on weight loss or muscle gain? Our wellness nutrition program helps you improve your overall health, increase energy levels, enhance sleep quality, and establish a positive relationship with food that supports long-term health and longevity.',
      features: [
        'Anti-inflammatory food recommendations',
        'Gut health optimization',
        'Energy-boosting meal strategies',
        'Balanced approach to all food groups',
        'Guidance for dining out and social situations'
      ],
      image: 'wellness.jpg'
    }
  };

  // Testimonial data
  const testimonial = {
    text: "The nutrition guidance at Elite Sport Center has been a game-changer for me. I've tried so many diets in the past, but this is the first approach that's been sustainable and effective. Down 30 pounds and still enjoying delicious food!",
    author: 'Jennifer K.',
    role: 'Member since 2024',
    image: 'nutrition-client.jpg'
  };

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="nutrition" id="nutrition">
      <NutritionHeader />
      
      <div className="nutrition-container">
        <NutritionTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
        
        <NutritionProgram 
          program={nutritionPrograms[activeTab]} 
          tabId={activeTab}
        />
      </div>
      
      <NutritionTestimonial testimonial={testimonial} />
    </div>
  );
};

export default Nutrition;