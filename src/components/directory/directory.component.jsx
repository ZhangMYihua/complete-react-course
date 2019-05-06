import React from 'react';
import { connect } from 'react-redux';

import { getSections } from '../../redux/directory/directory.selector.js';
import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map((section, i) => (
      <MenuItem key={i} {...section} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = state => ({
  sections: getSections(state)
});

export default connect(mapStateToProps)(Directory);
