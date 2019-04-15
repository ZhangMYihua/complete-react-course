import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ dispatch }) => (
  <div className='cart-container' onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className='shopping-icon' />
  </div>
);

export default connect()(CartIcon);
