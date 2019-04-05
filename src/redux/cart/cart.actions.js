import { CartActionTypes } from './cart.types';

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
