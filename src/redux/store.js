import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from './root-reducer';

export const history = createBrowserHistory();

const middlewares = [logger, thunk, routerMiddleware(history)];

export const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
