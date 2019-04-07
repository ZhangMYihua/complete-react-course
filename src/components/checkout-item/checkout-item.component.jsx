import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  combinedItem: { imageUrl, price, name, quantity }
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>${price}</span>
    <div className='remove-button'>&#x2715;</div>
  </div>
);

export default CheckoutItem;
