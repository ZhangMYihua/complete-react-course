import { CartActionTypes } from './cart.types';

import { addItem } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
