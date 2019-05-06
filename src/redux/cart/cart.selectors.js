import { createSelector } from 'reselect';

export const getCartItems = state => state.cart.cartItems;

export const getCartHidden = state => state.cart.hidden;

export const getCombinedCartPrices = createSelector(
  getCartItems,
  cartItems =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);

export const getCartItemsCount = createSelector(
  getCartItems,
  cartItems =>
    cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0)
);
