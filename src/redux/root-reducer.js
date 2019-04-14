import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { shopReducer } from './shop/shop.reducer';
import { directoryReducer } from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

export default history =>
  persistReducer(
    persistConfig,
    combineReducers({
      router: connectRouter(history),
      user: userReducer,
      cart: cartReducer,
      shop: shopReducer,
      directory: directoryReducer
    })
  );
