import React from 'react';
import './ReservationSuccess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const ReservationSuccess = ({ details, onClose }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Format time for display
  const formatTime = (timeString) => {
    // Parse time string (e.g. "14:00")
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    
    // Format time
    return time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="reservation-success-modal">
      <div className="success-content">
        <FontAwesomeIcon icon={faCircleCheck} />
        <h3>Reservation Confirmed!</h3>
        <p>Your spot for <span id="success-class">{details.className}</span> class has been reserved.</p>
        <p>Date: <span id="success-date">{formatDate(details.date)}</span></p>
        <p>Time: <span id="success-time">{formatTime(details.time)}</span></p>
        <p>We've sent a confirmation to your email.</p>
        <button id="close-success" onClick={onClose}>Done</button>
      </div>
    </div>
  );
};

export default ReservationSuccess;