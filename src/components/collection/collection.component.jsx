import React from 'react';
import { connect } from 'react-redux';

import { getCategory } from '../../redux/shop/shop.selectors.js';
import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const Collection = ({ category }) => {
  const { title, items } = category;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item, idx) => (
          <CollectionItem item={item} key={idx} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: getCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Collection);
