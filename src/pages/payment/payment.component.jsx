import React from 'react';
import { connect } from 'react-redux';

import { Elements } from 'react-stripe-elements';

import PaymentForm from '../../components/payment-form/payment-form.component';

import { getCombinedCartPrices } from '../../redux/cart/cart.selectors';

import './payment.styles.scss';

const PaymentPage = ({ finalPrice }) => (
  <div className='payment-page'>
    <p>Total to pay is ${finalPrice}</p>
    <Elements>
      <PaymentForm />
    </Elements>
  </div>
);

const mapStateToProps = state => ({
  finalPrice: getCombinedCartPrices(state)
});

export default connect(mapStateToProps)(PaymentPage);
