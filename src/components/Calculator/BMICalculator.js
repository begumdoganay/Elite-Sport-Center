import React, { useState, useRef } from 'react';
import './BMICalculator.css';

const BMICalculator = ({ showNotification }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const arrowRef = useRef(null);
  const resultDivRef = useRef(null);

  // Calculate BMI
  const calculateBMI = () => {
    // Validate inputs
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
      showNotification('Please enter valid height and weight values.', 'error');
      return;
    }
    
    // Calculate BMI: weight(kg) / (height(m))²
    const bmi = weightValue / ((heightValue / 100) * (heightValue / 100));
    
    // Round to 1 decimal place
    const roundedBMI = Math.round(bmi * 10) / 10;
    
    // Update arrow position
    if (arrowRef.current) {
      arrowRef.current.style.transition = 'left 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      arrowRef.current.style.left = calculateArrowPosition(roundedBMI) + '%';
    }
    
    // Update result
    setBmiResult({
      value: roundedBMI,
      category: getBMICategory(roundedBMI)
    });
    
    // Show result div
    if (resultDivRef.current) {
      resultDivRef.current.style.display = 'block';
      
      // Add color based on BMI category
      if (roundedBMI < 18.5) {
        resultDivRef.current.style.backgroundColor = '#89CFF0'; // Light blue for underweight
      } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
        resultDivRef.current.style.backgroundColor = '#90EE90'; // Light green for normal
      } else if (roundedBMI >= 25 && roundedBMI < 30) {
        resultDivRef.current.style.backgroundColor = '#FFD700'; // Gold for overweight
      } else if (roundedBMI >= 30 && roundedBMI < 35) {
        resultDivRef.current.style.backgroundColor = '#FFA07A'; // Light salmon for obese class I
      } else {
        resultDivRef.current.style.backgroundColor = '#FF6347'; // Tomato for obese class II+
      }
    }
    
    // Show notification with advice
    showNotification(`Your BMI is ${roundedBMI} (${getBMICategory(roundedBMI)}). Talk to our trainers for personalized advice!`, 'success');
  };
  
  // Calculate arrow position based on BMI value
  const calculateArrowPosition = (bmi) => {
    let leftPosition;
    
    // Position based on BMI categories
    if (bmi < 18.5) {
      // Underweight
      leftPosition = 14;
    } else if (bmi >= 18.5 && bmi < 25) {
      // Normal weight
      leftPosition = 31;
    } else if (bmi >= 25 && bmi < 30) {
      // Overweight
      leftPosition = 47;
    } else if (bmi >= 30 && bmi < 35) {
      // Obese class I
      leftPosition = 63;
    } else {
      // Obese class II and above
      leftPosition = 80;
    }
    
    return leftPosition;
  };
  
  // Get BMI category description based on BMI value
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
      return 'Obese Class I';
    } else {
      return 'Obese Class II+';
    }
  };

  // Handle key press to trigger calculation
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateBMI();
    }
  };

  return (
    <>
      <p>
        Body Mass Index (BMI) is a valuable tool for assessing whether you're at a healthy weight. 
        Our easy-to-use calculator helps you determine your BMI and understand what it means for 
        your overall health.
      </p>
      <div className="calculator-input">
        <div>
          <input 
            id="heightInput" 
            type="number" 
            placeholder="Your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="heightInput">cm</label>
        </div>
        <div>
          <input 
            id="weightInput" 
            type="number" 
            placeholder="Your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="weightInput">kg</label>
        </div>
        <button id="btn-calculate" onClick={calculateBMI}>Calculate</button>
      </div>
      
      <div 
        id="bmi-result" 
        ref={resultDivRef}
        style={{ display: 'none', marginTop: '20px', padding: '15px', backgroundColor: '#f1f8ff', borderRadius: '5px', textAlign: 'center' }}
      >
        <h4 style={{ marginBottom: '10px' }}>Your BMI Result</h4>
        {bmiResult && (
          <>
            <p id="bmi-value" style={{ fontSize: '18px', fontWeight: 'bold' }}>
              Your BMI is {bmiResult.value}
            </p>
            <p id="bmi-category" style={{ fontSize: '16px' }}>
              {bmiResult.category}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default BMICalculator;