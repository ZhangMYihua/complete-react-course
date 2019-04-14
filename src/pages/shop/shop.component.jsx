import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
  <div className='shop'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={Collection} />
  </div>
);

export default ShopPage;
