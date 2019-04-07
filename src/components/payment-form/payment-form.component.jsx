import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import CustomButton from '../custom-button/custom-button.component';

import './payment-form.scss';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: 'Name' });

    console.log(token);
  }

  render() {
    return (
      <div className='payment-form'>
        <h2>Please use the test credit card:</h2>
        <p>Credit Card #: 4242 4242 4242 4242</p>
        <p>MM/YY: 12/22</p>
        <p>CVC: 789</p>
        <p>ZIP: 12345</p>
        <div className='card-container'>
          <CardElement />
        </div>
        <CustomButton onClick={this.submit}>Send</CustomButton>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);
