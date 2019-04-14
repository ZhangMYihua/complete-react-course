import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkTo, push }) => (
  <div className={`${size} menu-item`} onClick={() => push(linkTo)}>
    <div
      className='background-container'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  push: route => dispatch(push(route))
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
