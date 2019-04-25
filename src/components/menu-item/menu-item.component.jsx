import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, small, linkTo, push }) => (
  <MenuItemContainer small={small} onClick={() => push(linkTo)}>
    <BackgroundImageContainer
      className='background-image-container'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer className='content'>
      <ContentTitle className='title'>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle className='subtitle'>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

const mapDispatchToProps = dispatch => ({
  push: route => dispatch(push(route))
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
