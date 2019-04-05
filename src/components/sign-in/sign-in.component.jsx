import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in-container'>
        <h2 className='title'>I already have an account</h2>
        <span className='subtext'>Sign in with your email and password.</span>
        <form className='sign-in-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons-bar'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              style={{ backgroundColor: '#4285F4' }}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
