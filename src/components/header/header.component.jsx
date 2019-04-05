import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option-container' to='/shop'>
        <span>SHOP</span>
      </Link>
      <Link className='option-container' to='/contact'>
        <span>CONTACT</span>
      </Link>
      {currentUser ? (
        <CustomButton onClick={() => auth.signOut()} inverted={true}>
          Sign Out of {currentUser.displayName}
        </CustomButton>
      ) : (
        <Link className='option-container' to='/signIn'>
          <span>SIGN IN</span>
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : (
      <Cart
        style={{
          position: 'absolute',
          top: '80px',
          right: '0',
          zIndex: 5
        }}
      />
    )}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(
  mapStateToProps,
  {}
)(Header);
