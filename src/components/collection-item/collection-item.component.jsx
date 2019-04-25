import React from 'react';

import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, dispatch }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='background-image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        className='add-button'
        onClick={() => dispatch(addItemToCart(item))}
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect()(CollectionItem);
