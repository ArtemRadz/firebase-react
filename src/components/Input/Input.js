import React from 'react';

import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
  type = 'text',
  label,
  placeholder = '',
  value,
  handleChange
}) => {
  const onChange = event => handleChange(event);
  const id = `input-${label.replace(' ', '').toLowerCase()}`;

  return (
    <label htmlFor={id} className="label-component">
      {label}
      <input
        id={id}
        className="input-component"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
