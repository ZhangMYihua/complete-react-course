import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import axios from 'axios';

import { resetCart as resetCartAction } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, push, resetCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_KzWXSJxJu3foClpqvGjmUlnp00c4Xcfgbb';

  const onToken = token => {
    axios({
      url: 'http://localhost:8000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        resetCart();
        push('/');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure to use the provided credit card data'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay with 💳'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCartAction()),
  push: route => dispatch(push(route))
});

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);
