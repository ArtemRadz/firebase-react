import React, { useState } from 'react';

import { css } from '@emotion/core';

import { database } from '../firebase/firebase';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const restaurantRef = database.ref('/restaurants');

  const handleSubmit = () => {
    restaurantRef
      .push({ name })
      .then(() => {
        setName('');
        setMessage('Item added');
      })
      .catch(error => {
        setMessage(`Item didn't add. Message error: ${error}`);
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
      <Input value={name} handleChange={event => setName(event.target.value)} />
      <Button title={'Submit'} disabled={!name} handleClick={handleSubmit} />
      <p>{message}</p>
    </form>
  );
};

export default Form;
