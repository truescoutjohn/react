import React, { Component } from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: '1', name: 'iPhone 11', price: 999 },
        { id: '2', name: 'iPad Pro', price: 799 },
      ],
    };
  }
  render() {
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={this.state.products.length} />
        <ProductsList cartItems={this.state.products} />
      </div>
    );
  }
}

export default ShoppingCart;
