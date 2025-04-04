import React, { useState } from 'react';
import './MembershipModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faXmark, 
  faCreditCard, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const MembershipModal = ({ onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    
    // Step 2: Fitness Profile
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    fitnessLevel: 'beginner',
    goals: [],
    
    // Step 3: Membership Plan
    membershipPlan: 'basic',
    paymentMethod: 'credit-card',
    termsAgreed: false
  });
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'termsAgreed') {
        // Single checkbox
        setFormData({
          ...formData,
          [name]: checked
        });
      } else {
        // Multiple checkboxes (goals)
        const updatedGoals = [...formData.goals];
        
        if (checked) {
          updatedGoals.push(value);
        } else {
          const index = updatedGoals.indexOf(value);
          if (index > -1) {
            updatedGoals.splice(index, 1);
          }
        }
        
        setFormData({
          ...formData,
          goals: updatedGoals
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Go to next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  // Go to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.membershipPlan);
  };

  return (
    <div className="membership-modal">
      <div className="membership-content">
        <div className="membership-header">
          <h3>Join Elite Sport Center</h3>
          <button id="close-membership" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="membership-body">
          <div className="membership-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`} data-step="1">
              <span className="step-number">1</span>
              <span className="step-text">Personal Info</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`} data-step="2">
              <span className="step-number">2</span>
              <span className="step-text">Fitness Profile</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`} data-step="3">
              <span className="step-number">3</span>
              <span className="step-text">Membership Plan</span>
            </div>
          </div>
          
          <form id="membership-form" onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            <div className={`form-step ${currentStep === 1 ? 'active' : ''}`} id="step-1">
              <h4>Personal Information</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name*</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name*</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input 
                    type="text" 
                    id="zipcode" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button type="button" className="next-step" onClick={nextStep}>
                  Next: Fitness Profile
                </button>
              </div>
            </div>
            
            {/* Step 2: Fitness Profile */}
            <div className={`form-step ${currentStep === 2 ? 'active' : ''}`} id="step-2">
              <h4>Fitness Profile</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Gender</label>
                  <div className="radio-group">
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="mem-age">Age</label>
                  <input 
                    type="number" 
                    id="mem-age" 
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mem-height">Height (cm)</label>
                  <input 
                    type="number" 
                    id="mem-height" 
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mem-weight">Weight (kg)</label>
                  <input 
                    type="number" 
                    id="mem-weight" 
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fitness-level">Fitness Level</label>
                <select 
                  id="fitness-level" 
                  name="fitnessLevel"
                  value={formData.fitnessLevel}
                  onChange={handleChange}
                >
                  <option value="beginner">Beginner (New to fitness)</option>
                  <option value="intermediate">Intermediate (Some experience)</option>
                  <option value="advanced">Advanced (Regular exerciser)</option>
                  <option value="athlete">Athlete (Competitive level)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Fitness Goals (Select all that apply)</label>
                <div className="checkbox-group">
                  <label>
                    <input 
                      type="checkbox" 
                      name="goals" 
                      value="weight-loss"
                      checked={formData.goals.includes('weight-loss')}
                      onChange={handleChange}
                    />
                    Weight Loss
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="goals" 
                      value="muscle-gain"
                      checked={formData.goals.includes('muscle-gain')}
                      onChange={handleChange}
                    />
                    Muscle Gain
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="goals" 
                      value="endurance"
                      checked={formData.goals.includes('endurance')}
                      onChange={handleChange}
                    />
                    Endurance
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="goals" 
                      value="flexibility"
                      checked={formData.goals.includes('flexibility')}
                      onChange={handleChange}
                    />
                    Flexibility
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="goals" 
                      value="general-health"
                      checked={formData.goals.includes('general-health')}
                      onChange={handleChange}
                    />
                    General Health
                  </label>
                </div>
              </div>
              <div className="form-buttons">
                <button type="button" className="prev-step" onClick={prevStep}>
                  Previous
                </button>
                <button type="button" className="next-step" onClick={nextStep}>
                  Next: Membership Plan
                </button>
              </div>
            </div>
            
            {/* Step 3: Membership Plan */}
            <div className={`form-step ${currentStep === 3 ? 'active' : ''}`} id="step-3">
              <h4>Choose Your Membership Plan</h4>
              <div className="membership-options">
                <div className="membership-option">
                  <input 
                    type="radio" 
                    name="membershipPlan" 
                    id="basic-plan" 
                    value="basic"
                    checked={formData.membershipPlan === 'basic'}
                    onChange={handleChange}
                  />
                  <label htmlFor="basic-plan" className="membership-label">
                    <div className="plan-name">
                      <h5>Basic</h5>
                      <span className="plan-price">$49<small>/month</small></span>
                    </div>
                    <ul className="plan-features">
                      <li><FontAwesomeIcon icon={faCheck} /> Gym Access</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Locker Room Access</li>
                      <li><FontAwesomeIcon icon={faCheck} /> 1 Group Class/Week</li>
                      <li><FontAwesomeIcon icon={faXmark} /> Personal Training</li>
                      <li><FontAwesomeIcon icon={faXmark} /> Nutrition Consultation</li>
                    </ul>
                  </label>
                </div>
                
                <div className="membership-option">
                  <input 
                    type="radio" 
                    name="membershipPlan" 
                    id="premium-plan" 
                    value="premium"
                    checked={formData.membershipPlan === 'premium'}
                    onChange={handleChange}
                  />
                  <label htmlFor="premium-plan" className="membership-label">
                    <div className="plan-tag">POPULAR</div>
                    <div className="plan-name">
                      <h5>Premium</h5>
                      <span className="plan-price">$79<small>/month</small></span>
                    </div>
                    <ul className="plan-features">
                      <li><FontAwesomeIcon icon={faCheck} /> Unlimited Gym Access</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Locker Room Access</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Unlimited Group Classes</li>
                      <li><FontAwesomeIcon icon={faCheck} /> 2 Personal Training Sessions/Month</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Quarterly Nutrition Consultation</li>
                    </ul>
                  </label>
                </div>
                
                <div className="membership-option">
                  <input 
                    type="radio" 
                    name="membershipPlan" 
                    id="elite-plan" 
                    value="elite"
                    checked={formData.membershipPlan === 'elite'}
                    onChange={handleChange}
                  />
                  <label htmlFor="elite-plan" className="membership-label">
                    <div className="plan-name">
                      <h5>Elite</h5>
                      <span className="plan-price">$129<small>/month</small></span>
                    </div>
                    <ul className="plan-features">
                      <li><FontAwesomeIcon icon={faCheck} /> 24/7 Gym Access</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Premium Locker Room</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Unlimited Group Classes</li>
                      <li><FontAwesomeIcon icon={faCheck} /> 4 Personal Training Sessions/Month</li>
                      <li><FontAwesomeIcon icon={faCheck} /> Monthly Nutrition Consultation</li>
                    </ul>
                  </label>
                </div>
              </div>
              
              <div className="form-group payment-info">
                <h5>Payment Method</h5>
                <div className="payment-methods">
                  <label className="payment-method">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleChange}
                    />
                    <span>
                      <FontAwesomeIcon icon={faCreditCard} /> Credit Card
                    </span>
                  </label>
                  <label className="payment-method">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                    />
                    <span>
                      <FontAwesomeIcon icon={faPaypal} /> PayPal
                    </span>
                  </label>
                  <label className="payment-method">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleChange}
                    />
                    <span>
                      <FontAwesomeIcon icon={faBuilding} /> Bank Transfer
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="form-group terms">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    id="terms-agree" 
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    required
                  />
                  I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>
              
              <div className="form-buttons">
                <button type="button" className="prev-step" onClick={prevStep}>
                  Previous
                </button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={!formData.termsAgreed}
                >
                  Complete Registration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;