import { createSelector } from 'reselect';

export const getCartItems = state => state.cart.items;

export const getCartHidden = state => state.cart.hidden;

export const getCombinedCartItems = createSelector(
  getCartItems,
  items =>
    items.reduce((combinedItems, item) => {
      const combinedItem = combinedItems.find(({ id }) => id === item.id);
      if (combinedItem) {
        combinedItem.quantity++;
        return combinedItems;
      }
      return [...combinedItems, { ...item, quantity: 1 }];
    }, [])
);
