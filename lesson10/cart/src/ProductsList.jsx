import React from 'react';

const ProductsList = ({ cartItems }) => {
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(product => (
          <li key={product.id} className="products__list-item">
            <span className="products__item-name">{product.name}</span>
            <span className="products__item-price">${product.price}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">
        Total: {cartItems.reduce((sum, product) => sum + product.price, 0)}
      </div>
    </div>
  );
};

export default ProductsList;
