import React, { Component } from 'react';

import Directory from '../../components/directory/directory';

import './homepage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Directory />
      </div>
    );
  }
}

export default HomePage;
