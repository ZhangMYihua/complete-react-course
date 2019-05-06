import { createSelector } from 'reselect';

export const getShopItems = state => state.shop.items;

export const getCategory = category =>
  createSelector(
    getShopItems,
    shopItems => shopItems[category]
  );

export const getPreviewCollections = createSelector(
  getShopItems,
  shopItems =>
    Object.keys(shopItems).map(key => ({
      ...shopItems[key],
      items: shopItems[key].items.slice(0, 4)
    }))
);
