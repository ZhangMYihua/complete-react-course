import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
        <button className='signout-button' onClick={() => auth.signOut()}>
          Sign Out of {currentUser.displayName}
        </button>
      ) : (
        <Link className='option-container' to='/signIn'>
          <span>SIGN IN</span>
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(
  mapStateToProps,
  {}
)(Header);
