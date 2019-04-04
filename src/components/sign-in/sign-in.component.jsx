import React from 'react';

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

  handleSubmit() {}

  render() {
    const { email, password } = this.state;

    return (
      <div className='signInContainer'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form className='signInForm' onSubmit={this.handleSubmit}>
          <div className='group'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className='group'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
          </div>
          <input type='submit' value='Sign In' />
        </form>
      </div>
    );
  }
}

export default SignIn;
