import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  items: []
};

const addItem = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    existingItem.quantity++;
    return [...items];
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, action.payload)
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload ? action.payload : !state.hidden
      };
    case CartActionTypes.REMOVE_ITEM_ALL:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload.id)]
      };
    default:
      return state;
  }
};
