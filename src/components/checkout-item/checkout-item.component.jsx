import React from 'react';
import { connect } from 'react-redux';

import {
  removeItemAllFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem.id)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem.id)}>
        &#x2715;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItemId => dispatch(removeItemAllFromCart(cartItemId)),
  addItem: cartItem => dispatch(addItemToCart(cartItem)),
  removeItem: cartItemId => dispatch(removeItemFromCart(cartItemId))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
