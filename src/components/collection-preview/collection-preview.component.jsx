import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import CollectionItem from '../collection-item/collection-item.component';

import { getLocationPathname } from '../../redux/router/router.selectors';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName, push, pathname }) => (
  <div className='collectionPreview'>
    <div className='title' onClick={() => push(`${pathname}/${routeName}`)}>
      {title}
    </div>
    <div className='preview'>
      {items.map((item, i) => (
        <CollectionItem key={i} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    pathname: getLocationPathname(state)
  };
};

const mapDispatchToProps = dispatch => ({
  push: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPreview);
