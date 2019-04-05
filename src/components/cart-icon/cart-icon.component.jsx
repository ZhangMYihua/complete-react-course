import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, dispatch }) => (
  <div className='cart-container' onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { items } }) => ({
  itemCount: items.length
});

export default connect(mapStateToProps)(CartIcon);
