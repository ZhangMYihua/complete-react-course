import React, { Component } from 'react';

import Directory from '../../components/directory/directory';

import './homepage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
    );
  }
}

export default HomePage;
