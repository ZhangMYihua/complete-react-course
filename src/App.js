import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import ContactPage from './pages/contact/contact';
import Header from './components/header/header';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
