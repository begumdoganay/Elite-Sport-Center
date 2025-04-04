import React, { useState } from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = ({ showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    
    // Validate form
    if (!formData.name.trim()) {
      showNotification('Please enter your name.', 'error');
      return;
    }
    
    if (!formData.email.trim()) {
      showNotification('Please enter your email.', 'error');
      return;
    }
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    if (!formData.message.trim()) {
      showNotification('Please enter your message.', 'error');
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    
    // Simulate form submission with delay (in a real project, this would be an API request)
    setTimeout(() => {
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset loading state
      setIsSubmitting(false);
      
      // Show success message
      showNotification('Thank you for your message! We will contact you soon.', 'success');
    }, 1500);
  };

  return (
    <div className="form">
      <h3>Make An Appointment with us</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="yourName" 
          name="name" 
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          id="yourEmail" 
          name="email" 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          id="message" 
          name="message" 
          placeholder="Enter your message" 
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> Sending...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} /> Send
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;