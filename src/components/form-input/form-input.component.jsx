import React from 'react';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className='group'>
    <input
      className='formInput
		'
      onChange={handleChange}
      {...props}
    />
    <label for={props.name}>{label}</label>
  </div>
);

export default FormInput;
