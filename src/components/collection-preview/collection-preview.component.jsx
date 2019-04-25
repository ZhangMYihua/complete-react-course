import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import CollectionItem from '../collection-item/collection-item.component';

import { getLocationPathname } from '../../redux/router/router.selectors';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, push, pathname }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => push(`${pathname}/${routeName}`)}>
      {title}
    </TitleContainer>
    <PreviewContainer>
      {items.map((item, i) => (
        <CollectionItem key={i} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

const mapStateToProps = state => ({
  pathname: getLocationPathname(state)
});

const mapDispatchToProps = dispatch => ({
  push: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPreview);
