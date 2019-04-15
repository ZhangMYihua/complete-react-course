import { createSelector } from 'reselect';

export const getCartItems = state => state.cart.cartItems;

export const getCartHidden = state => state.cart.hidden;

export const getCartItemsCount = createSelector(
  getCartItems,
  cartItems =>
    cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0)
);
