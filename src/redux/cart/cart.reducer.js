import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  items: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
