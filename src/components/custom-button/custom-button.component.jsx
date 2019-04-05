import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...props }) => (
  <button
    className={`${inverted ? 'inverted' : ''} form-button ${props.className}`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
