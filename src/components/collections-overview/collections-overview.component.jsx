import React from 'react';

import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { getPreviewCollections } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ previewCollections, match }) => (
  <CollectionsOverviewContainer className='collections-overview'>
    <h1>Collections</h1>
    {previewCollections.map((collection, idx) => (
      <CollectionPreview {...collection} key={idx} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = state => ({
  previewCollections: getPreviewCollections(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
