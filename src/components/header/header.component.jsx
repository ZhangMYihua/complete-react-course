import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';
import { getCurrentUser } from '../../redux/user/user.selectors';
import { getCartHidden } from '../../redux/cart/cart.selectors';

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
        <div className='option-container' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option-container' to='/signIn'>
          <span>SIGN IN</span>
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  hidden: getCartHidden(state)
});

export default connect(mapStateToProps)(Header);
