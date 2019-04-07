import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './app/App';

import './index.css';

render(
  <Router>
    <Provider store={store}>
      <StripeProvider apiKey='pk_test_TYooMQauvdEDq54NiTphI7jx'>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </StripeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);
