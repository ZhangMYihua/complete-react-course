import React from 'react';
import { connect } from 'react-redux';

import { getSections } from '../../redux/directory/directory.selector.js';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map((section, i) => (
      <MenuItem key={i} {...section} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  sections: getSections(state)
});

export default connect(mapStateToProps)(Directory);
