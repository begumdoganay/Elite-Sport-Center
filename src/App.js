import React, { useState, useEffect } from 'react';
import './App.css';

// Import layout components
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Header/HeroSection';
import StatCards from './components/Header/StatCards';

// Import section components
import Classes from './components/Classes/Classes';
import Calculator from './components/Calculator/Calculator';
import Trainers from './components/Trainers/Trainers';
import Equipment from './components/Equipment/Equipment';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Membership from './components/Membership/Membership';
import Blog from './components/Blog/Blog';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Nutrition from './components/Nutrition/Nutrition';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

// Import modal components
import ReservationModal from './components/Modals/ReservationModal';
import MembershipModal from './components/Modals/MembershipModal';
import CartModal from './components/Modals/CartModal';
import ReservationSuccess from './components/Modals/ReservationSuccess';
import MembershipSuccess from './components/Modals/MembershipSuccess';

// Import utility components
import Loader from './components/UI/Loader';
import Notification from './components/UI/Notification';
import BackToTop from './components/UI/BackToTop';

function App() {
  // State for modals
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showReservationSuccess, setShowReservationSuccess] = useState(false);
  const [showMembershipSuccess, setShowMembershipSuccess] = useState(false);
  
  // State for notifications
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  // State for loading
  const [loading, setLoading] = useState(true);
  
  // State for selected class (for reservation modal)
  const [selectedClass, setSelectedClass] = useState('');
  
  // State for cart
  const [cartItems, setCartItems] = useState([]);
  
  // State for reservation details
  const [reservationDetails, setReservationDetails] = useState({
    className: '',
    date: '',
    time: ''
  });
  
  // State for membership plan
  const [selectedPlan, setSelectedPlan] = useState('');

  // Effect to simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to show notification
  const showNotification = (message, type = 'info') => {
    setNotification({ show: true, message, type });
    
    // Auto hide notification after 5 seconds
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 5000);
  };
  
  // Function to handle class reservation
  const handleReserveClass = (className) => {
    setSelectedClass(className);
    setShowReservationModal(true);
  };
  
  // Function to handle reservation submission
  const handleReservationSubmit = (date, time) => {
    setReservationDetails({ className: selectedClass, date, time });
    setShowReservationModal(false);
    setShowReservationSuccess(true);
  };
  
  // Function to handle membership button click
  const handleJoinClick = () => {
    setShowMembershipModal(true);
  };
  
  // Function to handle membership registration
  const handleMembershipSubmit = (plan) => {
    setSelectedPlan(plan);
    setShowMembershipModal(false);
    setShowMembershipSuccess(true);
  };
  
  // Function to handle add to cart
  const handleAddToCart = (product) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Update quantity
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    showNotification(`${product.name} added to cart!`, 'success');
  };
  
  // Function to handle cart icon click
  const handleCartClick = () => {
    setShowCartModal(true);
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar 
            onCartClick={handleCartClick} 
            cartItemsCount={cartItems.length}
            onJoinClick={handleJoinClick}
          />
          
          <main>
            <section id="home">
              <HeroSection />
              <StatCards />
            </section>
            
            <section id="classes">
              <Classes onReserveClass={handleReserveClass} />
            </section>
            
            <section id="calculator">
              <Calculator showNotification={showNotification} />
            </section>
            
            <section id="trainers">
              <Trainers />
            </section>
            
            <section id="equipment">
              <Equipment onAddToCart={handleAddToCart} />
            </section>
            
            <section id="testimonials">
              <Testimonials />
            </section>
            
            <section id="contact">
              <Contact showNotification={showNotification} />
            </section>
            
            <section id="membership">
              <Membership onJoinClick={handleJoinClick} />
            </section>
            
            <section id="blog">
              <Blog />
            </section>
            
            <section id="success-stories">
              <SuccessStories onJoinClick={handleJoinClick} />
            </section>
            
            <section id="nutrition">
              <Nutrition />
            </section>
            
            <section id="faq">
              <FAQ />
            </section>
          </main>
          
          <Footer />
          
          <BackToTop />
          
          {notification.show && (
            <Notification 
              message={notification.message} 
              type={notification.type}
              onClose={() => setNotification({ ...notification, show: false })}
            />
          )}
          
          {/* Modals */}
          {showReservationModal && (
            <ReservationModal 
              className={selectedClass}
              onClose={() => setShowReservationModal(false)}
              onSubmit={handleReservationSubmit}
            />
          )}
          
          {showMembershipModal && (
            <MembershipModal 
              onClose={() => setShowMembershipModal(false)}
              onSubmit={handleMembershipSubmit}
            />
          )}
          
          {showCartModal && (
            <CartModal 
              items={cartItems}
              onClose={() => setShowCartModal(false)}
              onUpdateQuantity={(id, quantity) => {
                setCartItems(cartItems.map(item => 
                  item.id === id ? { ...item, quantity } : item
                ));
              }}
              onRemoveItem={(id) => {
                setCartItems(cartItems.filter(item => item.id !== id));
              }}
            />
          )}
          
          {showReservationSuccess && (
            <ReservationSuccess 
              details={reservationDetails}
              onClose={() => setShowReservationSuccess(false)}
            />
          )}
          
          {showMembershipSuccess && (
            <MembershipSuccess 
              plan={selectedPlan}
              onClose={() => setShowMembershipSuccess(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;