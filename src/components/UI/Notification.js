import React, { useEffect } from 'react';
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, 
  faCircleExclamation, 
  faTriangleExclamation, 
  faCircleInfo,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

const Notification = ({ message, type = 'info', onClose }) => {
  // Automatically close notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  // Set notification icon based on type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return faCircleCheck;
      case 'error':
        return faCircleExclamation;
      case 'warning':
        return faTriangleExclamation;
      case 'info':
      default:
        return faCircleInfo;
    }
  };

  return (
    <div className={`notification notification-${type} show`}>
      <div className="notification-icon">
        <FontAwesomeIcon icon={getIcon()} />
      </div>
      <div className="notification-message">{message}</div>
      <button className="notification-close" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default Notification;