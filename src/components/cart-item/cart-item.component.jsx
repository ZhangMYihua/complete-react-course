import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer className='cart-item'>
      <img src={imageUrl} alt='item' />
      <ItemDetailsContainer className='item-details'>
        <span>{name}</span>
        <span>{`${quantity} x $${price}`}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
