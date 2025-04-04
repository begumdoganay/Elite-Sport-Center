import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="purchase-card">
      <img 
        src={require(`../../assets/images/${product.image}`)} 
        alt={product.name} 
      />
      <div className="purchase-layer">
        <h4>{product.name}</h4>
        <p>
          <span>${product.originalPrice}</span> / ${product.price}
        </p>
        <div className="price" onClick={onAddToCart}>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Add To Cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;