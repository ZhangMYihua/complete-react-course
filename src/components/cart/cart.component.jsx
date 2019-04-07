import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { getCombinedCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart.styles.scss';

const Cart = ({ combinedItems, closeCart, history }) => (
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
    <CustomButton
      inverted={true}
      onClick={() => {
        closeCart();
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  combinedItems: getCombinedCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  closeCart: () => dispatch(toggleCartHidden(false))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
