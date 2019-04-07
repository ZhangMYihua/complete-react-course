import React from 'react';
import { connect } from 'react-redux';

import { removeItemAllFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ combinedItem, clearItem }) => {
  const { imageUrl, price, name, quantity } = combinedItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(combinedItem)}>
        &#x2715;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemAllFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
