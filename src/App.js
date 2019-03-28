import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import HatsPage from './pages/hats/hats';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
