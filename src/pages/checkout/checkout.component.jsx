import React from 'react';
import { connect } from 'react-redux';

import {
  getCartItems,
  getCombinedCartPrices
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem, idx) => (
      <CheckoutItem key={idx} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
  total: getCombinedCartPrices(state)
});

export default connect(mapStateToProps)(CheckoutPage);
