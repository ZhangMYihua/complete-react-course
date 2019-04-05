import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  items: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case CartActionTypes.SET_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload
      };
    default:
      return state;
  }
};
