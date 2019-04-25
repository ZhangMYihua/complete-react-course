import React from 'react';
import { connect } from 'react-redux';

import {
  removeItemAllFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveItemContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity, id } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveItemContainer onClick={() => clearItem(id)}>
        &#x2715;
      </RemoveItemContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItemId => dispatch(removeItemAllFromCart(cartItemId)),
  addItem: cartItemId => dispatch(addItemToCart(cartItemId)),
  removeItem: cartItemId => dispatch(removeItemFromCart(cartItemId))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
