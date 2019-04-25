import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { getCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ itemCount, dispatch }) => (
  <CartContainer onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = state => ({
  itemCount: getCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
