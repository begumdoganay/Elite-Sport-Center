import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = ({ showNotification }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update state
    setIsDarkMode(newTheme === 'dark');
    
    // Show notification
    showNotification(`Switched to ${newTheme} mode`, 'info');
  };

  return (
    <div className={`theme-switcher ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;