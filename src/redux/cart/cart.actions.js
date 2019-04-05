import { CartActionTypes } from './cart.types';

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const setCartHidden = boolean => ({
  type: CartActionTypes.SET_CART_HIDDEN,
  payload: boolean
});
