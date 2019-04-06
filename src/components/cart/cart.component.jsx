import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { getCombinedCartItems } from '../../redux/cart/cart.selectors';

import './cart.styles.scss';

const Cart = ({ combinedItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {combinedItems.length ? (
        combinedItems.map((combinedItem, idx) => (
          <CartItem key={idx} combinedItem={combinedItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  combinedItems: getCombinedCartItems(state)
});

export default connect(mapStateToProps)(Cart);
