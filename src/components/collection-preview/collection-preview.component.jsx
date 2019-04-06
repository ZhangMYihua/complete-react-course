import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collectionPreview'>
    <div className='title'>{title}</div>
    <div className='preview'>
      {items.map((item, i) => (
        <CollectionItem key={i} item={item} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
