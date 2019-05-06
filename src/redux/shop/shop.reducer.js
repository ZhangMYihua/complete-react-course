import { SHOP_ITEMS } from './shop.data';

const INITIAL_STATE = {
  items: SHOP_ITEMS
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
