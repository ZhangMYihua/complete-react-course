import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
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
