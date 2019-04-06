import React from 'react';

import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, dispatch }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <div className='add-button' onClick={() => dispatch(addItemToCart(item))}>
        ADD TO CART
      </div>
    </div>
  );
};

export default connect(() => ({}))(CollectionItem);
