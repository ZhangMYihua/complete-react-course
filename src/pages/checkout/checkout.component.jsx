import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  getCartItems,
  getCombinedCartPrices
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, push }) => (
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

    <CustomButton onClick={() => push('/payment')} inverted={true}>
      Pay
    </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
  total: getCombinedCartPrices(state)
});

const mapDispatchToProps = dispatch => ({
  push: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
