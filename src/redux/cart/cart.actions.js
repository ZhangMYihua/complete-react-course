import { CartActionTypes } from './cart.types';

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const toggleCartHidden = (bool = null) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: bool
});

export const removeItemAllFromCart = cartItem => ({
  type: CartActionTypes.REMOVE_ITEM_ALL,
  payload: cartItem
});
