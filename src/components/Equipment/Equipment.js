import React from 'react';
import './Equipment.css';
import EquipmentHeader from './EquipmentHeader';
import ProductList from './ProductList';

const Equipment = ({ onAddToCart }) => {
  // Product data
  const products = [
    {
      id: 1,
      name: 'Kettlebell / 5kg',
      price: 40,
      originalPrice: 60,
      image: 'purchase1.jpg'
    },
    {
      id: 2,
      name: 'Treadmill',
      price: 400,
      originalPrice: 599.99,
      image: 'purchase2.jpg'
    },
    {
      id: 3,
      name: 'Hex Dumbbell',
      price: 50,
      originalPrice: 150,
      image: 'purchase3.jpg'
    },
    {
      id: 4,
      name: 'Kettlebell / 32kg',
      price: 100,
      originalPrice: 200,
      image: 'purchase4.jpg'
    }
  ];

  return (
    <div className="bottom-trainer">
      <div className="purchase">
        <EquipmentHeader />
      </div>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Equipment;