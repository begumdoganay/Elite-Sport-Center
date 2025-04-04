import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';

const Navbar = ({ onCartClick, cartItemsCount, onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active menu item based on scroll position
      updateActiveMenuItem();
    };
    
    // Function to update active menu item based on scroll position
    const updateActiveMenuItem = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Function to handle menu item click
  const handleMenuItemClick = (e, targetId) => {
    e.preventDefault();
    
    // Close mobile menu
    setMenuOpen(false);
    
    // Scroll to target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
      
      setActiveLink(targetId);
    }
  };
  
  // Function to handle click outside menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          !event.target.closest('.menu') && 
          !event.target.closest('.menu-icon')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Elite Sport Center Logo" />
      </div>
      
      <label className="menu-icon" id="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="menu-hmbgr" />
      </label>
      
      <div className="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={(e) => handleMenuItemClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#classes" 
              className={`nav-link ${activeLink === 'classes' ? 'active' : ''}`}
              onClick={(e) => handleMenuItemClick(e, 'classes')}
            >
              Classes
            </a>
          </li>
          <li>
            <a 
              href="#trainers" 
              className={`nav-link ${activeLink === 'trainers' ? 'active' : ''}`}
              onClick={(e) => handleMenuItemClick(e, 'trainers')}
            >
              Trainers
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className={`nav-link ${activeLink === 'testimonials' ? 'active' : ''}`}
              onClick={(e) => handleMenuItemClick(e, 'testimonials')}
            >
              Reviews
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleMenuItemClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#" id="cart-icon" onClick={onCartClick}>
              <FontAwesomeIcon icon={faCartShopping} />
              <span id="cart-count">{cartItemsCount}</span>
            </a>
          </li>
          <li>
            <a href="#" id="join-us-btn" className="btn-primary" onClick={onJoinClick}>
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;