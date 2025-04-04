import React from 'react';
import './CartModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ items, onClose, onUpdateQuantity, onRemoveItem }) => {
  // Calculate total price
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h3>Your Shopping Cart</h3>
          <button id="close-cart" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="cart-items" id="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <img 
                    src={require(`../../assets/images/${item.image}`)} 
                    alt={item.name} 
                    className="cart-item-image" 
                  />
                  <div>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                </div>
                
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="quantity-number">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                
                <button 
                  className="remove-item"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span id="cart-total-price">${calculateTotal().toFixed(2)}</span>
          </div>
          <button 
            className="checkout-btn"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;