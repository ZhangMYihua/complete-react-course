import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';
import { getCurrentUser } from '../../redux/user/user.selectors';
import { getCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        <span>SHOP</span>
      </OptionLink>
      <OptionLink to='/contact'>
        <span>CONTACT</span>
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signIn'>
          <span>SIGN IN</span>
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  hidden: getCartHidden(state)
});

export default connect(mapStateToProps)(Header);
