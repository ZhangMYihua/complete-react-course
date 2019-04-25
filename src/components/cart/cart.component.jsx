import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { getCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart.styles';

const Cart = ({ cartItems, closeCart, push }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      inverted={true}
      onClick={() => {
        closeCart();
        push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: getCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  closeCart: () => dispatch(toggleCartHidden(false)),
  push: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
