import React, { useState, useEffect } from 'react';
import './ReservationModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ReservationModal = ({ className, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [availableTimes, setAvailableTimes] = useState([]);
  
  // Generate available time slots based on selected date
  useEffect(() => {
    if (formData.date) {
      // Get day of week (0 = Sunday, 1 = Monday, etc.)
      const dayOfWeek = new Date(formData.date).getDay();
      
      // Different time slots based on day of week
      let timeSlots = [];
      
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Weekend (Saturday, Sunday)
        timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];
      } else if (dayOfWeek === 1 || dayOfWeek === 2) {
        // Monday, Tuesday
        timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
      } else {
        // Wednesday, Thursday, Friday
        timeSlots = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
      }
      
      setAvailableTimes(timeSlots);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.date, formData.time);
  };
  
  // Set min date to today
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="reservation-modal">
      <div className="reservation-content">
        <div className="reservation-header">
          <h3>Reserve Your Class</h3>
          <button id="close-reservation" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="reservation-body">
          <div className="class-info">
            <h4>Class: <span id="selected-class">{className}</span></h4>
          </div>
          <form id="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="res-name">Your Name</label>
              <input 
                type="text" 
                id="res-name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-email">Email Address</label>
              <input 
                type="email" 
                id="res-email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-phone">Phone Number</label>
              <input 
                type="tel" 
                id="res-phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-date">Select Date</label>
              <input 
                type="date" 
                id="res-date" 
                name="date"
                min={getMinDate()}
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-time">Select Time</label>
              <select 
                id="res-time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                disabled={!formData.date}
              >
                <option value="">Select a time slot</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="res-notes">Additional Notes</label>
              <textarea 
                id="res-notes" 
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="reserve-btn">Confirm Reservation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;