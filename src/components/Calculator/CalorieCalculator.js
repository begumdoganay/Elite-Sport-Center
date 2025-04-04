import React, { useState, useRef } from 'react';
import './CalorieCalculator.css';

const CalorieCalculator = ({ showNotification }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('1.55');
  const [calorieResult, setCalorieResult] = useState(null);
  const resultDivRef = useRef(null);

  // Calculate daily calorie needs
  const calculateCalories = () => {
    // Validate inputs
    if (!age || !height || !weight) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }
    
    const ageValue = parseInt(age);
    const heightValue = parseInt(height);
    const weightValue = parseInt(weight);
    const activityValue = parseFloat(activity);
    
    if (isNaN(ageValue) || isNaN(heightValue) || isNaN(weightValue) || 
        ageValue <= 0 || heightValue <= 0 || weightValue <= 0) {
      showNotification('Please enter valid values.', 'error');
      return;
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
    } else {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const maintenance = Math.round(bmr * activityValue);
    
    // Calculate weight loss and weight gain calories
    const weightLoss = Math.round(maintenance * 0.8); // 20% deficit
    const weightGain = Math.round(maintenance * 1.15); // 15% surplus
    
    // Update result
    setCalorieResult({
      maintenance,
      weightLoss,
      weightGain
    });
    
    // Show result div
    if (resultDivRef.current) {
      resultDivRef.current.style.display = 'block';
    }
    
    // Show notification
    showNotification(`Your daily maintenance calories: ${maintenance} calories`, 'success');
  };

  return (
    <>
      <p>
        Knowing your daily calorie needs is essential for weight management. This calculator 
        estimates your maintenance calories based on your activity level, which you can adjust 
        for weight loss or gain goals.
      </p>
      <div className="calculator-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input 
              type="number" 
              id="age" 
              placeholder="Years"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                Male
              </label>
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cal-height">Height</label>
            <input 
              type="number" 
              id="cal-height" 
              placeholder="cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cal-weight">Weight</label>
            <input 
              type="number" 
              id="cal-weight" 
              placeholder="kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="activity">Activity Level</label>
          <select 
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="1.2">Sedentary (office job, little exercise)</option>
            <option value="1.375">Light Activity (1-2 days/week)</option>
            <option value="1.55" selected>Moderate Activity (3-5 days/week)</option>
            <option value="1.725">Very Active (6-7 days/week)</option>
            <option value="1.9">Extremely Active (athlete, physical job)</option>
          </select>
        </div>
        <button id="calc-calories" onClick={calculateCalories}>Calculate Calories</button>
      </div>
      
      <div 
        id="calorie-result" 
        ref={resultDivRef}
        style={{ display: 'none', marginTop: '20px', padding: '15px', backgroundColor: '#f1f8ff', borderRadius: '5px' }}
      >
        <h4 style={{ marginBottom: '10px' }}>Your Daily Calorie Needs</h4>
        {calorieResult && (
          <div className="calorie-results">
            <div className="calorie-item">
              <span>Maintenance:</span>
              <strong id="maintenance-calories">{calorieResult.maintenance}</strong> calories
            </div>
            <div className="calorie-item">
              <span>Weight Loss:</span>
              <strong id="weight-loss-calories">{calorieResult.weightLoss}</strong> calories
            </div>
            <div className="calorie-item">
              <span>Weight Gain:</span>
              <strong id="weight-gain-calories">{calorieResult.weightGain}</strong> calories
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalorieCalculator;