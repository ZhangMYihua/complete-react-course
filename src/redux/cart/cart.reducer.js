import { CartActionTypes } from './cart.types';

import { addItem, removeItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload ? action.payload : !state.hidden
      };
    case CartActionTypes.REMOVE_ITEM_ALL:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        ]
      };
    case CartActionTypes.RESET_CART:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
