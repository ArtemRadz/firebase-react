import React from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const Button = ({ title, disabled = false, handleClick }) => {
  return (
    <button
      css={css`
        color: #fff;
        padding: 0 15px;
        height: 30px;
        border: 0;
        border-radius: 8px;
        background-color: #039be5;
        font-size: 14px;
        cursor: pointer;
        &:disabled {
          opacity: 0.5;
        }
      `}
      disabled={disabled}
      onClick={event => {
        event.preventDefault();
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default Button;
