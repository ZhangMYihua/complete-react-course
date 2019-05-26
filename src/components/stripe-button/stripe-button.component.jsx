import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { resetCart as resetCartAction } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, push, resetCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_KzWXSJxJu3foClpqvGjmUlnp00c4Xcfgbb';

  const onToken = token => {
    alert('Successful payment!');
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
