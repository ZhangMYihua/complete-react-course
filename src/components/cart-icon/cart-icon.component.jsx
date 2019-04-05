import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { setCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, hidden, onSetCartHidden }) => (
  <div className='cart-container' onClick={() => onSetCartHidden(!hidden)}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { items, hidden } }) => ({
  itemCount: items.length,
  hidden
});

const mapDispatchToProps = dispatch => ({
  onSetCartHidden: bool => dispatch(setCartHidden(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
