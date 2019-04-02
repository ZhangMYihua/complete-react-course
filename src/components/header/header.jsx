import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
	<div className="header">
		<Link className="logoContainer" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="optionContainer" to="/shop">
				<span>SHOP</span>
			</Link>
			<Link className="optionContainer" to="/contact">
				<span>CONTACT</span>
			</Link>
		</div>
	</div>
)

export default Header;