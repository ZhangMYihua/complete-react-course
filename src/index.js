import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { StripeProvider } from 'react-stripe-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor, history } from './redux/store';

import App from './app/App';

import './index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StripeProvider apiKey='pk_test_TYooMQauvdEDq54NiTphI7jx'>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </StripeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
