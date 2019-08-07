import React, { useState } from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import Button from './Button';
import Input from './Input';

const Form = ({ restaurantRef }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleInput = event => setName(event.target.value);

  const handleSubmit = () => {
    restaurantRef.current
      .push({ name })
      .then(() => {
        setName('');
        setMessage('Item added');
      })
      .catch(error => {
        setMessage(`Item not added. Message error: ${error}`);
      })
      .finally(() => {
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <form
      css={css`
        margin: 15px 0;
      `}
    >
      <Input value={name} handleChange={handleInput} />
      <Button title={'Submit'} disabled={!name} handleClick={handleSubmit} />
      <p>{message}</p>
    </form>
  );
};

Form.propTypes = {
  restaurantRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
};

export default Form;
