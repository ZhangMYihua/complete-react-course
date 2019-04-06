import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart.styles.scss';

const Cart = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </div>
    <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items } }) => ({ items });

export default connect(mapStateToProps)(Cart);
