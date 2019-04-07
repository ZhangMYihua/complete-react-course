import React from 'react';
import { connect } from 'react-redux';

import {
  getCombinedCartItems,
  getCombinedCartPrices
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ combinedItems, total }) => (
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
    {combinedItems.map((combinedItem, idx) => (
      <CheckoutItem key={idx} combinedItem={combinedItem} />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = state => ({
  combinedItems: getCombinedCartItems(state),
  total: getCombinedCartPrices(state)
});

export default connect(mapStateToProps)(CheckoutPage);
