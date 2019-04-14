import React from 'react';
import { connect } from 'react-redux';

import { getCategory } from '../../redux/shop/shop.selectors.js';
import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({ category }) => {
  const { title, items } = category;
  return (
    <div className='collection'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item, idx) => (
          <CollectionItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: getCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Collection);
