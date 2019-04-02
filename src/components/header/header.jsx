import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
	<div className="header">
		<Link className="logoContainer" to="/">
			<span className="logo">HOME</span>
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