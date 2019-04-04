import React from 'react';

import './form-button.styles.scss';

const FormButton = ({ children, ...props }) => (
  <button className='form-button' {...props}>
    {children}
  </button>
);

export default FormButton;
