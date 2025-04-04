import React, { useState } from 'react';
import './Calculator.css';
import BMICalculator from './BMICalculator';
import CalorieCalculator from './CalorieCalculator';
import BodyFatCalculator from './BodyFatCalculator';
import MacroCalculator from './MacroCalculator';
import bmiIndexImg from '../../assets/images/bmi-index.jpg';

const Calculator = ({ showNotification }) => {
  const [activeCalculator, setActiveCalculator] = useState('bmi');

  // Handle calculator tab change
  const handleTabChange = (calcType) => {
    setActiveCalculator(calcType);
  };

  return (
    <div className="bottom-classes">
      <div className="calculator">
        <h3>Fitness Calculators</h3>
        <p>
          Our fitness calculators help you track important health metrics to monitor your progress 
          and set realistic goals. Use these tools to get a better understanding of your current 
          fitness level and what you need to achieve optimal health.
        </p>
        
        <div className="calculator-tabs">
          <button 
            className={`calc-tab ${activeCalculator === 'bmi' ? 'active' : ''}`} 
            data-calc="bmi"
            onClick={() => handleTabChange('bmi')}
          >
            BMI Calculator
          </button>
          <button 
            className={`calc-tab ${activeCalculator === 'calorie' ? 'active' : ''}`} 
            data-calc="calorie"
            onClick={() => handleTabChange('calorie')}
          >
            Calorie Calculator
          </button>
          <button 
            className={`calc-tab ${activeCalculator === 'bodyfat' ? 'active' : ''}`} 
            data-calc="bodyfat"
            onClick={() => handleTabChange('bodyfat')}
          >
            Body Fat Calculator
          </button>
          <button 
            className={`calc-tab ${activeCalculator === 'macro' ? 'active' : ''}`} 
            data-calc="macro"
            onClick={() => handleTabChange('macro')}
          >
            Macro Calculator
          </button>
        </div>
        
        <div className="calculator-content">
          <div className={`calc-content ${activeCalculator === 'bmi' ? 'active' : ''}`} id="bmi-calc">
            <BMICalculator showNotification={showNotification} />
          </div>
          
          <div className={`calc-content ${activeCalculator === 'calorie' ? 'active' : ''}`} id="calorie-calc">
            <CalorieCalculator showNotification={showNotification} />
          </div>
          
          <div className={`calc-content ${activeCalculator === 'bodyfat' ? 'active' : ''}`} id="bodyfat-calc">
            <BodyFatCalculator showNotification={showNotification} />
          </div>
          
          <div className={`calc-content ${activeCalculator === 'macro' ? 'active' : ''}`} id="macro-calc">
            <MacroCalculator showNotification={showNotification} />
          </div>
        </div>
      </div>
      
      <div className="calculator-img">
        <img src={bmiIndexImg} className="calc-img" alt="BMI index" />
        <img className="arrow" src="/images/arrow-155-16.png" alt="arrow" style={{ left: '14%' }} />
      </div>
    </div>
  );
};

export default Calculator;