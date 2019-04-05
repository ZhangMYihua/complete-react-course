import { CartActionTypes } from './cart.types';

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
