import React from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder = '', value, handleChange }) => {
  const onChange = event => handleChange(event);

  return (
    <input
      css={css`
        border: 0;
        padding: 0 5px;
        border-radius: 8px;
        background-color: #039be5;
        color: #fff;
        font-size: 14px;
        height: 30px;
        width: 140px;
        ::-webkit-input-placeholder {
          color: #fff;
        }
        ::-moz-placeholder {
          color: #fff;
        }
        :-ms-input-placeholder {
          color: #fff;
        }
        :-moz-placeholder {
          color: #fff;
        }
      `}
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
