import React from 'react';

import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type = 'text', placeholder = '', value, handleChange }) => {
  const onChange = event => handleChange(event);

  return (
    <input
      id="input-component"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default Input;
