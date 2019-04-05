import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart.styles.scss';

const Cart = ({ ...props }) => (
  <div className='cart-dropdown' {...props}>
    <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
